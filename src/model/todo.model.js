const mongoose=require("mongoose")


const todoschema=mongoose.Schema({
    title:{type:String,required:true},
    userID:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
})


const Todo= mongoose.model("todo",todoschema)


module.exports=Todo


