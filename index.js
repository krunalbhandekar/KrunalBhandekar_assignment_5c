const express=require("express")
const connection=require("./config/config")
const cors=require("cors")

require("dotenv").config()

const GituserController=require("./controllers/Gitusercontroller")

const app=express()
app.use(express.json())
app.use(cors())
app.use("/gituser",GituserController)

app.get("/",(req,res)=>{
    res.send("home")
})

app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("db connected");
    }
    catch(err){
        console.log(err);
    }
    console.log(`db connect at ${process.env.PORT}`);

})