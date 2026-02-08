const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact", function (req, res) {
  console.log(req);
});

//  app.post("/success",function(req,res){
//    res.sendFile(__dirname+"/success.html");
//    console.log(req.body);
//  })

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
