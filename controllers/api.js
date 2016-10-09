const version = require('../models/geeknews/version');

const products = require('../models/products/products');

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
    },

    'GET /api/products': async (ctx, next) => {
        ctx.rest({
            products: products.getProducts()
        });
    },

    'POST /api/products': async (ctx, next) => {
        var p = products.createProduct(ctx.request.body.name, ctx.request.body.manufacturer, parseFloat(ctx.request.body.price));
        ctx.rest(p);
    },

    'DELETE /api/products/:id': async (ctx, next) => {
        console.log(`delete product ${ctx.params.id}...`);
        var p = products.deleteProduct(ctx.params.id);
        if (p) {
            ctx.rest(p);
        } else {
            throw new APIError('product:not_found', 'product not found by id.');
        }
    }
};
