const express = require("express");
const router = express.Router();

const Comment = require("../controllers/comment");

// UPDATE A EXISTING COMMENT TO A SPECIFIC POST
router.put("/:id", Comment.Update);

// DELETE A EXISTING COMMENT TO A SPECIFIC POST
router.delete("/:id", Comment.Delete);

module.exports = router;
