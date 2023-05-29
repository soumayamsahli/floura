const jwt =  require('jsonwebtoken')

module.exports= authmiddleware = async (req,res,next) => {
try {
    const token = req.headers.token
    console.log(token)
    if(! token) res.status(401).json({msg:"not authorized"})
    else{
        const verifytoken =jwt.verify(token,process.env.jwt_SECRER)
        console.log(verifytoken)
        req.personId = verifytoken.id
        next()
    }
} catch (error) {
    res.status(500).json({msg: "something went wrong",error:error.message})
}
}