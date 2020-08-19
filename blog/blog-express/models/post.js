const db = require("../database");

const findAllPosts = () => {
  return db.posts.find({});
};

const createPost = (title, content) => {
  return db.posts.insert({ title, content });
};

const updatePost = (postId, title, content) => {
  return db.posts.update({ _id: postId }, { title, content }, {});
};

const deletePost = async (id) => {
  return db.posts.remove({ _id: id }, {});
};

module.exports = {
  findAllPosts,
  createPost,
  updatePost,
  deletePost,
};
