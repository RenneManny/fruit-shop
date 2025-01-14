import { generateToken } from "../authentication/verifyUser.js";
import { imageUpload } from "../helper/imageUploader.js";
import User from "../model/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const signUp = async (req, res) => {
  try {
   console.log(req.body,"trycatch")
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.json({
        success: false,
        message: "User already exist",
        body: {},
        status:404
      });
    }

// const imageUpload=
console.log(req.files,"request body!");

if(req.files&&req.files.image.name){
  const image=req.files.image;
  if(image){
    req.body.image=imageUpload(image,"userImage")

  }
}
  


    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, 10);
    console.log(encryptedPassword);

  
    const data = await User.create({
      ...req.body,
      password: encryptedPassword,
      image:req.body.image
    });

   
    const token = await generateToken(data._id);
    console.log(token, "signup token");


    const decodedToken = jwt.decode(token);
    const loginTime = decodedToken.iat;

   
    data.token = token;
    data.loginTime = loginTime;

    
    await data.save();

    return res.json({
      success: true,
      message: "User data created",
      body: data,
      status:200
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Error creating user" });
  }
};


export const login = async (req, res) => {
  try {
    console.log(req.body);

 
    const findUser = await User.findOne({ email: req.body.email });
    if (!findUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }


    const isMatch =  bcrypt.compare(req.body.password, findUser.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials!" });
    }

  
    const token = await generateToken(findUser._id);
    console.log(token, "login Generated Token!");

  
    const decodedToken = jwt.decode(token);
    const loginTime = decodedToken.iat;

    findUser.token = token;
    findUser.loginTime = loginTime;

    
    await findUser.save();

    return res.json({ success: true, message: "Login successful", token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error during login" });
  }
};

export const findUserByBody=async(req,res)=>{
  // const findUser=User.findById({_id});
  try {
    // const findUser=User.findById({req.body._id})
    const findUser = await User.findById(req.body._id);
    return res.json({
      message:"User found!",
      success:true,
      status:200,
      body:findUser
    })
  } catch (error) {
    console.log(error)
   return res.json({
      message:"Something went wrong!",
      success:false,
      status:409
    })
  }

}
// export const findByParams=async (req,res)=>{
//   try {
//     // const userID=req.params
//     console.log(typeof(req.params.id))
    
//     const findUser = await User.findById(req.params.id);
//     return res.json({
//       message:"User found!",
//       success:true,
//       status:200,
//       body:findUser
//     })
//   } catch (error) {
//     console.log(error)
//     return res.json({
//       message:"Something went wrong!",
//       success:false,
//       status:409
//     })
//   }
// }
export const findByParams = async (req, res) => {
  try {
    // Log the type of req.params.id for debugging
    console.log(req.params) // Should print 'string'

    // Query user by the provided ID
    const findUser = await User.findById({_id:req.params.id});

    // Check if the user was found
    if (!findUser) {
      return res.status(404).json({
        message: "User not found!",
        success: false,
        status: 404
      });
    }

    // Respond with the found user data
    return res.json({
      message: "User found!",
      success: true,
      status: 200,
      body: findUser
    });
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Something went wrong!",
      success: false,
      status: 409
    });
  }
};

// queryParameters
export const queryParams=async(req,res)=>{
  try {
    

    // Query user by the provided ID
    const findUser = await User.findById({_id:req.query.id});

    // Check if the user was found
    if (!findUser) {
      return res.status(404).json({
        message: "User not found!",
        success: false,
        status: 404
      });
    }

    // Respond with the found user data
    return res.json({
      message: "User found!",
      success: true,
      status: 200,
      body: findUser
    });
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Something went wrong!",
      success: false,
      status: 409
    });
  }
}