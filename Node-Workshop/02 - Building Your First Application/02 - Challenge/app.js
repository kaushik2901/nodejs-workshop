// ToDo:  Load module dependencies - http & fs

http
  .createServer(function (request, response) {
    if (request.url == "/") {
      //TODO: Send Personal Data (name, enroll, etc.) as JSON Object
    } else if (request.url == "/data") {
      // TODO: Find the ASYNCHRONOUS, NON-BLOCKING API for reading in a file.
      fs.CHANGE_ME("./data.csv", "utf-8", function (err, data) {
        var responseData = {};

        // Basic JS: Work with the data in the file, and create the response
        var lines = data.split("\n");

        lines.forEach(function (line) {
          var parts = line.split(",");
          responseData[parts[0]] = parts[1];
        });

        // TODO: How do we set the content type we're sending back?
        response.writeHead(200, {
          CHANGEME: "CHANGEME",
        });

        // TODO: How do we serialize responseData to a JSON string?
        response.end(CHANGE_ME.CHANGE_ME(responseData));
      });
    } else {
      // TODO: Return Page Not Found
    }
  })
  .listen(3000, () => console.log("node server running on port 3000"));
