const {
  findAllPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../models/post");

const { findAllCommentsByPostId, createComment } = require("../models/comment");

const findAll = async (req, res) => {
  try {
    const posts = await findAllPosts();
    res.status(200).send(posts);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const create = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.user;
  try {
    const post = await createPost(id, title, content);
    res.status(200).json({ message: "Number of posts created: 1" });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const update = async (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  try {
    const post = await updatePost(postId, title, content);
    return res
      .status(200)
      .json({ message: "Number of updated posts: " + post });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const remove = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await deletePost(postId);
    res.status(200).json({ message: "Number of deleted posts: " + post });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const findAllComments = async (req, res) => {
  const postId = req.params.id;
  try {
    const comments = await findAllCommentsByPostId(postId);
    res.status(200).send(comments);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const createNewComment = async (req, res) => {
  const postId = req.params.id;
  const { id } = req.user;
  const { message } = req.body;
  try {
    const comment = await createComment(id, message, postId);
    res.status(200).json({ message: "Number of comments created: 1" });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

module.exports = {
  findAll,
  create,
  update,
  remove,
  findAllComments,
  createNewComment,
};
