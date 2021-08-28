var http = require('http');

// Create a basic server
http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(8080);