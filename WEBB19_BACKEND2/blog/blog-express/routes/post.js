const express = require("express");
const router = express.Router();

const Post = require("../controllers/post");
const auth = require("../middlewares/auth");
const permit = require("../middlewares/permit");

// GET ALL EXISTING POSTS
router.get("/", Post.findAll);

// CREATE A NEW POST
router.post("/", auth, permit("admin", "user"), Post.create);

// UPDATE EXISTING POST WITH TITLE AND CONTENT
router.put("/:id", auth, permit("admin", "user"), Post.update);

// DELETE EXISTING POST
router.delete("/:id", auth, permit("admin", "user"), Post.remove);

// GET ALL EXISTING COMMENTS TO EXISTING POST
router.get(
  "/:id/comments",
  auth,
  permit("admin", "user", "anonymous"),
  Post.findAllComments
);

// CREATE A NEW COMMENT TO A SPECIFIC POST
router.post(
  "/:id/comments",
  auth,
  permit("admin", "user"),
  Post.createNewComment
);

module.exports = router;
