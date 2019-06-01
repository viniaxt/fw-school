const express = require('express')
const http = require('http')
const app = express()

const server = http.createServer(app)

app.use(express.json())
app.use(require('./routes'))

server.listen(3000)
