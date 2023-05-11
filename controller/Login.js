import bcrypt from 'bcrypt'
import Users from '../models/UserSchema.js'
import jwt from 'jsonwebtoken'

let Login=async(req,res)=>{
    let {email,password}=req.body
    try{
        let user=await Users.findOne({email})
        if(!user){
            res.send({message:"User not exist."})
        }
        let pass=await bcrypt.compare(password,user.password)
        let token=jwt.sign({id:user._id},process.env.JWT_SECRETKEY,{
            expiresIn:"24hr"
        })
        if(!pass){
            res.send({message:"User not exist."})
        }
        res.cookie(String(user._id),token,{
            path:'/',
            expires:new Date(Date.now() + 99999*99999),
            httpOnly:true,
            sameSite:'lax'
        })
        res.send({message:"User Successfully Login.",token,user})
        
    }catch(error){
        console.log(`Login.js   --> ${error}`)
    }
}


export default Login