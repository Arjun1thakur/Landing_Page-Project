import mongoose from 'mongoose'

let HomeSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    info:{
        type:String,
        required:true
    },
    points:{
        type:[],
        required:true
    }
})

let HomeModel=mongoose.model("Home",HomeSchema)
export default HomeModel