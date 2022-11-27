let express = require('express');
let app = express();
const path = require("path");
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"views/index.html"));
  });
// console.log("Hello world");




































 module.exports = app;
