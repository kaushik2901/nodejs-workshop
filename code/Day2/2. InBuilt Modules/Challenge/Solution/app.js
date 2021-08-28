var http = require("http"),
  fs = require("fs");

http
  .createServer(function (request, response) {
    if (request.url == "/") {
      response.writeHead(200);
      response.write(JSON.stringify({ name: "test", enroll: 21 }));
      response.end();
    } else if (request.url == "/data") {
      fs.readFile("./data.csv", "utf-8", function (err, data) {
        var responseData = { Hello: "World" };

        var lines = data.split("\n");
        lines.forEach(function (line) {
          var parts = line.split(",");
          responseData[parts[0]] = parts[1];
        });

        response.writeHead(200, {
          "Content-Type": "application/json",
        });
        response.end(JSON.stringify(responseData));
      });
    } else {
      response.writeHead(404);
      response.write("Page Not Found!");
      response.end();
    }
  })
  .listen(3000, () => console.log("node server running on port 3000"));
