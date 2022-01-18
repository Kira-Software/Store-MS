const express = require("express");
const { check, validationResult } = require("express-validator");
const UserModel = require("../Model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const router = express.Router();

router.post(
  "/",
  auth,
  [
    check("email", " email is required").not().isEmpty(),
    check("role", " role is required").not().isEmpty(),
    check("password", "password should be present and min of 1").isLength({
      min: 1,
    }),
  ],
  async (req, res) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    const { email, password, role } = req.body;

    try {
      let user = await UserModel.findOne({ email });

      if (user) {
        errors = [{ msg: "this user is already exists" }];
        res.status(400).json({ errors: errors });
      }

      user = new UserModel({
        email,
        role,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user._id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWTSECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({
            message: "User registered successfully",
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
