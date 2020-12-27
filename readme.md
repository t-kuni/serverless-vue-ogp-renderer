# Serverless Vue OGP Renderer

This program is to rendering OGP image by headless chromium. You can design OGP image by Vue component. This program uses [Serverless framework](https://www.serverless.com/), so it works over AWS Lambda, Rendering is triggered by POST request.

## Quick start

Download this repository.

```bash
git clone --depth 1 https://github.com/t-kuni/serverless-vue-ogp-renderer.git [ProjectName]
cd [ProjectName]
rm -rf .git 
```

Make `.env` file.

```bash
cp .env.example .env
```

Start the local server.

```bash
npm run serve
```

Send test request for the local server.

```bash
curl -X POST -H "Authorization: 1234" -d "text=Hello World!" http://localhost:5000/prod/render 
```

You can confirm the generated image at `/storage` directory.

## Customize OGP image template

You can customize OGP image by edit `rederer/src/renderer.vue`.

You need build the component by below command.

```bash
npm run build
```

## Image name format

You can specify the image name at `IMAGE_NAME` in `.env` file.

| format | output | description |
| --- | --- | --- |
| [uuid].png | XXXXX-...-XXXX.png | make unique name by UUID |
| [body:foo].png | hello.png | In case send 'foo=hello' as body |
| prefix-[body:foo].png | prefix-hello.png | Can combine literal text |
| [body:foo.bar].png | hello.png | In case send '{ "foo": { "bar": "hello" } }' as json |

## Embed request parameters into OGP image

You can receive parameters at `$body` method of `watch` property in `renderer/src/renderer.vue`.

```javascript
watch: {
    '$body'(body) {
        this.text = body.text;
    },
},
```

## Deploy

If you want to change app name then change `service` field in serverless.yml.

If you want to set environment variables for production then make `.env.production` file.

Run deploy by below command.

```bash
npm run deploy
```

## Add fonts

If you want to add web font then add link tag to `renderer/src/renderer.html` like below.

```html
<head>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
</head>
```

If you want to true type font then put `ttf` file to `fonts` directory.