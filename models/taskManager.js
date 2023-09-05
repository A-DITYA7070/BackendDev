import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter the Task Title"]
    },
    id:{
        type:Number,
        required:[true,"id is required "]
    },
    description:{
        type:String,
        required:[true,"Please enter task description"],
        maxLength:[30,"Task description cannot exceed beyond 30 "]
    },
    author:{
        type:String,
        required:[true,"Enter the author name"]
    }
});

export default new mongoose.model("Task",taskSchema);