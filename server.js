const express = require("express");
const bodyParser=require("body-parser");
const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
  
});

 app.get("/contact",function(req,res){
    console.log(req);
 });

 app.post("/",function(req,res){
   res.send("We connect with you Shortly");
 })



app.listen(3000, function () {
    console.log("server is running on port 3000");
});
