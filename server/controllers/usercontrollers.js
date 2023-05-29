const { JsonWebTokenError } = require('jsonwebtoken');
const Person= require('../models/UserModel');
const bcrypt =require('bcrypt')
const jwt =require('jsonwebtoken');
const { json } = require('express');
const register=async(req, res) => {
try {
   const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send(400).json({errors: errors.array()});
   const {email,name,password,adress} =req.body
   const newUser= await Person.findOne({email})}
   if(newUser) res.status(400).json({msg:"user exist,try to connect"})
   else{
    const hashedpw = await bcrypt.hash(password, 10)
    console.log(hashedpw)
    const createUser = await Person.create({email,name,password:hashedpw,adress})
    const token = jwt.sign({id:createUser._id},
      JWT_SECRET,{expiresIn:'7d'})
      console.log(token)
      res.status(201).json({msg: "user created",token:token,person:createUser})
   }
}
      catch (error) {
         res.status(500).json({msg: "something went wrong",error:error.message})
     }
   
                       

}

const login = async(req,res) =>{
try {
   const {email,password} = req.body
   const user = await Person.findOne({email})
   if(!user) res.status(400).json({msg:"user does  not  exist,try to register"})
   else{
      const checkpw = await bcrypt.compare(password,user.password)
      if (!checkpw) res.status(400).json({msg:"wrong password,try again"})
      const token = jwt.sign({id:user._id},
         process.env.JWT_SECRET,{expiresIn:'7d'})
         console.log(token)
         res.status(201).json({msg: "login success",token:token, person:user})

   }
} catch (error) {
   res.status(500).json({msg: "something went wrong",error:error.message})
}
}
const getUserData = async(req,res) =>{
   try {
      const user = await person.findOne({_id: req.personId})
      if(!user)res.status(400).json({msg:"user does  not  exist"})
      res.status(200).json({msg:"user info success",person:user})
   } catch (error) {
      res.status(500).json({msg: "something went wrong",error:error.message}) 
   }
}



module.exports={register,login,getUserData }
