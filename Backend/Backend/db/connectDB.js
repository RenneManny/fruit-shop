import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbURL = process.env.MONGOURL;
export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(`${dbURL}`);
    console.log(`Databse connected successfully`);
  } catch (error) {
    console.log(`Error connecting database !`);
  }
};
