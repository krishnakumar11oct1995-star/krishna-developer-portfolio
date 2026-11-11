export const careerVelocityStages = [
  {
    phase: "Phase 4: Enterprise Architectural Leadership & Scale",
    period: "2025 – Present",
    badge: "Technical Lead",
    color: "from-sky-500 to-blue-600",
    summary: "Spearheading multi-million-record routing engines, off-platform MuleSoft/Snowflake pipelines, 38-class test frameworks, and mentoring distributed engineering teams."
  },
  {
    phase: "Phase 3: Asynchronous Engineering & Team Leadership",
    period: "2024 – 2025",
    badge: "Team Lead",
    color: "from-indigo-500 to-purple-600",
    summary: "Leading developer pods, architecting chained Queueable batch engines, and establishing Platform License security models."
  },
  {
    phase: "Phase 2: Full-Stack Integration & Healthcare Cloud",
    period: "2023 – 2024",
    badge: "Senior Developer",
    color: "from-teal-500 to-emerald-600",
    summary: "Delivering Medicare 8-minute clinical flowsheet engines, cross-system CDC integrations, and multi-tier approval matrixes."
  },
  {
    phase: "Phase 1: CRM Architecture & API Modernization",
    period: "2023",
    badge: "Salesforce Consultant",
    color: "from-amber-500 to-orange-600",
    summary: "Engineering custom REST endpoints for React portals, DocAI OCR data extraction, and greenfield Sales Cloud setups."
  }
];

