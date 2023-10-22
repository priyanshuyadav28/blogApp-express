
const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try {
        // fetch the data from requrest ki body 
        const {title, body} = req.body;

        // create a post object
        const post = new Post({
            title, body,
        });

        // save the post in the database
        const savedPost = await post.save();

        res.json({
            post: savedPost, 
        });
    }
    catch(error) {
        return res.status(500).json({
            error: "Error while creating post...",
        });
    }
    
}

exports.getAllPosts = async (req, res) => {
    try {
        //if you want to fetch only the id of like and comments use this
        const posts = await Post.find().populate("likes").populate("comments").exec();

        res.send({
            posts, 
        })

        // otherwise use the populate method to fetch the whole document of like and comments
    }
    catch(error) {
        return res.status(500).json({
            error: "Error while fetching all posts..."
        });
    }
};