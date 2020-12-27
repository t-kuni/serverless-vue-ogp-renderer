const chromium = require('chrome-aws-lambda');
const fs = require('fs');

class VueComponentRenderer {
    constructor() {
    }

    async render(outPath, reqBody) {
        const dir = process.cwd();
        const width = 1200;
        const height = 630;

        await this.loadFonts();

        const browser = await chromium.puppeteer.launch({
            args: chromium.args,
            executablePath: await chromium.executablePath,
            headless: chromium.headless,
            ignoreHTTPSErrors: true,
            defaultViewport: {
                width,
                height,
            }
        });
        const page = await browser.newPage();
        await page.goto('file://' + dir + '/renderer/dest/renderer.html', {waitUntil: 'networkidle2'});
        await page.evaluate((body) => {
            window.vue.$body = body;
        }, reqBody);
        await this.wait(1000);
        await page.screenshot({
            path: outPath,
            clip: {
                x: 0,
                y: 0,
                width,
                height
            }
        });
        await browser.close();
    }

    wait(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), ms);
        })
    }

    async loadFonts() {
        const dir = process.cwd();
        const fontDir = dir + '/fonts';

        const fontFileNames = fs.readdirSync(fontDir).filter((file) => {
            return file.match(/\.ttf$/)
        });

        await Promise.all(fontFileNames.map((name) => {
            return chromium.font(fontDir + '/' + name)
        })).catch((e) => {
            if (e.code === 'EEXIST' && e.syscall === 'symlink') {
                // if already loaded font then ignore error.
            } else {
                throw e;
            }
        })
    }
}

module.exports = VueComponentRenderer