'use strict'
const express = require('express')
const app = express()

app.enable('trust proxy')

app.use(express.static('public'))

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  })
})

const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})
