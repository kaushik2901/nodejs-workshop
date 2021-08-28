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
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     const q = new URL(req.url, true).query;
//     const txt = q.year + " " + q.month;
//     res.end(txt);
//   })
//   .listen(8080);

// POST Data
// const http = require("http");
// http
//   .createServer(function (req, res) {
//     if (req.method === "POST") {
//       let body = "";

//       req.on("data", (chunk) => {
//         body += chunk.toString();
//       });

//       req.on("end", () => {
//         if (req.headers["content-type"] === "application/json")
//           body = JSON.parse(body);
//         res.end(JSON.stringify(body));
//       });
//     } else {
//       res.writeHead(200, "text/html");
//       res.write("POST Data on this route");
//       res.end();
//     }
//   })
//   .listen(8080);

// Routing
// const http = require("http");
// http
//   .createServer(function (req, res) {
//     if(req.url == "/") {
//         res.write("Home Page!");
//     } else if(req.url == "/test") {
//         res.write("Test Page!");
//     } else {
//         res.writeHead(404);
//         res.write("Page not found!");
//     }
//     res.end();
//   })
//   .listen(8080);