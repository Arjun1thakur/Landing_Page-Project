import jwt from "jsonwebtoken";
import Users from "../models/UserSchema.js";
const UserVerify=async(req,res,next)=>{
    let cookie=req.headers.cookie
    const token=cookie.split("=")[1];
    if(!token){
        req.status(404).json({message:"User not found."})
    }
    jwt.verify(String(token),process.env.JWT_SECRETKEY,(err,user)=>{
        if(err){
            res.status(400).json({message:"Invalid User"})
        }
        req.id=user.id
    })
    next()
}

let reCheck=async(req,res,next)=>{
    const id=req.id
    let user
    try{
        user=await Users.findById(id,"-password")
    }catch(error){
        return new Error(error)
    }
    if(!user){
        return res.status(404).json({message:"User not found."})
    }
    return res.status(200).json({user})
}
export {UserVerify,reCheck}