---
title: "Mastering Self-Throttling Queueable Apex Chaining with Batch Fallbacks"
date: "2026-06-30"
author: "Krishna Kumar"
readTime: "6 min read"
featured: false
categoryTags: ["Apex", "Async Processing", "Governor Limits", "Architecture"]
excerpt: "How to engineer resilient asynchronous execution pipelines in Salesforce that dynamically self-throttle and fail over to Database.Batchable when stack depth limits are reached."
---

## The Async Processing Trap

While `@future` methods are lightweight, they cannot accept complex objects as parameters and cannot chain further execution. **Queueable Apex** is the standard for modern Salesforce asynchronous processing, but unmanaged chaining often causes fatal production runtime crashes:

`System.AsyncException: Maximum stack depth reached`

In developer and sandbox orgs, maximum queueable chain depth is capped, and in production, governor limits strictly constrain concurrent queue jobs.

---

## The Resilient Chaining Pattern

To guarantee uninterrupted asynchronous execution across any record volume, we build a **Self-Throttling Queueable Processor**:

```
[Trigger / Event] -> Enqueue Queueable Job (Step 1)
                           ↓
                Execute Current Chunk (100 records)
                           ↓
                Remaining Records > 0?
                ├── YES: Check Limits.getQueueableJobs() < Limit
                │   ├── YES -> System.enqueueJob(Next Chain Step)
                │   └── NO (Depth / Queue Full) -> Database.executeBatch(FallbackBatch, 200)
                └── NO -> Exit Cleanly & Log Completion
```

---

## Apex Implementation

```apex
public class ResilientQueueableEngine implements Queueable, Database.AllowsCallouts {
    private List<Id> pendingRecordIds;
    private Integer currentStep;
    private static final Integer CHUNK_SIZE = 100;

    public ResilientQueueableEngine(List<Id> recordIds, Integer step) {
        this.pendingRecordIds = recordIds;
        this.currentStep = step;
    }

    public void execute(QueueableContext context) {
        List<Id> currentBatch = new List<Id>();
        List<Id> remainingBatch = new List<Id>();

        for (Integer i = 0; i < pendingRecordIds.size(); i++) {
            if (i < CHUNK_SIZE) {
                currentBatch.add(pendingRecordIds[i]);
            } else {
                remainingBatch.add(pendingRecordIds[i]);
            }
        }

        // Process current batch with error boundaries
        processBatch(currentBatch);

        // Determine chaining strategy
        if (!remainingBatch.isEmpty()) {
            if (Limits.getQueueableJobs() < Limits.getLimitQueueableJobs()) {
                System.enqueueJob(new ResilientQueueableEngine(remainingBatch, currentStep + 1));
            } else {
                // Failover seamlessly to Database.Batchable
                Database.executeBatch(new AsyncFallbackBatch(remainingBatch), 200);
            }
        }
    }

    private void processBatch(List<Id> ids) {
        // Business logic execution (e.g. Sales Process Data generation)
        SpdService.processCaseClosures(ids);
    }
}
```

---

## Unit Testing Chained Queueables

Because `Test.stopTest()` executes only the first level of a chained Queueable job in test contexts, always guard recursion with `Test.isRunningTest()`:

```apex
@isTest
private static void testQueueableChaining() {
    List<Case> testCases = TestDataFactory.createClosedCases(50);
    List<Id> caseIds = new List<Id>(new Map<Id, Case>(testCases).keySet());

    Test.startTest();
    System.enqueueJob(new ResilientQueueableEngine(caseIds, 1));
    Test.stopTest(); // Forces asynchronous execution to complete

    // Assert that SPD records were generated
    List<SPD_Record__c> spd = [SELECT Id FROM SPD_Record__c WHERE Case__c IN :caseIds];
    System.assertEquals(50, spd.size(), 'All 50 SPD records must be generated.');
}
```

---

## Architectural Rules

1. **Calculate Chunk Sizes Dynamically**: Base chunk sizes on the number of trigger rollups on child objects to prevent CPU limit overflow.
2. **Never Chain Unconditionally**: Always verify `Limits.getQueueableJobs() < Limits.getLimitQueueableJobs()`.
3. **Provide Batch Failover**: Always implement `Database.Batchable` as the graceful recovery route for massive backlogs.
