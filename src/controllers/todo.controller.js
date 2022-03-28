const express=require("express");


const Todo=require("../model/todo.model")


const router=express.Router();

router.get("",async(req,res)=>{
    try{
        const todo=await Todo.find().lean().exec();

        return res.status(200).send(todo)

    }catch(err){
        return res.status(500).send({message:err.message})
    }
});
router.post("",async(req,res)=>{
    try{
        const Todo=await Todo.create(req.body);

        return res.status(201).send(todo)

    }catch(err){
        return res.status(500).send({message:err.message})
    }
});

router.get("/:id",async(req,res)=>{
    try{
        const todo=await Todo.findById(req.params.id).lean().exec()

        return res.status(200).send(todo)

    }catch(err){
        return res.status(500).send({message:err.message})
    }
});
router.patch("/:id",async(req,res)=>{
    try{
        const todo=await Todo.findByIdAndUpdate(req.params.id).lean().exec()

        return res.status(200).send(todo)

    }catch(err){
        return res.status(500).send({message:err.message})
    }
});
router.delete("/:id",async(req,res)=>{
    try{
        const todo=await Todo.findByIdAndDelete(req.params.id).lean().exec()

        return res.status(200).send(todo)

    }catch(err){
        return res.status(500).send({message:err.message})
    }
});




module.exports=router














