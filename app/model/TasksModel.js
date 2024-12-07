import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema(
    {
        title:{type:String,required:true},
        description:{type:String,required:true},
        status:{type:String,required:true},
        user_id:{type:mongoose.Schema.Types.ObjectId, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)


const TasksModel= mongoose.model("tasks",TaskSchema)
export default TasksModel


