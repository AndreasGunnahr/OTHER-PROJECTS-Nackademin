const db = require("../database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const findUserById = (id) => {
  return db.users.find({ _id: id });
};

const findByUsername = (username) => {
  return db.users.findOne({ username: username });
};

const countUsers = () => {
  return db.users.count({});
};

const createUser = (username, password, role) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  return db.users.insert({ username, password: hashedPassword, role });
};

const updateUser = (id) => {
  return db.users.update({ _id: id }, { username, password });
};

const deleteUser = () => {
  return db.users.remove({ _id: id });
};

const checkPassword = (enteredPassword, password) => {
  return bcrypt.compare(enteredPassword, password);
};

const generateToken = (id, username, role) => {
  return jwt.sign({ id, username, role }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
};

const clear = () => {
  return db.users.remove({}, { multi: true });
};

module.exports = {
  findUserById,
  createUser,
  updateUser,
  deleteUser,
  checkPassword,
  findByUsername,
  generateToken,
  countUsers,
  clear,
};
