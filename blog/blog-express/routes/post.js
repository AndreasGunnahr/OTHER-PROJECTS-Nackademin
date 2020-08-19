const express = require("express");
const router = express.Router();

const Post = require("../controllers/post");
const Comment = require("../controllers/comment");

// GET ALL EXISTING POSTS
router.get("/", Post.FindAll);

// CREATE A NEW POST
router.post("/", Post.Create);

// UPDATE EXISTING POST WITH TITLE AND CONTENT
router.put("/:id", Post.Update);

// DELETE EXISTING POST
router.delete("/:id", Post.Delete);

// GET ALL EXISTING COMMENTS TO EXISTING POST
router.get("/:id/comment", Comment.FindAll);

// CREATE A NEW COMMENT TO A SPECIFIC POST
router.post("/:id/comment", Comment.Create);

module.exports = router;
