
// import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
    try {
        // fetch data from request ki body 
        const {post, user, body} = req.body;

        // create a comment object 
        const comment = new Comment( {
            post, user, body
        });

        // save the new comment in the database
        const savedComment = await comment.save();

        // find the post and push the comment id in the comments array inside post model
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id} }, {new: true} )
        .populate("comments") // populate the comments array with comment documents 
        .exec();

        res.json({
            post: updatedPost,
        });

    }
    catch(error) {
        return res.status(500).json({
            error: "Error while creating Commnet...",
        })
    }
}




