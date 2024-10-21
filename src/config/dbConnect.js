import mongoose from "mongoose";

export const dbConnect = async ()=>
{

    try {
        const connect=await mongoose.connect("mongodb+srv://yogeshsaini2912:fep4cJ4jr0c0PK2z@cluster0.ep6yk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
console.log("conecrt",connect.connection.host)
console.log("database connected successfully "  + "  cluser is :"+connect.connection.host + "  name is  " + connect.connection.name)
    } catch (error) {
        console.log("err",error);
        process.exit(1)
    }

};