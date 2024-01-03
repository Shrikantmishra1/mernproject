import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
export const   signup=async(req,res,next)=>{
    const {username,email,password}=req.body;
    const hasPassword=bcryptjs.hashSync(password,13);
    const newUser=new User({username,email,password:hasPassword});
    try {
        await newUser.save();
    res.status(201).json({
           message:"User created successfully"
    });
    } catch (error) {
       
        next(error);
        //custom error for 
       // next(errorHandler(300,"Something went wrong"));
    }
};