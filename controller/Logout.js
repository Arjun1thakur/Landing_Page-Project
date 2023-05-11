import jwt from 'jsonwebtoken'

let LogOut=async(req,res)=>{
    let cookie=req.headers.cookie
    const token=cookie.split("=")[1];
    if(!token){
        req.status(404).json({message:"User not found."})
    }
    jwt.verify(String(token),process.env.JWT_SECRETKEY,(err,user)=>{
        if(err){
            res.status(400).json({message:"Invalid User"})
        }
        res.clearCookie(`${user.id}`)
        req.cookies[`${user.id}`]="";

        return res.status(200).json({message:"User Sucessfully logout"})
    })
}


export default LogOut