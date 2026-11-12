import { experienceData, careerVelocityStages } from './experienceData';
import { projectsData, projectFilterTags } from './projectsData';

export { experienceData, careerVelocityStages, projectsData, projectFilterTags };

export const personalInfo = {
  name: "Krishna Kumar",
  role: "Salesforce Developer & Technical Lead",
  tagline: "Architecting high-scale Apex routing engines, reactive Lightning Web Components (LWC), and enterprise cloud integrations.",
  shortBio: "Salesforce Technical Lead with expertise in end-to-end enterprise implementations, complex system architecture, and team leadership across Healthcare, Insurance, and Manufacturing domains. Proven track record designing scalable routing engines handling 1M+ daily transactions, managing multi-million record Snowflake/MuleSoft data pipelines, and developing advanced LWC applications.",
  location: "Hyderabad, India",
  email: "bshakthy@gmail.com",
  trailhead: "https://trailblazer.me/id/krishnakumar1995",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  profileImage: "/profile.jpg",
  resumeDocx: "/Krishna_Kumar_Resume.docx",
  resumePdf: "/Krishna_Salesforce_Resume.pdf",
  availability: "Available for Tech Lead & Salesforce Architecture Roles",
  stats: [
    { label: "Enterprise Experience", value: "3+ Years", detail: "Healthcare, Insurance & Manufacturing" },
    { label: "Daily Record Throughput", value: "1M+ Records", detail: "Custom Apex Dynamic Routing Engine" },
    { label: "Rule Evaluation Engine", value: "170+ Rules", detail: "1,100+ Live Conditions in Apex" },
    { label: "High-Volume Batch Pipeline", value: "4.4M+ Payments", detail: "MuleSoft & Snowflake Sync Pipeline" },
    { label: "Official Certifications", value: "2x Certified", detail: "PD I & Salesforce Administrator" }
  ]
};

export const certifications = [
  {
    title: "Salesforce Certified Platform Developer I",
    credentialId: "PD-I-VERIFIED",
    issuer: "Salesforce",
    type: "Developer Certification",
    description: "Demonstrated mastery of data modeling, Apex business logic, Lightning Web Components, trigger design patterns, and asynchronous processing within governor limits.",
    badge: "PD I",
    color: "from-sky-500 to-blue-600",
    icon: "Code"
  },
  {
    title: "Salesforce Certified Administrator",
    credentialId: "ADM-201-VERIFIED",
    issuer: "Salesforce",
    type: "Admin & Architecture Certification",
    description: "Validated expertise in Org-Wide Defaults, Role Hierarchy, Sharing Rules, Flow Automation, Security Controls, and Data Management at enterprise scale.",
    badge: "ADM 201",
    color: "from-teal-500 to-emerald-600",
    icon: "Shield"
  }
];

