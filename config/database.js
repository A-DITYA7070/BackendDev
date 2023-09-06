import mongoose from "mongoose";

const DB_URI="mongodb://localhost:27017/ecommerceweb"
async function connectToDb(){
   try{
    mongoose.connect(DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((conn)=>{
        console.log(`database connected to ${conn.connection.host}`);
    }).catch((err)=>{
        console.log(err);
    });
   }catch(err){
      console.log(err);
   }
}


export default connectToDb;