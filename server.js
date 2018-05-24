// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
app.enable('trust proxy');

app.get('/', (req, res) => {
  res.redirect('/api/whoami')
})

app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.acceptsLanguages()[0],
    software: req.headers['user-agent'].match(/\((.*?)\)/)[1]
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
