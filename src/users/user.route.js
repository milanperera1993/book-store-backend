const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("./user.model");

const JWT_SECRET = process.env.JWT_SECRET_KEY;

router.post("/admin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send({ message: "Admin not found!" });
    }
    if (password !== user.password) {
      return res.status(401).send({ message: "invalid credentials!" });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.status(200).json({
      message: "Authentication sucessful",
      token,
      user: {
        username,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Failed to login as admin");
    res.status(401).send({ message: "Invaild credentials" });
  }
});

module.exports = router;
