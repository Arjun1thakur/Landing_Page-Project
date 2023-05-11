import mongoose from "mongoose";

let User=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    IsAdmin:{
        type:Boolean,
        default:false
    }
})

let Users=mongoose.model("Users",User)
export default Users