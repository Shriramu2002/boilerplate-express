let express = require('express');
let app = express();
absPath = __dirname + views/index.html;
app.get("/", function(req, res) {
    res.sendFile(absPath);
  });
// console.log("Hello world");




































 module.exports = app;
