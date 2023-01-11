const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res) {
    res.sendFile(__dirname+"/bmicalci.html");
})

app.post("/",function(req,res){
    var wt=Number(req.body.weight);
    var ht=Number(req.body.height);
    var result=wt/(ht*ht);
    res.send("Your BMI is "+result);
})

app.listen(3000,function () {
    console.log("Server is running at port 3000..........");
})