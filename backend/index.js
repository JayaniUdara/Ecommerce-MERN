const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json({limit : "10mb"}))

const PORT = process.env.PORT || 8080

//mongodb connection
/*console.log(process.env.MONGODB_URL)
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("connected to database"))
.catch((err)=>console.log(err))

//schema
/*const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : {
        type : String,
        unique : true,
    },
    password : String,
    confirmpassword : String,
    image : String,
})*/

//model
//const userModel = mongoose.model("user", userSchema)

//api


app.get("/",(req,res)=>{
    res.send("Server is running")
})
app.post("/signup",async(req,res)=>{
    console.log(req.body)
    const {email} =req.body

   /* userModel.findOne({email : email},(err,result)=>{
        console.log(result)
        console.log(err)
        if(result){
            res.send({message : "email id is already register"})
        }
        else{
            const data = userModel(req.body)
            const save = data.save()
            res.send({message : "Successfully signup"})
        }
    })*/
})

app.listen(PORT,()=>console.log("Server is running at port :" + PORT))