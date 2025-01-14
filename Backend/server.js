import express from "express";
// import fs from 'fs'
import dotenv from "dotenv";
import { fileURLToPath } from "url"; // Correctly import fileURLToPath from 'url'
import path from "path"; // Only import path once
import { connectDB } from "./db/connectDB.js";
import userRoutes from "./route/userRoutes.js";
import fileUpload from "express-fileupload";
import cors from "cors";


dotenv.config();


const PORT = process.env.PORT;

const app = express();
app.use(express.json());

connectDB();

app.use(cors());
const __filename = fileURLToPath(import.meta.url); // Correct import usage

const __dirname = path.dirname(__filename);

app.use("/images", express.static(path.join(__dirname, "public", "userImage")));


app.use(fileUpload());





app.use("/user", userRoutes);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
