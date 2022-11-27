const { text } = require('body-parser');
let express = require('express');
let app = express();
//require("dotenv").config();
const path = require("path");
const str = "Hello json";
app.use("/public",express.static(path.join(__dirname,"public")));
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"views/index.html"));
  });
 app.get("/json",function(req,res){
    if(process.env.MESSAGE_STYLE==='uppercase'){
        res.json({
            "message":str.toUpperCase()
        })
    }
    else{
    res.json({
        "message":str
    });
}
 }) ;
// console.log("Hello world");
































 module.exports = app;
