const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const UserModel = require("../Model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

router.get("/", auth, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: "there is a problem on the server",
    });
  }
});

router.post(
  "/",
  [
    check("email", "email is required").not().isEmpty(),
    check("password", "password should be present and min of 1").isLength({
      min: 1,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // console.log("the errors of validation result is",errors);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    const { email, password } = req.body;

    try {
      let user = await UserModel.findOne({ email });

      if (!user) {
        res.status(400).json({ errors: [{ msg: "User does not exist" }] });
      }

      const ismatch = await bcrypt.compare(password, user.password);

      if (!ismatch) {
        res.status(400).json({ errors: [{ msg: "INVALID CREDENTIALS" }] });
      }
      const payload = {
        user: {
          id: user._id,
        },
      };

      console.log("the value of payload in the middleware is ", payload);

      jwt.sign(
        payload,
        process.env.JWTSECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({
            message: "token genetated successfully",
            token: token,
          });
        }
      );
    } catch (err) {
      res.status(500).json({ status: "server error", message: err });
    }
  }
);

module.exports = router;
