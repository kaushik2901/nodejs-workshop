const http = require("http");
const express = require("express");
const mongoose = require('mongoose');

const databaseURI =
  process.env.DATABASE_URI || "mongodb://localhost:27017/movies";
mongoose.connect(databaseURI);

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

require('./routes/authentication-routes')(app);
require('./routes/movies-routes')(app);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
      error: err.message
  });
});

http
  .createServer(app)
  .listen(3000, () => console.log("Server started at 3000"));
