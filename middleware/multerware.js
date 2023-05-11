import multer from 'multer'
let storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});
let fileUpload=multer({storage})

export default fileUpload