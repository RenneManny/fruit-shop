import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = async (id) => {
  try {
    
    const token = jwt.sign({ id: id }, process.env.JWT_SECRET); 
    console.log("Generated Token: ", token);
    return token; 
  } catch (error) {
    console.log("Error generating token:", error);
    throw error; 
  }
};
