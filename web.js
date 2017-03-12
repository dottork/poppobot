var express = require('express');
var packageInfo = require('./package.json');

var app = express();

app.get('/', function (req, res) {
  res.json({ version: packageInfo.version });
});

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Web server started at http://%s:%s', host, port);
});


var http = require("http");
setInterval(function() {
    http.get("http://mighty-springs-60472.herokuapp.com");
}, 300000); // every 5 minutes (300000)
