const express = require("express");
const router = express.Router();

const User = require("../controllers/user");

// LOGIN A USER
router.post("/login", User.login);

// REGISTER A NEW USER
router.post("/register", User.register);

module.exports = router;