export const skillCategories = [
  {
    category: "Apex & Backend Architecture",
    description: "High-throughput business logic, asynchronous processing, and governor-limit optimized design.",
    icon: "Server",
    skills: [
      { name: "Apex Classes & Triggers", level: 95, tag: "Core Apex" },
      { name: "Batch & Queueable Chaining", level: 92, tag: "Async Processing" },
      { name: "Future Methods & Scheduled Jobs", level: 90, tag: "Automation" },
      { name: "SOQL & SOSL Query Optimization", level: 95, tag: "Data Layer" },
      { name: "Custom Metadata & Settings", level: 92, tag: "Dynamic Rules" },
      { name: "Apex Unit Testing & Mocks (90%+ Coverage)", level: 94, tag: "Quality Assurance" }
    ]
  },
  {
    category: "Lightning & Frontend UI",
    description: "Reactive, accessible, and high-performance user interfaces powered by modern Web Standards.",
    icon: "Layout",
    skills: [
      { name: "Lightning Web Components (LWC)", level: 94, tag: "Modern UI" },
      { name: "Salesforce Lightning Design System (SLDS)", level: 90, tag: "Design System" },
      { name: "Modern JavaScript (ES6+) & DOM APIs", level: 88, tag: "Frontend" },
      { name: "Aura Framework Migration", level: 85, tag: "Modernization" },
      { name: "Event-Driven Pub/Sub & LMS", level: 89, tag: "State & Messaging" },
      { name: "HTML5 / Modern CSS / Responsive", level: 88, tag: "Styling" }
    ]
  },
  {
    category: "Off-Platform Integrations & APIs",
    description: "Seamless bi-directional connectivity between Salesforce and enterprise data ecosystems.",
    icon: "Network",
    skills: [
      { name: "MuleSoft Enterprise Integration", level: 88, tag: "Middleware" },
      { name: "Snowflake Data Pipeline Sync", level: 86, tag: "Data Warehouse" },
      { name: "Custom REST & SOAP Web Services", level: 92, tag: "API Architecture" },
      { name: "Google DocAI & Docparser OCR", level: 85, tag: "AI Extraction" },
      { name: "Postman API Testing & Automation", level: 90, tag: "Integration QA" },
      { name: "Connected Apps & OAuth 2.0", level: 89, tag: "Security" }
    ]
  },
  {
    category: "Architecture, Security & Governance",
    description: "Enterprise data modeling, multi-tenant security enforcement, and CI/CD pipelines.",
    icon: "ShieldCheck",
    skills: [
      { name: "Object-Level & Field-Level Security (FLS)", level: 95, tag: "Security" },
      { name: "Org-Wide Defaults (OWD) & Sharing Rules", level: 94, tag: "Access Control" },
      { name: "Role Hierarchy & Territory Management", level: 90, tag: "User Structure" },
      { name: "Sandbox Lifecycle & Release Management", level: 88, tag: "DevOps" },
      { name: "Apex Data Loader & Import Wizards", level: 92, tag: "Data Ops" },
      { name: "Copado / Package Deployment", level: 84, tag: "CI/CD" }
    ]
  },
  {
    category: "Declarative Automation & Analytics",
    description: "Low-code enterprise workflows, approval routing, and executive analytics dashboards.",
    icon: "Workflow",
    skills: [
      { name: "Flow Builder (Screen, Record, Schedule)", level: 94, tag: "Automation" },
      { name: "Complex Approval Processes", level: 90, tag: "Governance" },
      { name: "Assignment, Escalation & Auto-Response", level: 92, tag: "Case Routing" },
      { name: "Declarative Lookup Rollup Summaries (DLRS)", level: 88, tag: "Rollups" },
      { name: "Custom Reports & Dynamic Dashboards", level: 90, tag: "Business Intelligence" }
    ]
  }
];

