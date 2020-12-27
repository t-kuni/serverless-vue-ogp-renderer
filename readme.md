# Pre required

```
npm i -g serverless
```

# Quick start

```
git clone
cd 
rm -rf .git 
cp .env.example .env
```

```
npm run serve
```

```
curl -X POST -H "Authorization: 1234" -d "text=Hello World!" http://localhost:5000/prod/render 
```

## IMAGE_NAME format

## Deploy

If you want to change app name then run below command.

```

```

# start dev server

```
serverless offline --httpPort 5000
```

# test post

```
curl -X POST -H "Authorization: 1234" -d "text=Hello World!" http://localhost:5000/prod/render
```

```
curl -d '{"sys":{"id": "test"}, "fields": { "serifText": { "en-US" : "うえうえ"} } }' -H "Authorization: 1234" -H "Content-Type: application/json" -X POST http://localhost:5000/prod/render
```

## Build renderer

```
npm run build:renderer
```

## Deploy

```
npm run deploy
```