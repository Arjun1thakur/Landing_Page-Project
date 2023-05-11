import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({path:"./.env"})
let URL=`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@real-estate.hmhzeyw.mongodb.net/?retryWrites=true&w=majority`
let connection=async()=>{
    try{
        await mongoose.connect(URL)
        console.log(`Connected ${URL}`)
    }catch(error){
        console.log('error in connection')
    }
}

export default connection

