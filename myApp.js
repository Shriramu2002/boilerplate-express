const { text } = require('body-parser');
let express = require('express');
let app = express();
require("dotenv").config();
const path = require("path");
const str = "Hello json";

function mylogger(req,res,next){
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
}

app.use(mylogger);
app.use("/public",express.static(path.join(__dirname,"public")));
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"views/index.html"));
});

 app.get("/json",function(req,res){
    if(process.env.MESSAGE_STYLE==='uppercase'){
        res.json({
            "message":"HELLO JSON"
        })
    }
    else{
    res.json({
        "message":str
    });
   }  
});

app.get('/now',function(req,res,next){
req.time = new Date().toString();
next();
},function(req,res){
    res.json({
        "time":req.time
    });
});
 

// console.log("Hello world");
































 module.exports = app;
