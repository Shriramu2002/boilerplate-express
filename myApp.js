let express = require('express');
let app = express();
app.get("/",function(req,res){
    if(req.body==="Hello Express"){
    res.send("Response String");
    }
  });
// console.log("Hello world");




































 module.exports = app;
