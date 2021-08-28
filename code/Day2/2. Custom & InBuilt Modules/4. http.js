// Explain APIs
// Start server
// Call get api from browser
// Show post API with console log
// set content type

const http = require("http");

// Create a basic server
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, "text/html");
//     res.write("Hello World!");
//     res.end();
//   })
//   .listen(8080);

// content type - application/json
// query string req.url

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

