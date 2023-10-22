const express = require("express");
const router = express.Router();

// import controller methods
const { dummyLink } = require("../controllers/likeController");
const { createComment } = require("../controllers/commentController");

// mpping the controller with route
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);

// export
module.exports = router;
