const db = require("../database");

const findAllPosts = () => {
  return db.posts.find({});
};

const createPost = (userId, title, content) => {
  return db.posts.insert({ userId, title, content });
};

const countPosts = () => {
  return db.posts.count({});
};

const updatePost = (postId, title, content) => {
  return db.posts.update({ _id: postId }, { title, content });
};

const deletePost = async (id) => {
  return db.posts.remove({ _id: id });
};

const clear = () => {
  return db.posts.remove({}, { multi: true });
};

module.exports = {
  findAllPosts,
  createPost,
  updatePost,
  deletePost,
  countPosts,
  clear,
};
