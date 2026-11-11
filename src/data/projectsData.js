export const projectFilterTags = [
  "All",
  "Architecture",
  "Apex",
  "LWC",
  "Flows",
  "Integrations",
  "RCM & Healthcare"
];

export const projectsData = [
  {
    id: "routing-engine-v2",
    title: "High-Throughput RCM Dynamic Routing Engine (RRv2)",
    client: "ALLIANCE Healthcare LLC",
    role: "Lead Salesforce Developer / Technical Lead",
    period: "August 2025 – Present",
    categoryTags: ["Architecture", "Apex", "RCM & Healthcare"],
    primaryTag: "Architecture",
    featured: true,
    
    // 3 Punchy Core Metrics for Initial Viewport
    threeMetrics: {
      challenge: "Processing 1,000,000+ daily encounters across 25 priority tiers, 170+ rules, 1,100+ conditions, and patient surname Alpha Splits without tripping 100-SOQL and 10s CPU governor limits.",
      solution: "Engineered an in-memory metadata evaluation engine (RoutingEngine.cls & RoutingConditionEvaluator.cls) with static repository caching (RoutingConfigRepository.cls) and O(1) condition lookup map trees.",
      roi: "Reduced daily manual case routing latency from 4+ hours to sub-second real-time execution; 99.9% automated triage accuracy across 1M+ daily transactions."
    },

    // Expanded Deep Technical Details
    deepDive: {
      systemScope: "Mission-critical Revenue Cycle Management (RCM) claim triage and automated collector assignment system.",
      apexClasses: [
        "RoutingEngine.cls (406 lines - Core evaluation loop & match decision)",
        "RoutingService.cls (1043 lines - Service orchestrator & DML batching)",
        "RoutingConditionEvaluator.cls (557 lines - Grouped boolean parser)",
        "RoutingConfigRepository.cls (Static cache layer for zero-SOQL execution)",
        "RoutingAdminController.cls (1380+ lines - @AuraEnabled LWC backend)",
        "RoutingOwnerResolver.cls (Queue, Direct User & Team Round-Robin resolver)"
      ],
      testCoverage: "38 enterprise test classes with >92% average code coverage and comprehensive mock factories.",
      governorMitigation: "Static map pre-caching ensures 0 SOQL inside evaluation loops; selective index querying; FOR UPDATE row-level locks strictly isolated to round-robin increment steps.",
      architectureWorkflow: `[MuleSoft Daily Encounter Stream] 
       ↓ (1,000,000+ Encounters)
[Bulk Ingestion Trigger / RoutingInvoker.cls]
       ↓
[RoutingConfigRepository.cls (Static In-Memory Cache)]
  ├── Loads 170+ Active Routing_Rule__c
  └── Loads 1,100+ Routing_Condition__c into Map Trees
       ↓
[RoutingEngine.cls - Top-to-Bottom Priority Evaluation (P1 to P25)]
  ├── Evaluates Logical Groups (OR logic inside, AND across)
  ├── Partitions by Patient Last Name (Staff Alpha Splits)
  └── Evaluates Operators (EQUALS, CONTAINS, IN_VALUE_SET, BETWEEN)
       ↓
[RoutingOwnerResolver.cls - Strategy Dispatch]
  ├── Direct User Assignment (e.g. Daniel Venegas)
  ├── Queue Only Assignment (e.g. Injection Workbook Queue)
  └── Team Round-Robin with Mutex Locking
       ↓
[DML Bulk Committer] -> Stamps Priority, Assigns Owner & Creates 21-Day Follow-Up Task
       ↓
[Routing_Audit__c Logger] -> Complete Immutable Compliance Trail`,
      codeSnippet: `// High-Performance In-Memory Condition Evaluator
public with sharing class RoutingConditionEvaluator {
    public static Boolean evaluate(SObject record, List<Routing_Condition__c> conditions) {
        if (conditions == null || conditions.isEmpty()) return true;
        
        // Group conditions by Logical_Group__c (Within group: OR logic; Across groups: AND logic)
        Map<String, List<Routing_Condition__c>> groupMap = new Map<String, List<Routing_Condition__c>>();
        for (Routing_Condition__c cond : conditions) {
            String grp = String.isNotBlank(cond.Logical_Group__c) ? cond.Logical_Group__c : 'DEFAULT';
            if (!groupMap.containsKey(grp)) groupMap.put(grp, new List<Routing_Condition__c>());
            groupMap.get(grp).add(cond);
        }
        
        for (String grp : groupMap.keySet()) {
            Boolean groupMatched = false;
            for (Routing_Condition__c cond : groupMap.get(grp)) {
                if (matchCondition(record, cond)) {
                    groupMatched = true;
                    break; // OR logic satisfied within group
                }
            }
            if (!groupMatched) return false; // AND logic failure across groups
        }
        return true;
    }
}`
    }
  },
  {
    id: "snowflake-mulesoft-pipeline",
    title: "Snowflake & MuleSoft Bi-Directional Financial Sync Pipeline",
    client: "ALLIANCE Healthcare / US Healthcare Provider",
    role: "Lead Salesforce Developer / Technical Lead",
    period: "November 2024 – Present",
    categoryTags: ["Integrations", "Apex", "Architecture", "RCM & Healthcare"],
    primaryTag: "Integrations",
    featured: true,

    // 3 Punchy Core Metrics for Initial Viewport
    threeMetrics: {
      challenge: "Synchronizing 4.4M payment records, 2.4M claim lines, and 1.3M denial lines from external Snowflake data warehouses into Salesforce without exceeding daily 24-hour API call limits or locking transaction tables.",
      solution: "Architected a MuleSoft Connected App with OAuth 2.0 token caching and engineered ClaimNightlyBatch.cls (200-record batch chunking with Database.Stateful and DLQ auditing).",
      roi: "4.4M payment records synchronized nightly with < 0.01% error rate; eliminated 100% of manual financial reconciliation spreadsheets."
    },

    deepDive: {
      systemScope: "High-volume bi-directional enterprise integration pipeline linking Snowflake Data Lakes to Salesforce Custom Financial Objects.",
      apexClasses: [
        "ClaimNightlyBatch.cls (Nightly financial reconciliation & KPI rollup)",
        "ClaimDenialSyncBatch2.cls (Daily denial line synchronization)",
        "DenialReviewTaskBatch2.cls (Automated denial review task dispatcher)",
        "ClaimNightlyBatchRestService.cls (REST endpoint for programmatic triggers)"
      ],
      testCoverage: "100% test class coverage across all batch schedulers and REST service invokers.",
      governorMitigation: "Chunked batch execution at 200 scope size; streaming query locators; dedicated Integration_Log__c object capturing payload dumps for automated replay.",
      architectureWorkflow: `[Snowflake Enterprise Data Lake]
       ↕ (CDC / Delta Extract via Timestamp Watermarks)
[MuleSoft Middleware ESB]
       ↕ (REST Batch API 2.0 with OAuth 2.0 Token Caching)
[Salesforce Connected App]
       ↓
[ClaimNightlyBatch.cls (Database.Batchable Scope: 200)]
  ├── Matches Claim_Line__c records by External System ID
  ├── Recalculates Aging Buckets (0-30, 31-60, 61-90, 91-120, 120+ Days)
  └── Generates Priority Denial Review Tasks for Collectors
       ↓
[Integration_Log__c] -> Real-Time Error Logging & Automated Alerts`,
      codeSnippet: `// Batch Ingestion & Financial Recalculation Engine
public with sharing class ClaimNightlyBatch implements Database.Batchable<sObject>, Database.Stateful {
    public Integer totalProcessed = 0;
    public Integer totalErrors = 0;

    public Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator([
            SELECT Id, Claim_Number__c, Total_Balance__c, Denial_Code__c, 
                   Service_Date__c, Aging_Days__c, Sync_Status__c 
            FROM Claim__c 
            WHERE Sync_Status__c = 'Pending_Nightly_Sync'
        ]);
    }

    public void execute(Database.BatchableContext bc, List<Claim__c> scope) {
        List<Task> collectorTasks = new List<Task>();
        for (Claim__c claim : scope) {
            claim.Sync_Status__c = 'Reconciled';
            claim.Last_Reconciliation_Date__c = System.now();
            if (String.isNotBlank(claim.Denial_Code__c)) {
                collectorTasks.add(new Task(
                    WhatId = claim.Id,
                    Subject = 'Urgent Denial Review: ' + claim.Denial_Code__c,
                    Priority = 'High',
                    ActivityDate = Date.today().addDays(1)
                ));
            }
        }
        Database.SaveResult[] results = Database.update(scope, false);
        if (!collectorTasks.isEmpty()) Database.insert(collectorTasks, false);
        totalProcessed += scope.size();
    }

    public void finish(Database.BatchableContext bc) {
        System.debug('ClaimNightlyBatch Finished. Total Reconciled: ' + totalProcessed);
    }
}`
    }
  },
  {
    id: "admin-lwc-workbench",
    title: "2,677-Line Routing Wizard & 7-Modal Collector Workbench",
    client: "ALLIANCE Healthcare LLC",
    role: "Technical Lead / Senior Developer",
    period: "August 2025 – Present",
    categoryTags: ["LWC", "Architecture", "RCM & Healthcare"],
    primaryTag: "LWC",
    featured: true,

    // 3 Punchy Core Metrics for Initial Viewport
    threeMetrics: {
      challenge: "Healthcare business administrators were forced to file developer tickets for every routing rule change, while collectors suffered severe tab fatigue opening 6+ separate browser tabs per patient encounter.",
      solution: "Engineered routingsetup (a 2,677-line 5-step LWC configuration wizard with real-time validation) and encounterWorkspace (a unified workbench housing 7 sub-modals for Claims, Lines, Denials, Payers, Providers, Locations, and Charges).",
      roi: "65% faster rule authoring by business users with zero code deployments; boosted collector daily task throughput by +35%."
    },

    deepDive: {
      systemScope: "Comprehensive Lightning Web Component suite empowering visual rule administration and high-velocity healthcare collections.",
      apexClasses: [
        "RoutingAdminController.cls (1380+ lines, 30+ @AuraEnabled methods)",
        "EncounterWorkspaceController.cls (Unified multi-object data provider)",
        "RoutingSimulatorService.cls (2-mode rule simulation engine)"
      ],
      testCoverage: ">95% code coverage across all controller endpoints.",
      governorMitigation: "Client-side memoization, debounced filter inputs, selective field queries, and Lightning Data Service (LDS) cache invalidation.",
      architectureWorkflow: `[System Admin Console] ──(routingsetup.js - 2677 lines)
  ├── Step 1: Basic Rule Configuration (Priority, Rule Type, Effective Dates)
  ├── Step 2: Dynamic Condition Builder (Field Picklists, Value Sets, Operators)
  ├── Step 3: Assignment & Outcome Strategy (Direct, Queue, Alpha Split)
  ├── Step 4: Value Sets Inline Management
  └── Step 5: Pre-Flight Rule Review & Instant Deploy
       ↓
[routingSimulator.js - 370 lines]
  ├── Record Search Mode (Live encounter simulation)
  └── Manual Input Mode (What-if scenario validation)
       ↓
[encounterWorkspace.js - 192 lines]
  └── Single-Pane-of-Glass Hub: 7 Sub-Modals (Claims, Lines, Denials, Payers, Providers, Locations, Charges)`,
      codeSnippet: `// LWC JavaScript Controller: Dynamic Rule Wizard Manager
import { LightningElement, track, wire } from 'lwc';
import getRules from '@salesforce/apex/RoutingAdminController.getRules';
import saveRuleWithConditions from '@salesforce/apex/RoutingAdminController.saveRuleWithConditions';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RoutingSetupWizard extends LightningElement {
    @track currentStep = '1';
    @track ruleRecord = { Is_Active__c: true, Priority__c: 1, Object_API_Name__c: 'Encounter__c' };
    @track conditions = [];
    @track outcomes = [];
    @track isDeploying = false;

    async handleDeployRule() {
        this.isDeploying = true;
        try {
            await saveRuleWithConditions({ 
                ruleJson: JSON.stringify(this.ruleRecord),
                conditionsJson: JSON.stringify(this.conditions),
                outcomesJson: JSON.stringify(this.outcomes)
            });
            this.dispatchEvent(new ShowToastEvent({
                title: 'Rule Deployed',
                message: 'Routing metadata successfully published to production org.',
                variant: 'success'
            }));
            this.currentStep = '1';
        } catch (error) {
            this.dispatchEvent(new ShowToastEvent({
                title: 'Deployment Failed',
                message: error.body?.message || 'Unknown validation exception',
                variant: 'error'
            }));
        } finally {
            this.isDeploying = false;
        }
    }
}`
    }
  },
  {
    id: "medicare-flowsheet-engine",
    title: "Medicare 8-Minute Clinical Flowsheet Engine & Multi-Visit Sync",
    client: "US Healthcare Provider (Phases 2 & 3)",
    role: "Salesforce Administrator & Developer (Team Lead)",
    period: "March 2024 – March 2025",
    categoryTags: ["Flows", "LWC", "RCM & Healthcare"],
    primaryTag: "Flows",
    featured: false,

    // 3 Punchy Core Metrics for Initial Viewport
    threeMetrics: {
      challenge: "Clinical staff spent 15+ minutes per appointment calculating complex Medicare 8-minute billing tiers and re-entering identical exercise therapy data across multiple visit reasons (Physical Therapy, Occupational Therapy, Chiropractic).",
      solution: "Developed an interactive Flow & LWC engine enforcing automated 8-minute tiered calculation brackets (8–127 mins) and engineered automatic cross-visit data synchronization for same-date appointments.",
      roi: "-80% clinical documentation time (15 mins down to <3 mins); 100% compliance with federal Medicare reimbursement guidelines."
    },

    deepDive: {
      systemScope: "Clinical documentation and Medicare compliance automation application integrated into Salesforce Health Cloud Appointment records.",
      apexClasses: [
        "FlowsheetApprovalController.cls (Role-based access: Provider, Floor Staff, Supervisor)",
        "MedicareUnitCalculator.cls (Strict 8-minute bracket calculation)",
        "CrossVisitSyncService.cls (Synchronizes PT, OT, Chiro same-date records)"
      ],
      testCoverage: ">94% code coverage with mock multi-visit appointment data.",
      governorMitigation: "Enforces server-side unit validation preventing client-side tampering; bulkified cross-record updates.",
      architectureWorkflow: `[Appointment Record Opened]
       ↓
[Flowsheet LWC UI on Appointment Page]
  ├── User enters total minutes per therapeutic exercise
  └── Automated Medicare 8-Minute Calculator computes billing units:
      ├─ 1 Unit: 8–22 mins  | 2 Units: 23–37 mins | 3 Units: 38–52 mins
      ├─ 4 Units: 53–67 mins | 5 Units: 68–82 mins | 6 Units: 83–97 mins
      └─ 7 Units: 98–112 mins | 8 Units: 113–127 mins
       ↓
[Cross-Visit Reason Synchronizer]
  └── If Patient has PT, OT, and CHIRO on same date:
      └── Auto-populates flowsheet data across all 3 visit records
       ↓
[Role-Based Approval Workflow]
  ├── Floor Staff -> Submits Flowsheet
  ├── Provider -> Reviews, Edits & Approves (or sends back)
  └── Supervisor -> Mass Reassignment & Executive Oversight`,
      codeSnippet: `// Strict Medicare 8-Minute Rule Calculator Engine
public class MedicareUnitCalculator {
    public static Integer calculateUnits(Integer totalMinutes) {
        if (totalMinutes < 8) return 0;
        if (totalMinutes <= 22) return 1;
        if (totalMinutes <= 37) return 2;
        if (totalMinutes <= 52) return 3;
        if (totalMinutes <= 67) return 4;
        if (totalMinutes <= 82) return 5;
        if (totalMinutes <= 97) return 6;
        if (totalMinutes <= 112) return 7;
        if (totalMinutes <= 127) return 8;
        return 8 + ((totalMinutes - 127) / 15);
    }
}`
    }
  },
  {
    id: "docai-react-api-portal",
    title: "Google DocAI OCR Extraction & 24-Form React API Gateway",
    client: "Healthcare Company",
    role: "Salesforce Administrator & Developer",
    period: "April 2023 – June 2023",
    categoryTags: ["Integrations", "Apex"],
    primaryTag: "Integrations",
    featured: false,

    // 3 Punchy Core Metrics for Initial Viewport
    threeMetrics: {
      challenge: "Manual transcription of 24 dynamic patient onboarding web forms and thousands of archived paper medical PDFs into Salesforce created massive operational backlogs and data entry errors.",
      solution: "Engineered secure custom Apex REST web services for real-time React form ingestion, integrated Google DocAI OCR for PDF parsing, and automated instant PDF generation and email dispatch.",
      roi: "-95% reduction in manual data entry overhead; 24 external web forms connected with real-time record creation and zero authentication faults."
    },

    deepDive: {
      systemScope: "Bi-directional patient intake portal linking external React web applications with Salesforce Custom Objects and AI document extraction.",
      apexClasses: [
        "PatientIntakeRestService.cls (Custom @RestResource endpoint)",
        "DocAiIngestionService.cls (OCR payload entity parser)",
        "GeneratePatientPdfJob.cls (Async Queueable PDF generator & email dispatcher)"
      ],
      testCoverage: ">91% code coverage with Postman automated API collections.",
      governorMitigation: "Asynchronous Queueable decoupling for heavy PDF rendering; strict payload size validation on REST endpoints.",
      architectureWorkflow: `[24 External React Web Forms] ──(JSON POST via HTTPS)──> [Apex @RestResource Service]
                                                               ↓
[Legacy Paper PDFs] ──(Google DocAI OCR Parser)────────> [Custom Patient_Intake__c Object]
                                                               ↓
                                                [Async Queueable PDF Generation]
                                                               ↓
                                                [Automated Confirmation Email & Attachment]`,
      codeSnippet: `// Custom REST Resource for External React Form Submissions
@RestResource(urlMapping='/v2/patient/intake/*')
global with sharing class PatientIntakeRestService {
    @HttpPost
    global static String processIntake() {
        RestRequest req = RestContext.request;
        String jsonPayload = req.requestBody.toString();
        
        try {
            PatientWrapper payload = (PatientWrapper) JSON.deserialize(jsonPayload, PatientWrapper.class);
            Patient_Intake__c intake = new Patient_Intake__c(
                First_Name__c = payload.firstName,
                Last_Name__c = payload.lastName,
                DOB__c = payload.dob,
                Form_Type__c = payload.formCode,
                Submission_Status__c = 'Verified'
            );
            insert intake;
            
            // Dispatch async PDF archival & email confirmation
            System.enqueueJob(new GeneratePatientPdfJob(intake.Id, payload.email));
            return JSON.serialize(new Map<String, Object>{ 'status' => 'SUCCESS', 'id' => intake.Id });
        } catch (Exception ex) {
            RestContext.response.statusCode = 400;
            return JSON.serialize(new Map<String, Object>{ 'status' => 'ERROR', 'message' => ex.getMessage() });
        }
    }
}`
    }
  },
  {
    id: "spd-async-automation",
    title: "Sales Process Data (SPD) Async Engine & Queueable Chaining",
    client: "Salesforce Platform – Internal Process Improvement",
    role: "Salesforce Administrator & Developer (Team Lead)",
    period: "April 2025 – August 2025",
    categoryTags: ["Apex", "Flows", "Architecture"],
    primaryTag: "Apex",
    featured: false,

    // 3 Punchy Core Metrics for Initial Viewport
    threeMetrics: {
      challenge: "Commercial Sales Process Data (SPD) failed to generate upon Case closure due to complex metadata validation, and Platform License users could not access standard CRM records.",
      solution: "Engineered scheduled Apex triggers dispatching self-throttling chained Queueable jobs (SpdProcessingQueueable.cls) with automatic Batch failover and custom LWC interfaces for Platform License users.",
      roi: "100% automated case closure sync; 0 background CPU timeouts; 40+ Platform License users successfully enabled."
    },

    deepDive: {
      systemScope: "Enterprise metadata automation framework capturing commercial governance records upon case closure.",
      apexClasses: [
        "SpdProcessingQueueable.cls (Chained Queueable processor)",
        "SpdBatchFallbackService.cls (Batch fallback for heavy volumes)",
        "SpdRecordViewController.cls (LWC controller for Platform Licenses)"
      ],
      testCoverage: ">93% code coverage across queueable and batch test suites.",
      governorMitigation: "Dynamic stack depth check (Limits.getQueueableJobs()) before enqueuing next chain; automatic transition to Database.executeBatch() when limits are constrained.",
      architectureWorkflow: `[Case Closed Event Trigger]
       ↓
[SpdProcessingQueueable.cls - Step 1: Metadata Validation]
  └── Evaluates complex closure conditions in Custom Metadata
       ↓
[SpdProcessingQueueable.cls - Step 2: Record Generation & Sharing]
  └── Generates custom SPD records & provisions Platform License sharing
       ↓
[SpdBatchFallbackService.cls (Failover)] -> Handles unapproved exception backlogs`,
      codeSnippet: `// Self-Throttling Queueable Chaining with Batch Fallback
public class SpdProcessingQueueable implements Queueable {
    private List<Id> caseIds;
    private Integer step;

    public SpdProcessingQueueable(List<Id> caseIds, Integer step) {
        this.caseIds = caseIds;
        this.step = step;
    }

    public void execute(QueueableContext context) {
        if (step == 1) {
            SpdService.generateSpdRecords(caseIds);
            if (Limits.getQueueableJobs() < Limits.getLimitQueueableJobs()) {
                System.enqueueJob(new SpdProcessingQueueable(caseIds, 2));
            } else {
                Database.executeBatch(new SpdBatchFallbackService(caseIds), 100);
            }
        } else if (step == 2) {
            SpdService.applyPlatformLicenseGrants(caseIds);
        }
    }
}`
    }
  }
];
