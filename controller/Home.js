import HomeModel from "../models/HomeSchema.js";
import Users from "../models/UserSchema.js";

let postHomeinfo=async(req,res)=>{
    let {title,info,points}=req.body
    try{
        await HomeModel.deleteMany()
        let data=await HomeModel.insertMany({title,info,points})
        res.status(200).send(data)
    }catch(error){
        console.log(`postHomeinfo   --> ${error}`)
    }
}

let fetchUser=async(req,res)=>{
    try{
        let user=await Users.find({})
        res.status(200).send(user)
    }catch(error){
        console.log(`fetchUser  /  Home.js  --> ${error}`)
    }
}
let updateUser=async(req,res)=>{
    let {id,isAdmin}=req.body
    try{
        let user=await Users.updateOne({_id:id},{IsAdmin:isAdmin})
        if(!user){
            res.status(400).send({message:"Sorry their some error"})
        }
        res.status(200).send({message:"User updated"})
    }catch(error){
        console.log(`fetchUser  /  Home.js  --> ${error}`)
    }
}
export {postHomeinfo,fetchUser,updateUser}