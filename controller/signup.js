import bcrypt from 'bcrypt'
import Users from "../models/UserSchema.js";
let Signup=async(req,res)=>{
    let {name,email,number,password}=req.body
    try{
        let pass=await bcrypt.hash(password,10)
        let user=await Users.findOne({email})
        if(user){
            res.send({"message":"User already exist"})
        }
        let info=await Users.insertMany({name,email,number,password:pass})
        res.send({message:"User Sucessfully Submited"})
    }catch(error){
        console.log(`Signup.js --> ${error}`);
    }
}
export default Signup