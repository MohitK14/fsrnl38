const express= require("express");
const mongoose= require("mongoose");
const bodyParser = require("body-parser");
const restRoutes= require("./Routes/restaurant.routes")
const userRoutes= require("./Routes/user.routes")
const app= express();

app.use(bodyParser.json());

// app.use(loggedInUserReq);

mongoose.connect("mongodb+srv://MohitK:UhPOJprZV12si01J@cluster0.2pikwvv.mongodb.net/");

const db= mongoose.connection;

db.on("error", ()=>{
    console.log("Connection not successfull");
});

db.on("open", ()=>{
    console.log("Connection  successfull");
})

app.listen("5000", ()=>{
    console.log("Server is running on port 5000")
});

app.get("/", loggedInUserReq, (req,res)=>{
    res.send("learning node js")
})

function loggedInUserReq(req, res, next){
    console.log("User req initiatied");
    next();
}


restRoutes(app);
userRoutes(app)