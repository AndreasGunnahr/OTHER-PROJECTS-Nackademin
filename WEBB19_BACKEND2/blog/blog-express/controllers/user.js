const {
  findUserById,
  createUser,
  updateUser,
  deleteUser,
  findByUsername,
  checkPassword,
  generateToken,
} = require("../models/user");

const findOne = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await findUserById(userId);
    res.status(200).send(posts);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const register = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const user = await createUser(username, password, role);
    return res.status(200).send({ message: "User created", data: user });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const update = async (req, res) => {
  const userId = req.params.id;
  const { username, password } = req.body;
  try {
    const user = updateUser(userId, username, password);
    return res.status(200).json({ message: "Number of users updated " + post });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const remove = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await deleteUser(userId);
    res.status(200).json({ message: "Number of deleted users: " + post });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await findByUsername(username);
    if (!user) return res.send(404).send({ message: "Username not found" });
    if (!checkPassword(password, user.password)) {
      return res.status(401).send({ message: "Wrong password" });
    }
    return res.status(200).send({
      message: "Login Successful",
      token: generateToken(user._id, user.username, user.role),
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send(e);
  }
};

module.exports = {
  findOne,
  update,
  remove,
  login,
  register,
};
