const cds = require('@sap/cds');
const LOG = cds.log('cds-ai-tracker');
const tracker = require('./lib/tracker');

cds.on('served', async () => {
    LOG.info('cds-ai-tracker initialized');
    await tracker.initialize();
});


cds.on('ai.usage', async (event) => {
    try {
        await tracker.record(
            event.data,
            cds.context
        );

    } catch (error) {
        LOG.error(
            'AI usage tracking failed',
            error
        );
    }

});