const express = require("express");
const router = express.Router();

const Post = require("../controllers/post");

// GET ALL EXISTING POSTS
router.get("/", Post.findAll);

// CREATE A NEW POST
router.post("/", Post.create);

// UPDATE EXISTING POST WITH TITLE AND CONTENT
router.put("/:id", Post.update);

// DELETE EXISTING POST
router.delete("/:id", Post.remove);

// GET ALL EXISTING COMMENTS TO EXISTING POST
router.get("/:id/comments", Post.findAllComments);

// CREATE A NEW COMMENT TO A SPECIFIC POST
router.post("/:id/comments", Post.createNewComment);

module.exports = router;
