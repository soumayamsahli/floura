const Router= require('express').Router()
const {register,login,getUserData}= require ('../controllers/usercontrollers')
const authmiddleware = require('../middleware/authmiddleware')
const {check}= require('express-validator')
// @dec register role.user
// @method post path :/register
//@access:public

Router.post('/register',
[check('email','email is not valid')
.isEmail()
.normalizeEmail() ,
check('password', 'please enter atleast 8 characters!')
.isLength({min: 8})
]
,register)
Router.post('/login',login)
Router.get('/', authmiddleware ,getUserData)

module.exports=Router