const version = require('../models/geeknews/version');

const APIError = require('../rest').APIError;

module.exports = {
    'GET /api/geeknews/version': async (ctx, next) => {
        ctx.rest({
            version: version.getVersion()
        });
    }
};
