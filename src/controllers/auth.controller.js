const User=require("../model/user.model")
const jwt=require("jsonwebtoken");
require('dotenv').config()

 const newtoken=(user)=>{
    return jwt.sign({user}, process.env.SECRET_KEY);
 }
const register=async(req,res)=>{
    try{
        let user= await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).send({message:"email already exist"})     
        }
        User=await User.create(req.body)
        const token=newtoken(user)
        return res.status(201).send({user,token})


    }catch(err){
        return res.status(500).send({message:err.message})
    }
}


const login=async(req,res)=>{
    try{

        let user=await User.findOne({email:req.body.email});
        if(!user){
            return res.status(400).send({message:"wrong Password"})
        }
      
        const match= user.checkPassword(req.body.password);
        if(!match){
            return res.status(400).send({message:"wrong password"})
        }
        const token=newtoken(user)
        return res.status(201).send({user,token})



    }catch(err){
        return res.status(400).send({message:err.message})
    }
}

module.exports={register,login}