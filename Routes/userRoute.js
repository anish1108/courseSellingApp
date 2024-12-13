const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const { USER_JWT_SECRET } = require("../config");
const router = express.Router();
const { Usermodel, PurchaseSchemamodel } = require("../db");
const { userauth } = require("../middlewareAuth/userauth");

router.post("/signup", async function (req, res) {
  const { username, email, password } = req.body;
  try {
    await Usermodel.create({
      username,
      email,
      password,
    });
    res.json({
      message: "you are signup",
    });
  } catch (e) {
    console.log(e);
    res.json({
      message: "Email already existed",
    });
  }
});

router.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  const user = await Usermodel.findOne({
    email,
    password,
  });
  console.log(user);
  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      USER_JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.json({
      message: "wrong cred",
    });
  }
});

router.post("/purchase", userauth, async function (req, res) {
  const userId = req.userId;
  const courseId = req.body.courseId;
  await PurchaseSchemamodel.create({
    userId,
    courseId,
  });
  res.json({
    message:"you have successfully bought course"
  })
});

module.exports = router;
