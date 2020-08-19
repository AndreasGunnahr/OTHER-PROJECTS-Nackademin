const {
  findAllPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../models/post");

const FindAll = async (req, res) => {
  try {
    const posts = await findAllPosts();
    res.status(200).send(posts);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const Create = async (req, res) => {
  const { title, content } = req.body;
  try {
    const post = await createPost(title, content);
    res.status(200).json({ message: "Number of posts created: 1" });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const Update = async (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  try {
    const post = await updatePost(postId, title, content);
    res.status(200).json({ message: "Number of updated posts: " + post });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const Delete = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await deletePost(postId);
    res.status(200).json({ message: "Number of deleted posts: " + post });
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
