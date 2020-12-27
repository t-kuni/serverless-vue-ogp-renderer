const serverless = require('serverless-http');
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const VueComponentRenderer = require('./src/Infrastructure/VueComponentRenderer')
const TempImagePathMaker = require('./src/Application/Services/TempImagePathMaker')
const Container = require('./Container')
const ObjectNameMaker = require('./src/Application/Services/ObjectNameMaker')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/render', async function (req, res) {
    try {
        if (process.env.PASSWORD && req.headers.authorization !== process.env.PASSWORD) {
            return res.status(403).json({
                state  : 'error',
                message: 'Not authorized'
            });
        }

        const tempImagePath = (new TempImagePathMaker()).makePath('png');

        const renderer = new VueComponentRenderer();
        await renderer.render(tempImagePath, req.body);

        const nameMaker = new ObjectNameMaker();
        const name = nameMaker.makeName(process.env.IMAGE_NAME, req.body)

        const storage    = Container.resolve('storage');
        const objectInfo = await storage.save(tempImagePath, name);

        res.send({
            state: 'ok',
            message: 'success fully generating OGP image',
            ...objectInfo
        })
    } catch (e) {
        res.status(403).json({
            state  : 'error',
            message: e.message,
        });
        throw e;
    }
})

module.exports.handler = serverless(app);