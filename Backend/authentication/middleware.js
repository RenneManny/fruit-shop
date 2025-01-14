// import { JsonWebTokenError } from "jsonwebtoken"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import User from "../model/userSchema.js";
dotenv.config();
export const userMiddleware=async(req,res,next)=>{
try {
    const token=req.headers.authorization
    console.log(token,"middleware")
    if(!token){
        return res.json({success:"false",message:"Invalid token",satus:404})
    }
    const tokenSplit=token.split(" ")[1];
    console.log(tokenSplit,"Splitted Token")
    const decodedID= jwt.verify(tokenSplit,process.env.JWT_SECRET)
    // console.log(decodedID,"decodedid")
    const userDetails=await User.findById({_id:decodedID.id})
    console.log(userDetails,"here is userDeatils !!!!!")
if(userDetails.token !==tokenSplit){
    return res.json({
        status:409,
        success:false,
        message:"Kindly login again ",
        body:{}
    })
}
req.user = userDetails;
next();

} catch (error) {
    console.log(error)
    return res.json({message:"No token find "})
}
}