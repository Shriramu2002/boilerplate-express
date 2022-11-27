const { text } = require('body-parser');
let express = require('express');
let app = express();
require("dotenv").config();
const path = require("path");
const str = "Hello json";
app.use("/public",express.static(path.join(__dirname,"public")));
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"views/index.html"));
  });
 app.get("/json",function(req,res){
    res.json({
        "message":process.env.MESSAGE_STYLE==="uppercase"?str.toUpperCase():str.toLowerCase()
    });
 }) ;
// console.log("Hello world");
































 module.exports = app;
