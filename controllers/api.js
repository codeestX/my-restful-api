const version = require('../models/geeknews/version');

const APIError = require('../rest').APIError;

var fs = require('fs');

var filePath = process.cwd() + '/models/geeknews/geeknews.apk';
var imgPath = process.cwd() + '/models/geeknews/test.jpg';

console.log(process.cwd());

module.exports = {
    'GET /api/geeknews/version': async (ctx, next) => {
        ctx.rest({
        	code: version.getVersionCode(),
        	des: version.getVersionDes()
        });
    },

    'GET /apk/geeknews.apk': async (ctx, next) => {
        ctx.rest(
            fs.createReadStream(filePath)
        );
    },

    'GET /img/test.jpg': async (ctx, next) => {
        ctx.rest(
            fs.createReadStream(imgPath)
        );
    }
};
