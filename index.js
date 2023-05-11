import express from "express";
import dotenv from "dotenv";
dotenv.config()
import connection from "./connection/database.js";
import { fetchUser, postHomeinfo, updateUser } from "./controller/Home.js";
import fileUpload from "./middleware/multerware.js";
import Signup from "./controller/signup.js";
import Login from "./controller/Login.js";
import {UserVerify, reCheck} from "./middleware/UserVerify.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
import { linksCreate, readData } from "./controller/Links.js";
import LogOut from "./controller/Logout.js";
import ImageModel from "./models/ImageSchema.js";
import path from "path";
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'


let app=express()
let PORT=process.env.PORT || 8080
app.use(cookieParser())
app.use(cors({
    origin:["http://localhost:3000","*"],
    credentials:true
}))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));




const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename)
app.post('/api/upload',postHomeinfo)
app.post('/api/images',async(req,res)=>{
    let {img}=req.body
    await ImageModel.insertMany({img:img})
    res.status(200).json({message:"Upload done."})
})
app.post('/api/signup',Signup)
app.post('/api/login',Login)
app.post('/api/sociallinks',linksCreate)
app.post('/api/logout',LogOut)
app.post('/api/updateUser',updateUser)
app.post('/api/clearimg',async(req,res)=>{
    let img=await ImageModel.deleteMany()
    if(!img){
        res.status(400).send({message:"Sorry"})
    }
    res.status(200).send({message:"Done bro.."})
})



// [x] GET REQUESTS
app.get('/api/info',readData)
app.get('/api/fetchUser',fetchUser)
app.get('/api/about',UserVerify,reCheck)

app.use(express.static(path.resolve("./build")))

app.get("*",(req,res)=>{
    res.sendFile(path.resolve("./build/index.html"))
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`);
    connection()
})




