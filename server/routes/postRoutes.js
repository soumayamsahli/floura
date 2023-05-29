const Router= require('express').Router()
const {addpost,getposts,getuserposts}= require ('../controllers/postcontrollers')
const authmiddleware = require('../middleware/authmiddleware')
// @dec create a new post 
// @params post path :/api/post/newpost
//@access:ethodprivate - USER

Router.post('/newpost', authmiddleware, addpost)
Router.post('/getposts',getposts)// we can make it private
//Router.get('/getuserposts/:id', getuserposts )

module.exports=Router