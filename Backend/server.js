const express = require("express");
const BodyParser = require("body-parser");
const request = require("request");
const path = require('path');


const app = express();
app.use(BodyParser.urlencoded({extended:true}));
// app.get("/",function(req,res){
//     res.sendFile(path.join(__dirname+"/../src/Home/home.js"));

// })
app.listen("5000",function(){
    console.log("twerk");
})