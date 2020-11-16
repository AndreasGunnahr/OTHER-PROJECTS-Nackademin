const User = require("../models/User");

const getUsers = async () => {
  const users = await User.find();
  console.log(users);
  return users;
};

module.exports = {
  Query: {
    users: async () => getUsers(),
  },
};
