import Task from "../models/taskManager.js";

export const createTask = async(req,res)=>{
   try{
    const {id,title,description,author} = req.body;
    if(!id || !title || !description || !author){
        return res.status(401).json({
            success:false,
            message:"Enter all fields "
        })
    }
    const newTask = await Task.create({id,title,description,author});

    res.status(200).json({
        success:true,
        newTask
    });
   }catch(error){
    console.log(error);
   }
}