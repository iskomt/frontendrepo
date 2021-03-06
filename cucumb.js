// This is used to serve the app for integration tests with the API via Cucumber
/*eslint no-console: ["error", { allow: ["log"] }] */

// Dependencies
//
const express = require("express");
const httpShutdown = require("http-shutdown");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Listen on the port
const server = httpShutdown(
  app.listen(3000, () => {
    console.log(`Web is listening on port 3000`);
  })
);

server.host = `http://localhost:3000`;

module.exports = server;

//Test merge
//TEsting Testing
//THIS NEEDS TO BE MERGED
///THIS IS A LIOTTLE FEATURE
