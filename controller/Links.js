import ImageModel from "../models/ImageSchema.js"
import links from "../models/LinkSchema.js"
import HomeModel from "../models/HomeSchema.js"
let linksCreate=async(req,res)=>{
    let {facebook,linkedin,instagram}=req.body
    try{
        await links.deleteMany()
        await links.insertMany({facebook,linkedin,instagram})
        res.status(200).json({message:"Link updated successfully."})
    }catch(error){
        console.log(`linkCreate.js  -->  ${error}`)
    }
}

let readData=async(req,res)=>{
    try{
        let home=await HomeModel.find()
        let link=await links.find()
        let images=await ImageModel.find()
        res.status(200).json({images,link,home})
    }catch(error){
        console.log(`linkCreate.js  -->  ${error}`)
    }
}

export {linksCreate,readData}