import mongoose from "mongoose";

// "mongodb+srv://Adityaraj_007 :aditya007@clustername.mongodb.net/testing"

const DB_URI="mongodb+srv://Adityaraj_007:aditya007@cluster0.8vtmh2l.mongodb.net/?retryWrites=true&w=majority";
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