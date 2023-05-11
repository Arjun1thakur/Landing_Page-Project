import mongoose from 'mongoose'

let LinkSchema=mongoose.Schema({
    facebook:{
        type:String,
        required:true
    },
    linkedin:{
        type:String,
        required:true
    },
    instagram:{
        type:String,
        required:true
    }
})

let links=mongoose.model("Link",LinkSchema)

export default links