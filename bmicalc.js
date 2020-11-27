const express = require("express");
const bodyParser=require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000,function(){
    console.log("started @ 3000");
});


app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
var cr1=req.body.c1;
res.send(cr1);
});



