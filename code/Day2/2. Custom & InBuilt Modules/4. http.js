// Explain APIs
// Start server
// Call get api from browser
// Show post API with console log
// set content type


// Create a basic server
// const http = require("http");
// http
//   .createServer(function (req, res) {
//     res.write("Hello World!");
//     res.end();
//   })
//   .listen(8080);

// Content Type
// const http = require("http");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, "text/html");
//     res.write("<h2>Hello World!</h2>");
//     res.end();
//   })
//   .listen(8080);

// Read Query String
// const http = require("http");
// const url = require("url");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     const q = url.parse(req.url, true).query;
//     const txt = q.year + " " + q.month;
//     res.end(txt);
//   })
//   .listen(8080);

