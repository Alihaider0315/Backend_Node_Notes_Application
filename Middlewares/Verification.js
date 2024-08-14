import jwt from 'jsonwebtoken'
import UserModel from '../models/Auth.js';

const VerificationToken  = async (req,res,next)=>{
    try {
      const token = req.cookies.token
      if(!token){
        return res.status(303).json({sucess:false,message:"Unauthorized, Please Login"});
        
      }
      const decode = await jwt.decode(token,process.env.SECRETKEY);
      const userDecode = await UserModel.findById(decode.userId)
      if(!userDecode){
        return res.status(404).json({sucess:false,message:"User Not Found"});
        
      }
      req.userId = userDecode._id
      next()
    //   console.log(userDecode)
    } catch (error) {
        res.status(500).json({sucess:false,message:"Internal Server Error"})
    }
}

export {VerificationToken}