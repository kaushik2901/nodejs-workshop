// Explain APIs
// Start server
// Call get api from browser
// Show post API with console log

var http = require('http');

// Create a basic server
http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(8080);