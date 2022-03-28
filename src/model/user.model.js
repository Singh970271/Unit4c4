const mongoose=require("mongoose");
const bcrypt=require("bcrypt");


const userschema=mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const User=mongoose.model("user",userschema);

userschema.pre("save",function(next){
    const hash=bcrypt.hashSync(this.password,7);
    this.password=hash;
    return next();
});

userschema.methods.checkPassword =function(password){
    // console.log(password)
     return bcrypt.compareSync(password,this.password);
 }



module.exports=User;




