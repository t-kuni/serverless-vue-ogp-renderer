# Pre required

```
npm i -g serverless
```

# start dev server

```
serverless offline --httpPort 5000
```

# test post

```
curl -d "id=1234text=TestText" -H "Authorization: 1234" -X POST http://localhost:5000/prod/render
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