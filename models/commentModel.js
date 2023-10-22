
const mongoose = require("mongoose");

// route handler
const commentSchema = mongoose.Schema({
    post: { // the post on which the comment is made
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // this is the reference to the post model
    }, 
    user: {
        type: String, 
        required: true, 
    }, 
    body : {
        type: String, 
        required: true,
    }
});

// export 
module.exports = mongoose.model("Comment", commentSchema);