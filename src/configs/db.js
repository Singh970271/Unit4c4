const mongoose=require("mongoose");

const connect=()=>{
    mongoose.connect("mongodb+srv://singh12:120@cluster0.srbwu.mongodb.net/evol")
}


module.exports=connect;
