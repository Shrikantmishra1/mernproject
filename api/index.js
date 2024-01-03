import { log } from "console";
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
// mongoose.connect(
//   "mongodb+srv://mishrashri2001:root@mern.hrqva.mongodb.net/?mern=true&w=majority"
// );

dotenv.config();
// console.log(process.env.MONGO);
mongoose.connect(process.env.MONGO).then(()=>{
      console.log("connetcted");
}).catch((err)=>{
       console.log(err);
})
const app = express();
app.use(express.json());
 app.listen(5002, () => {
      console.log("listen to 5002 port");
});
//Create rout:
//   app.get(('/'),(req,res)=>{
//       res.json({
//           message:"Api is working correctly"
//       })
//   })
app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);
 app.use((err,req,res,next)=>{
      const statusCode=err.statusCode ||500;
      const message=err.message ||'Internal server error';
      return res.status(statusCode).json({
        success:false,
        error:message,
        statusCode,



    });
});