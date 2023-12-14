const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const getToken = require("../utils/helper");

// Router: 1 creating user using POST
router.post("/register", async (req, res) => {
  // const { email, password, username, firstName, lastName } = req.body;

  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res
      .status(301)
      .json({ err: "A user with this email already exists" });
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const newUserData = {
    email: req.body.email,
    password: hashedPassword,
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };
  const newUser = await User.create(newUserData);
  const token = await getToken(req.body.email, newUser);
  const userToReturn = { ...newUser.toJSON(), token };
  delete userToReturn.password;
  return res.status(200).json(userToReturn);
});

// Router :2 login user  using POST
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(301).json({ err: "Invalid credentials" });
  }
  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    return res.status(301).json({ err: "Invalid credentials" });
  }

  const token = await getToken(user.email, user);
  const userToReturn = { ...user.toJSON(), token };
  delete userToReturn.password;
  return res.status(200).json(userToReturn);
});

module.exports = router;
