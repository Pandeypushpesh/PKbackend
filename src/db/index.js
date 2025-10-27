import mongoose from "mongoose";    
import {DB_NAME} from  "../constants.js" ; ;

const connectDB = async ()=>{
    try {
         
        const connectionInstances = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`/n mongoDB Connected !! DB_HOST ${connectionInstances.connection.host} `);
        

    } 
    catch(error){
        console.log("mongoDB connection ERROR !!!!!" ,error);
        process.exit(1);
        

    };
    


    
}

export default connectDB ;