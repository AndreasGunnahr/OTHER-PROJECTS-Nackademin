const {
  findAllComments,
  createComment,
  updateComment,
  deleteComment,
} = require("../models/comment");

const FindAll = async (req, res) => {
  const postId = req.params.id;
  try {
    const comments = await findAllComments(postId);
    res.status(200).send(comments);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const Create = async (req, res) => {
  const postId = req.params.id;
  const { user, message } = req.body;
  try {
    const comment = await createComment(user, message, postId);
    res.status(200).json({ message: "Number of comments created: 1" });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const Update = async (req, res) => {
  const commentId = req.params.id;
  const { message } = req.body;
  try {
    const comment = await updateComment(commentId, message);
    res.status(200).json({ message: "Number of updated comments: " + comment });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const Delete = async (req, res) => {
  const commentId = req.params.id;
  try {
    const comment = await deleteComment(commentId);
    res.status(200).json({ message: "Number of deleted comments: " + comment });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

module.exports = {
  FindAll,
  Create,
  Update,
  Delete,
};
