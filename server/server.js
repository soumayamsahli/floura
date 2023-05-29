const express=require ('express')
const app=express()
require('dotenv').config()

//connect database
const connectDB =require("./config/connectDB")
connectDB()

const port =process.env.PORT || 8081


app.use(express.json())


//routes

app.use('/api',require('./routes/userRoutes'))
app.use('/api/post',require('./routes/postRoutes'))

// create server 
app.listen(port, (err) => err? console.log(err): console.log("server running on port :",port))

