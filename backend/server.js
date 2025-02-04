import express from "express";
const app = express();

app.get("/",(req,res)=>{
    res.send("Server is Ready to serve");
})

app.listen(9000,()=>{
    console.log("Server Started as http://localhost:9000");
})