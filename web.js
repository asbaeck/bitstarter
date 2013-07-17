var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function(request, response) {

var buff = new Buffer(50);
buff = fs.readFileSync('index.html');
var string1 = buff.toString();
response.send(string1);
});

var port = process.env.PORT || 8080
app.listen(port, function() {
  console.log("Listening on " + port);
});
