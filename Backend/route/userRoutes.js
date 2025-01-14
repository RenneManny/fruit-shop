import express from "express";
import { findByParams, findUserByBody, login, queryParams, signUp } from "../controller/userController.js";
import { userMiddleware } from "../authentication/middleware.js";

const router = express.Router();

// SignUp route (POST request)
router.post("/signup", signUp);

// Login route (POST request)
router.post("/login", login);

// 
router.post("/findUser",userMiddleware,findUserByBody)

router.get("/findUserByParams/:id",findByParams)

router.get("/findByQuery",queryParams)

export default router;
