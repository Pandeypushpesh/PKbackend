
import dotenv from "dotenv";

import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
     path: "./env"
     });

     
import { app } from "./app.js";




connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });



})
.catch((err)=>{
    console.log("DB connection failed ", err);
})












/*
import express from "express";
const app = express();

;(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        
        app.on("error",(error)=>{
            console.log("ERROR: ",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch(error){
        console.log("ERROR: ",error);
        throw error;
        
    } 
  
})() */