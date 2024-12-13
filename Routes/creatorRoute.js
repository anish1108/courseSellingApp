const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const router = express.Router();
const { Creatormodel, Coursemodel } = require("../db");
const { creatorauth } = require("../middlewareAuth/creatorauth");
// const {jwt} = require("jsonwebtoken")
const { CREATOR_JWT_SECRET } = require("../config");

router.post("/signup", async function (req, res) {
  const { username, email, password } = req.body;
  try {
    await Creatormodel.create({
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
  const user = await Creatormodel.findOne({
    email,
    password,
  });
  console.log(user);
  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      CREATOR_JWT_SECRET
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

router.post("/createCourse", creatorauth, async function (req, res) {
  const adminId = req.userId;
  console.log(adminId)
  const { title, description, image, price } = req.body;
  try {
    await Coursemodel.create({
      title,
      description,
      image,
      price,
      creatorId: adminId,
    });
    res.json({
      message: "courses created",
    });
  }
   catch (e) {
    console.log(e);
    res.json({
      message: "wrong token",
    }
  );
  }
});

module.exports = router;
