var express = require('express');

var app = express.createServer(express.logger());

var buff = new Buffer(5);
buff = fs.readFileSync('index.html');
var string1 = buff.toString();
console.log(string1 + "\n");

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
