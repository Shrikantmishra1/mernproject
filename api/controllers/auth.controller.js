import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hasPassword = bcryptjs.hashSync(password, 13);
  const newUser = new User({ username, email, password: hasPassword });
  try {
    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    next(error.message);
    //custom error for
    // next(errorHandler(300,"Something went wrong"));
  }
};
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({  email });
    if (!validUser) return next(errorHandler(404, "User not found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(404, "Wrong Credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const {password:hasPassword, ...rest}=validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    res.cookie(
      "access_token",
      token,
      { httpOnly: true 
    ,expires:expiryDate}).status(200).json({ rest });
  } catch (error) {
    next(error);
  }
};