export const discoveries = [
  {
    id: "queueable-apex-chaining",
    title: "Mastering Queueable Apex Chaining for Heavy Data Ingestion",
    category: "Apex Architecture",
    date: "February 2026",
    readTime: "6 min read",
    summary: "How to architect resilient asynchronous pipelines in Salesforce that process hundreds of thousands of records without hitting Queueable depth limits or CPU timeouts.",
    tags: ["Apex", "Async Processing", "Queueable", "Architecture"],
    excerpt: "Queueable Apex offers greater flexibility than @future methods, but chaining jobs improperly can trigger fatal limits or lock database rows. Here is how we engineered reliable self-metering job chains.",
    content: `### The Challenge of Large-Scale Asynchronous Operations

When integrating enterprise systems like MuleSoft or external financial databases into Salesforce, single transactions often involve tens of thousands of complex records requiring validation, custom metadata evaluation, and DML operations. 

While \`@future\` methods cannot handle complex objects or return Job IDs, **Queueable Apex** is the gold standard. However, unmanaged chaining can quickly exhaust limits (\`System.AsyncException: Maximum stack depth reached\`).

---

### Architectural Pattern: Self-Throttling Queueable Engine

To guarantee resilience, we decouple the payload collection from the execution step:

1. **Stateful Batch / Staging Table**: Store unprocessed record IDs in a lightweight staging table or cursor.
2. **Dynamic Chaining Verification**: Check \`Limits.getQueueableJobs()\` and remaining CPU time before enqueuing the next segment.
3. **Batch Fallback Trigger**: If queue depth exceeds predefined limits, transition seamlessly to \`Database.executeBatch()\`.

\`\`\`apex
public class ResilientQueueableProcessor implements Queueable, Database.AllowsCallouts {
    private List<Id> recordIdsToProcess;
    private Integer batchSize = 100;

    public ResilientQueueableProcessor(List<Id> ids) {
        this.recordIdsToProcess = ids;
    }

    public void execute(QueueableContext context) {
        List<Id> currentChunk = new List<Id>();
        List<Id> remainingChunk = new List<Id>();

        for (Integer i = 0; i < recordIdsToProcess.size(); i++) {
            if (i < batchSize) {
                currentChunk.add(recordIdsToProcess[i]);
            } else {
                remainingChunk.add(recordIdsToProcess[i]);
            }
        }

        // Process current chunk with full error trapping
        processRecords(currentChunk);

        // Chain remaining records safely
        if (!remainingChunk.isEmpty()) {
            if (Limits.getQueueableJobs() < Limits.getLimitQueueableJobs()) {
                System.enqueueJob(new ResilientQueueableProcessor(remainingChunk));
            } else {
                // Fallback to scheduled batch or delayed execution
                Database.executeBatch(new FallbackBatchProcessor(remainingChunk), 200);
            }
        }
    }
}
\`\`\`

---

### Key Takeaways:
- **Never hardcode chunk sizes**: Calculate batch volume based on trigger complexity and child rollups.
- **Implement idempotency**: Ensure that re-running a failed job does not create duplicate financial records or tasks.
- **Log structured metrics**: Always record execution time and failed record IDs into a custom \`Integration_Log__c\` object.`
  },
  {
    id: "dynamic-routing-engines",
    title: "Architecting Dynamic Routing Engines with Custom Metadata",
    category: "Enterprise Architecture",
    date: "January 2026",
    readTime: "8 min read",
    summary: "Designing metadata-driven evaluation frameworks in Salesforce to evaluate 1,100+ business conditions and route 1M+ records without modifying code.",
    tags: ["Architecture", "Custom Metadata", "SOQL", "Performance"],
    excerpt: "Hardcoding assignment logic in Apex or relying on hundreds of brittle Process Builders leads to technical debt. Learn how custom metadata enables zero-code rule updates.",
    content: `### Why Hardcoded Business Rules Fail at Scale

In fast-moving healthcare and financial enterprises, case routing rules change weekly. If changing an assignment threshold requires an Apex code deployment and test class execution, developer velocity stalls.

By extracting **170+ routing rules** and **1,100+ evaluation conditions** into Custom Metadata Types (\`Routing_Rule__mdt\` and \`Routing_Condition__mdt\`), business administrators can update criteria through a custom LWC UI with zero downtime.

---

### In-Memory Evaluation Architecture

The key to processing **1,000,000+ daily encounters** is avoiding SOQL queries inside loops:

1. **Preload all Active Metadata in a Static Map**: Custom metadata queries are cached by Salesforce and consume negligible query limits.
2. **Tokenized Expression Parser**: Convert boolean condition logic (\`1 AND (2 OR 3)\`) into evaluation trees evaluated in-memory.
3. **Bulk Assignment DML**: Collect all target assignments and issue a single bulk \`update\` statement.

\`\`\`apex
// In-Memory Rule Evaluator
public class RuleEvaluator {
    public static Boolean matchCondition(sObject record, Routing_Condition__mdt cond) {
        Object fieldValue = record.get(cond.Field_API_Name__c);
        String targetValue = cond.Target_Value__c;
        
        switch on cond.Operator__c {
            when 'EQUALS' {
                return String.valueOf(fieldValue) == targetValue;
            }
            when 'GREATER_THAN' {
                return (Decimal) fieldValue > Decimal.valueOf(targetValue);
            }
            when 'CONTAINS' {
                return fieldValue != null && String.valueOf(fieldValue).contains(targetValue);
            }
            when else {
                return false;
            }
        }
    }
}
\`\`\`

---

### Key Takeaways:
- Cache Custom Metadata in static variables to ensure O(1) in-memory lookups.
- Separate the **Rule Engine** (Apex) from the **Rule Definition** (Metadata).
- Build a companion **Admin LWC** to validate rule syntax before publishing.`
  },
  {
    id: "lwc-performance-optimization",
    title: "LWC Performance Optimization: Wire Service, Caching & Event Architecture",
    category: "Frontend & LWC",
    date: "December 2025",
    readTime: "5 min read",
    summary: "Techniques for building lightning-fast Lightning Web Components handling complex enterprise grids and interactive administrative consoles.",
    tags: ["LWC", "JavaScript", "SLDS", "Performance"],
    excerpt: "From client-side memoization and Lightning Message Service (LMS) to debouncing DOM events, here are the core patterns behind our 2,600-line LWC console.",
    content: `### Avoiding Common LWC Bottlenecks

As Salesforce UI applications grow into full enterprise workspaces with thousands of interactive cells, naive state management causes sluggish input latency and unnecessary re-renders.

### 1. Master Wire Service Caching
Use \`@wire\` for read-heavy operations to leverage Lightning Data Service (LDS) client-side caching. When modifying records, use \`notifyRecordUpdateAvailable()\` instead of forcefully calling imperative Apex repeatedly.

### 2. Debounce High-Frequency Input Filters
When users type into dynamic search bars, never trigger server queries on every keystroke. Use a JavaScript debounce closure:

\`\`\`javascript
handleSearchChange(event) {
    window.clearTimeout(this.searchTimeout);
    const searchTerm = event.target.value;
    this.searchTimeout = setTimeout(() => {
        this.filterData(searchTerm);
    }, 300);
}
\`\`\`

### 3. Event-Driven Architecture with Lightning Message Service (LMS)
Instead of deep prop drilling or tightly coupling sibling components, use LMS channels (\`@salesforce/messageChannel\`) for clean, decoupled pub/sub communication across Aura, LWC, and Flow screens.

---

### Key Takeaways:
- Treat the browser DOM as a precious resource: minimize component re-renders.
- Use LDS client caching wherever possible.
- Decouple communication using Lightning Message Service (LMS).`
  },
  {
    id: "snowflake-mulesoft-patterns",
    title: "Architecting Salesforce <-> Snowflake Pipelines via MuleSoft",
    category: "Off-Platform Integrations",
    date: "November 2025",
    readTime: "7 min read",
    summary: "Enterprise integration patterns for high-volume data exchange between Salesforce and Snowflake using MuleSoft as the resilient ETL orchestrator.",
    tags: ["MuleSoft", "Snowflake", "Integrations", "APIs"],
    excerpt: "Synchronizing 4.4M payment records requires strict error boundaries, OAuth token reuse, and chunked upsert operations. Here is our end-to-end integration blueprint.",
    content: `### High-Volume Integration Blueprint

When Salesforce needs to reflect millions of financial payment records and denial lines stored in Snowflake, a direct point-to-point connection is anti-pattern. 

MuleSoft acts as the enterprise integration bus, providing:
- **Transformation & Schema Mapping**
- **Rate-Limiting & Queue Buffering**
- **Dead-Letter Queue (DLQ) Error Handling**

### Key Pipeline Stages:
1. **Delta Extraction**: Snowflake streams changed records using Change Data Capture (CDC) or Timestamp watermarks.
2. **MuleSoft Batch Processing**: Payloads are parsed into compressed batches of 2,000 records.
3. **Salesforce Bulk API 2.0 / Composite REST**: MuleSoft streams batches to Salesforce using external IDs to execute idempotent \`UPSERT\` operations.
4. **Asynchronous Reconciliation**: Salesforce \`ClaimNightlyBatch\` calculates rollup KPIs and creates follow-up collector tasks.

---

### Key Takeaways:
- Always use External IDs for idempotent \`UPSERT\` operations.
- Decouple synchronization from live user transactions using Nightly Batch windows.
- Maintain comprehensive audit logs for all failed records.`
  },
  {
    id: "flows-vs-apex-matrix",
    title: "Flows vs. Apex in Enterprise Orgs: The Architectural Decision Matrix",
    category: "Salesforce Governance",
    date: "October 2025",
    readTime: "5 min read",
    summary: "A clear, battle-tested decision framework for deciding when to build declarative Flows versus writing custom Apex triggers and classes.",
    tags: ["Flows", "Apex", "Best Practices", "Architecture"],
    excerpt: "Salesforce promotes 'Flow First', but in large orgs with multi-million records, improper Flows create governor limit outages. Here is how we draw the line.",
    content: `### The Enterprise Dilemma: Low-Code vs. Pro-Code

Salesforce's modern Flow Builder is immensely powerful, but high-volume enterprise organizations frequently run into CPU limits and recursion bugs when complex logic is built entirely in declarative tools.

### The Decision Matrix:

| Requirement | Preferred Approach | Rationale |
| :--- | :--- | :--- |
| **Simple Notification / Email Alerts** | **Flow Builder** | Low maintenance, declarative, easily updated by Admins. |
| **High-Volume Bulk Ingestion (>10k records/batch)** | **Apex Trigger / Batch** | Highly optimized memory footprint, explicit collections, zero recursion overhead. |
| **Complex Multi-Condition Rule Engines** | **Apex + Custom Metadata** | In-memory evaluation of 1,000+ conditions without hitting Flow element execution limits. |
| **Guided Screen Wizards** | **Screen Flow + LWC** | Best of both worlds: Flow manages the step navigation while custom LWCs handle complex UI grids. |
| **Off-Platform REST/SOAP Integration** | **Apex / Connected Apps** | Fine-grained JSON parsing, custom headers, error logging, and retry logic. |

---

### Key Takeaways:
- Standardize on **One Trigger Per Object Framework** for high-volume objects.
- Use Screen Flows for simple user forms, but embed **LWC** for heavy dynamic interfaces.
- Protect Governor Limits above all else.`
  }
];

export const contactInfo = {
  name: "Krishna Kumar",
  role: "Salesforce Developer & Technical Lead",
  email: "bshakthy@gmail.com",
  location: "Hyderabad, India",
  trailhead: "https://trailblazer.me/id/krishnakumar1995",
  status: "Open to Technical Lead, Senior Developer & Salesforce Architecture Opportunities"
};