export const experienceData = [
  {
    id: "alliance-healthcare",
    role: "Lead Salesforce Developer / Technical Lead",
    company: "ALLIANCE Healthcare LLC",
    location: "Remote / Hyderabad, India",
    period: "August 2025 – Present",
    tenure: "Current Role",
    velocityStage: "Phase 4: Enterprise Architectural Leadership & Scale",
    leadershipScope: "Full Technical Ownership of Enterprise RCM Platform, Routing Engine v2, 5 Advanced LWCs, 38 Test Classes, and MuleSoft/Snowflake Data Pipelines. Mentored 6 developers across US & India time zones.",
    leadershipBadges: ["Architecture Owner", "Team Lead (6 Devs)", "Governor Limits Specialist", "RCM Subject Matter Expert"],
    metricsHighlights: [
      { label: "Daily Transactions", value: "1,000,000+ Encounters", detail: "In-memory evaluation" },
      { label: "Nightly Financial Sync", value: "4.4M Payments / 2.4M Claims", detail: "MuleSoft & Snowflake" },
      { label: "Rule Evaluation Scale", value: "170+ Rules / 1.1k Conditions", detail: "25-level priority matrix" },
      { label: "Efficiency Gain", value: "-40% Routing Latency", detail: "Hours to real-time seconds" }
    ],
    star: {
      situation: "ALLIANCE Healthcare managed an immense influx of 1M+ daily patient encounters and 4.4M unlinked payment records across distributed collector work queues. Legacy assignment logic failed due to multi-tier criteria (provider specialties, insurance plans, state jurisdictions, and alpha splits), triggering fatal Apex CPU timeouts and unassigned bottlenecks.",
      task: "Architect an autonomous, metadata-driven Routing Engine (RRv2) to evaluate 170+ dynamic rules and 1,100+ conditions in-memory, construct a 5-component LWC administration console, and orchestrate nightly batch synchronization with Snowflake via MuleSoft without breaching API limits.",
      action: [
        "Architected RoutingEngine.cls and RoutingConditionEvaluator.cls utilizing static repository caching (RoutingConfigRepository.cls) to evaluate 170+ rules and 1,100+ conditions in O(1) memory, eliminating SOQL queries in execution loops.",
        "Orchestrated ClaimNightlyBatch.cls (200-record chunks with Database.Stateful) and MuleSoft Connected App REST endpoints, synchronizing 4.4M payment records and 2.4M claim lines with zero governor overages.",
        "Built routingsetup (a 2,677-line 5-step LWC configuration wizard) and encounterWorkspace (7 unified modals for claims, lines, denials, payers, providers, charges), replacing fragmented tabs with a single-pane-of-glass workbench.",
        "Engineered automated Revenue Cycle Management (RCM) workflows synchronizing 1.3M+ denial lines with automated 21-day follow-up task generation and DLRS monthly KPI rollups.",
        "Established a 38-class Apex test suite with robust test data factories, guaranteeing >92% code coverage across all core routing and batch controllers."
      ],
      result: [
        "1,000,000+ encounters evaluated and auto-assigned daily with 99.9% automated triage accuracy.",
        "Reduced manual case routing time from 4+ hours daily down to real-time sub-second execution.",
        "Zero API governor limit breaches recorded across 4.4M nightly synchronized financial records.",
        "Boosted collector daily task completion throughput by +35% across 40+ healthcare revenue specialists."
      ]
    },
    technologies: ["Apex Architecture", "Dynamic SOQL", "LWC (2.6k Lines)", "MuleSoft", "Snowflake", "Custom Metadata", "Batch Apex", "DLRS", "Health Cloud"]
  },
  {
    id: "internal-process-improvement",
    role: "Salesforce Administrator & Developer (Team Lead)",
    company: "Salesforce Platform – Internal Process Improvement",
    location: "Hyderabad, India",
    period: "April 2025 – August 2025",
    tenure: "5 Months",
    velocityStage: "Phase 3: Asynchronous Engineering & Team Leadership",
    leadershipScope: "Technical Team Lead for async automation frameworks, metadata governance, and multi-tier license access architecture. Mentored 4 engineers.",
    leadershipBadges: ["Pod Lead (4 Devs)", "Async Architecture", "Platform License Design", "Sprint Lead"],
    metricsHighlights: [
      { label: "Case Closure Sync", value: "100% Automated", detail: "Zero manual intervention" },
      { label: "Job Reliability", value: "0 Timeout Faults", detail: "Self-throttling Queueable" },
      { label: "License Coverage", value: "40+ Platform Users", detail: "Secure data exposure" }
    ],
    star: {
      situation: "Case closure events frequently missed capturing commercial Sales Process Data (SPD) metrics due to manual handoffs. Furthermore, users on restricted Salesforce Platform Licenses were blocked from standard CRM objects, resulting in severe data siloing.",
      task: "Engineer an asynchronous scheduled and chained Queueable pipeline to parse complex closure metadata and automatically generate SPD records, while designing custom LWC interfaces compatible with Platform License restrictions.",
      action: [
        "Designed scheduled Apex triggers dispatching SpdProcessingQueueable.cls with dynamic depth verification (Limits.getQueueableJobs()) and seamless Database.executeBatch fallback failover.",
        "Developed custom LWC screens providing granular SPD record views, bypassing standard object UI limitations for Platform License holders.",
        "Configured custom metadata condition validation and automated sharing rules to enforce strict data governance.",
        "Led daily standups, code reviews, and deployment pipelines across developer sandboxes to production."
      ],
      result: [
        "Achieved 100% automated SPD record creation upon case closure with zero background timeout exceptions.",
        "Successfully onboarded 40+ Platform License users with full access to critical sales process tracking.",
        "Eliminated 10+ hours per week of manual administrative data validation."
      ]
    },
    technologies: ["Queueable Apex", "Job Chaining", "Batch Apex", "Scheduled Apex", "LWC", "Custom Metadata", "Platform Licenses"]
  },
  {
    id: "us-healthcare-provider",
    role: "Salesforce Administrator & Developer (Team Lead)",
    company: "US Healthcare Provider (Phases 2 & 3)",
    location: "Hyderabad, India",
    period: "March 2024 – March 2025",
    tenure: "1 Year",
    velocityStage: "Phase 2: Full-Stack Integration & Healthcare Cloud",
    leadershipScope: "Led development sprint cycles, performed technical demos for US executive stakeholders, and directed integration architectures. Mentored 3 junior developers.",
    leadershipBadges: ["Client-Facing Lead", "Integration Architect", "Medicare Compliance", "Sprint Delivery"],
    metricsHighlights: [
      { label: "Clinical Doc Time", value: "-80% Time Spent", detail: "15 min to < 3 min" },
      { label: "Medicare Compliance", value: "100% Compliant", detail: "8-minute rule engine" },
      { label: "Daily Notifications", value: "2x Automated Digests", detail: "Morning & evening runs" }
    ],
    star: {
      situation: "Non-MD healthcare clinical staff spent 15+ minutes per patient manually mapping exercise codes and calculating Medicare 8-minute billing units across multiple visit reasons (Physical Therapy, Occupational Therapy, Chiropractic) on identical visit dates.",
      task: "Develop a streamlined clinical documentation LWC directly on Appointment records, enforce automatic Medicare 8-minute unit calculations, and establish bi-directional MuleSoft/Snowflake synchronization.",
      action: [
        "Engineered an interactive Lightning Web Component with built-in Medicare 8-minute tiered calculation logic (8–127 min brackets), enforcing auto-calculated billing units without manual override risk.",
        "Implemented same-date multi-visit synchronization, ensuring flowsheet data entered for PT automatically synced across corresponding OT and CHIRO records.",
        "Configured mobile-friendly Salesforce Campaign forms with custom file upload components, automating dynamic PDF creation and dispatching instant confirmation emails.",
        "Built automated morning (pending appointments) and evening (created appointments) email digest services."
      ],
      result: [
        "Slashed clinical documentation overhead from 15 minutes down to under 3 minutes per encounter (-80%).",
        "Guaranteed 100% compliance with federal Medicare 8-minute billing guidelines, eliminating billing rejection penalties.",
        "Delivered successful live stakeholder demos resulting in seamless Phase 3 project renewal."
      ]
    },
    technologies: ["MuleSoft", "Snowflake", "LWC", "Flow Builder", "PDF Automation", "Campaigns", "Healthcare Workflows"]
  },
  {
    id: "mattress-manufacturer",
    role: "Salesforce Administrator & Developer",
    company: "Leading US Mattress Manufacturer",
    location: "Hyderabad, India",
    period: "May 2023 – February 2024",
    tenure: "10 Months",
    velocityStage: "Phase 1: CRM Architecture & API Modernization",
    leadershipScope: "Sole Salesforce Architect responsible for greenfield Sales Cloud data modeling, sandbox lifecycle, legacy Apex refactoring, and security provisioning.",
    leadershipBadges: ["Greenfield Architect", "Security Specialist", "Apex Refactoring", "Sales Cloud Lead"],
    metricsHighlights: [
      { label: "Lead-to-Quote Speed", value: "+50% Velocity", detail: "Automated conversion" },
      { label: "Data Centralization", value: "100% Single Source", detail: "Replaced spreadsheets" },
      { label: "Code Optimization", value: "3 Legacy Classes", detail: "Bulkified & tested" }
    ],
    star: {
      situation: "The manufacturer's commercial sales data was fragmented across disconnected spreadsheets and brittle legacy Apex code, resulting in high quote friction, delayed lead conversions, and zero pipeline visibility for senior executives.",
      task: "Design and implement a ground-up Salesforce Sales Cloud architecture, automate lead qualification and conversion workflows, enforce hierarchical discount approval matrixes, and refactor legacy Apex controllers.",
      action: [
        "Provisioned developer sandboxes and architected custom objects, fields, validation rules, Role Hierarchies, and Org-Wide Defaults (OWD) with complex sharing rules.",
        "Constructed automated Lead Qualification Flows with auto-conversion into Accounts, Contacts, and Opportunities.",
        "Configured multi-step Approval Processes requiring VP authorization for Opportunity discounts exceeding 25%.",
        "Reverse-engineered and refactored 3 monolithic legacy Apex classes into modular, bulkified trigger frameworks with >88% test coverage.",
        "Conducted end-to-end data migration from spreadsheets into Salesforce using Apex Data Loader and built real-time executive KPI dashboards."
      ],
      result: [
        "Accelerated lead-to-opportunity conversion velocity by +50%.",
        "Centralized 100% of sales operations into a single-source-of-truth CRM.",
        "Provided senior leadership real-time visibility into quota attainment and pipeline health."
      ]
    },
    technologies: ["Sales Cloud", "Flows", "Apex Refactoring", "Approval Processes", "Data Loader", "Security OWD", "Dashboards"]
  },
  {
    id: "healthcare-api-company",
    role: "Salesforce Administrator & Developer",
    company: "Healthcare Company",
    location: "Hyderabad, India",
    period: "April 2023 – June 2023",
    tenure: "3 Months",
    velocityStage: "Phase 1: CRM Architecture & API Modernization",
    leadershipScope: "Lead Integration Developer building custom REST endpoints, Postman test collections, and Google DocAI OCR data extraction pipelines.",
    leadershipBadges: ["API Engineer", "DocAI Specialist", "React Integration", "Postman QA"],
    metricsHighlights: [
      { label: "Integrated Web Forms", value: "24 React Forms", detail: "Custom REST APIs" },
      { label: "Manual Entry Drop", value: "-95% Data Entry", detail: "DocAI OCR pipeline" },
      { label: "Document Dispatch", value: "Instant Automated", detail: "Dynamic PDFs & Email" }
    ],
    star: {
      situation: "Patient onboarding required transcribing information from 24 external web forms and thousands of archived paper PDF scans into Salesforce, consuming hundreds of manual labor hours per month.",
      task: "Expose secure custom Apex REST web services to capture React web application form submissions into custom objects and implement an OCR pipeline to digitize legacy PDF archives.",
      action: [
        "Engineered custom Apex @RestResource endpoints and validated all payloads with comprehensive Postman test suites to ingest structured JSON from 24 external forms into custom patient records.",
        "Configured Google DocAI and Docparser OCR extraction pipelines to parse historical paper medical PDFs and map extracted entities into Salesforce fields.",
        "Built automated asynchronous jobs generating verified patient intake summary PDFs and dispatching instant confirmation emails.",
        "Refactored existing active Apex classes to handle high-frequency incoming API transactions without hitting lock contention."
      ],
      result: [
        "Reduced manual patient data digitization effort by -95%.",
        "Successfully connected 24 external React forms with instant Salesforce record creation and PDF document archival.",
        "Zero API authentication or payload parsing errors during production cutover."
      ]
    },
    technologies: ["REST APIs", "React Integration", "Google DocAI", "Docparser", "Postman", "Apex Web Services", "PDF Automation"]
  }
];
