import express from "express"
import { dbConnect } from "./config/dbConnect.js";
import { router } from "./routes/authRouter.js";



const app=express();

dbConnect();

app.use("/api/auth",router)


app.listen(7001,()=>
{
console.log("server is running at 7001")
});