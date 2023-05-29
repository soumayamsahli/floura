const mongoose =require('mongoose')
require('dotenv').config()

const connectDB= async ( ) =>{
    console.log("process.env.MONGO_URI :", process.env.MONGO_URI)
   await mongoose.connect(process.env.MONGO_URI)
    .then(() =>console.log("database connected "))
    .catch((err)=>console.log(err))
}

module.exports =connectDB