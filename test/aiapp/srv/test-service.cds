using { sap.ai.tracker as tracker } from 'cds-ai-tracker';

@path:'/test'
service TestService {

    entity AIUsageTest as projection on tracker.AIUsage;

    action simulateAI(
        agent : String,
        operation : String
    ) returns String;

}