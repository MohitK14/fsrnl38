const express= require("express");
const mongoose= require("mongoose");
const bodyParser = require("body-parser");
const app= express();

app.use(bodyParser.json());

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

app.get("/", (req,res)=>{
    res.send("learning node js")
})

// app.post("/api/restaurant", (req,res)=>{

// })

require("./Routes/restaurant.routes")(app);