import mongoose from 'mongoose'

let ImageSchema= new mongoose.Schema({
    img:{
        type:String,
        required:true
    }
})

let ImageModel=mongoose.model("Images",ImageSchema)
export default ImageModel

