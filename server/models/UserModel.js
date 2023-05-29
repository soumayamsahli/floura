const mongoose= require('mongoose')

const userSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum :["user","admin"],
        default: "user"
    },
})
const Person=mongoose.model('person', userSchema)
module.exports = Person