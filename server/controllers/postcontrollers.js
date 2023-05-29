
const post = require('../models/postModel');

const addpost = async (req, res) => {

}
// @dec get all posts 
// @params get path :/api/post/getposts
//@access:public - USER
const getposts = async (req, res) => {
    try {
        const posts = await post.find().populate('owner', '-password','-__v').sort('-createdAt')
        res.status(200).json({ msg: "getallposts ", post: newpost })

    } catch (error) {
        res.status(500).json({ msg: "something went wrong", error: error.message })
    }

    // @dec get all posts of the owner
    // @params get path :/api/post/getuserposts/:id
    //@access:public - USER
    
}


const getUserposts = async (req, res) => {
    try {
        const posts = await post.find({owner : req.params.id}).sort('-createdAt')
        res.status(200).json({ msg: "get all posts of user", post: posts })
    }
    catch (error) {
        res.status(500).json({ msg: "something went wrong", error: error.message })
    }
}
    module.exports = { addpost, getposts, getUserposts }
