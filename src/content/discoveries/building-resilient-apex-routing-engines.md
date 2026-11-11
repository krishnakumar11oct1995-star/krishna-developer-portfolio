---
title: "Building Resilient Dynamic Routing Engines with Custom Metadata in Salesforce"
date: "2026-07-28"
author: "Krishna Kumar"
readTime: "8 min read"
featured: true
categoryTags: ["Salesforce Architecture", "Apex", "Custom Metadata", "Governor Limits"]
excerpt: "How to architect metadata-driven rule engines that evaluate 1,100+ business conditions and route 1,000,000+ records in O(1) memory without modifying code."
---

## The Problem with Hardcoded Business Logic

In fast-growing enterprise healthcare and insurance ecosystems, case and encounter routing criteria change weekly. When routing logic is hardcoded inside Apex triggers or built into hundreds of brittle declarative Process Builders/Record-Triggered Flows, organizations experience:

1. **CPU Limit Crashes**: Record-Triggered Flows executing complex conditional loops hit the 10,000ms CPU timeout limit.
2. **Deployment Bottlenecks**: Changing an assignment rule requires developer sprints, test class authoring, and weekend change-set deployments.
3. **Audit Blind Spots**: Lack of automated decision logging leaves compliance teams unable to explain why an encounter was assigned to a specific specialist.

---

## The Solution: The Metadata-Driven Evaluator Pattern

By modeling **Rules**, **Conditions**, and **Outcomes** as Custom Metadata Types (`Routing_Rule__mdt`, `Routing_Condition__mdt`, `Routing_Outcome__mdt`), business administrators can configure rules in a visual UI with zero code deployments.

---

## Static Caching & In-Memory Map Trees

The cornerstone of scaling to **1,000,000+ daily transactions** is ensuring that rule evaluation requires **0 SOQL queries per transaction**:

```apex
public with sharing class RoutingConfigRepository {
    private static Map<String, List<RoutingRuleDTO>> cachedRulesByObject;

    public static List<RoutingRuleDTO> getActiveRules(String objectApiName) {
        if (cachedRulesByObject == null) {
            cachedRulesByObject = new Map<String, List<RoutingRuleDTO>>();
            preloadMetadata();
        }
        return cachedRulesByObject.containsKey(objectApiName) 
            ? cachedRulesByObject.get(objectApiName) 
            : new List<RoutingRuleDTO>();
    }

    private static void preloadMetadata() {
        // Single SOQL query across entire transaction context
        List<Routing_Rule__mdt> rawRules = [
            SELECT Id, MasterLabel, DeveloperName, Priority__c, Object_API_Name__c,
                   (SELECT Field_API_Name__c, Operator__c, Target_Value__c, Logical_Group__c 
                    FROM Routing_Conditions__r WHERE Is_Active__c = true ORDER BY Sequence__c ASC),
                   (SELECT Strategy__c, Target_Id__c, Create_Task__c 
                    FROM Routing_Outcomes__r ORDER BY Sequence__c ASC)
            FROM Routing_Rule__mdt
            WHERE Is_Active__c = true
            ORDER BY Priority__c ASC
        ];
        
        for (Routing_Rule__mdt r : rawRules) {
            if (!cachedRulesByObject.containsKey(r.Object_API_Name__c)) {
                cachedRulesByObject.put(r.Object_API_Name__c, new List<RoutingRuleDTO>());
            }
            cachedRulesByObject.get(r.Object_API_Name__c).add(new RoutingRuleDTO(r));
        }
    }
}
```

---

## Logical Group Evaluation: OR inside, AND across

Conditions are evaluated using a 2-tier boolean structure:
- **Within a Logical Group** (e.g. `GROUP_A`): Evaluated with **OR** logic (any condition matching satisfies the group).
- **Across Logical Groups** (e.g. `GROUP_A` AND `GROUP_B`): Evaluated with **AND** logic (all groups must evaluate to true).

```apex
public class ConditionEvaluator {
    public static Boolean matchRule(SObject record, List<ConditionDTO> conditions) {
        Map<String, List<ConditionDTO>> groups = new Map<String, List<ConditionDTO>>();
        for (ConditionDTO cond : conditions) {
            String grp = cond.logicalGroup != null ? cond.logicalGroup : 'DEFAULT';
            if (!groups.containsKey(grp)) groups.put(grp, new List<ConditionDTO>());
            groups.get(grp).add(cond);
        }

        for (String grp : groups.keySet()) {
            Boolean groupSatisfied = false;
            for (ConditionDTO cond : groups.get(grp)) {
                if (evaluateSingle(record, cond)) {
                    groupSatisfied = true;
                    break; // Group OR condition satisfied
                }
            }
            if (!groupSatisfied) return false; // Rule fails AND requirement
        }
        return true;
    }
}
```

---

## Architectural Rules for High-Volume Routing

1. **Preload Once, Evaluate in Memory**: Never issue SOQL queries inside condition evaluation loops.
2. **Isolate Locks to Assignment Step**: Use `FOR UPDATE` only on the specific round-robin counter state record, never on the core business records.
3. **Immutable Compliance Logging**: Insert `Routing_Audit__c` records asynchronously or in a final bulk DML step to record exactly which rule ID matched and why.
