const app=require("./index");
const connect=require("./configs/db")


app.listen(4400,async()=>{
    try{
        await connect()
        console.log("app is listening on 4400")


    }catch(err){
        console.log(err)
    }
})