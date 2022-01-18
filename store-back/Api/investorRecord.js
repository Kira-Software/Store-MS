const express = require("express");
const ItemRecordModel = require("../Model/saleRecord");
const auth = require("../middleware/auth");
const router = express.Router();


router.get("/", auth, async (req, res) => {
  try {
    const itemRecord = await ItemRecordModel.find({ approved: true });

    if (!itemRecord) {
      res.status(400).json({ msg: "There is no approved record" });
    }

    res.json(itemRecord);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("server error");
  }
});

module.exports = router;
