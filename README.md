# subtext-middleware

Payload / body parser (including multipart payloads) middleware that just works.

This is a middleware wrapper for the [subtext](https://github.com/hapijs/subtext) payload parser, originally written by Eran Hammer for [hapijs](https://github.com/hapijs/hapi)

##Example:
````javascript
const express = require('express')
const subtext = require('subtext-middleware')

const app = express()

app.use(subtext())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
````

API Reference:
## API Reference

### `subtext(options)`

Returns a middleware that parses a request body and exposes it via `req.body`

`options` are the following:
- `parse`: boolean, defaults to `true`
- `output`: string of the following: 'data', 'stream', 'file'. Defaults to `data`
- `maxBytes`: int
- `override`: string
- `defaultContentType`: string
- `allow`: string, only allow a certain media type
- `timeout`: integer, limit time spent buffering request
- `qs`: object, to pass into the qs module
- `uploads`: string, directory for file uploads
- `decoders`: an object mapping content-encoding names to their corresponding decoder functions
- `compression`: an object mapping content-encoding names to their corresponding options passed to the `decoders` functions
