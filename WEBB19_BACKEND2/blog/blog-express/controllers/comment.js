const { updateComment, deleteComment } = require("../models/comment");

const update = async (req, res) => {
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

const remove = async (req, res) => {
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
  update,
  remove,
};
