const express = require("express");
const ItemRecordModel = require("../Model/saleRecord");
const auth = require("../middleware/auth");
const router = express.Router();
const { check, validationResult } = require("express-validator");

router.post(
  "/",
  auth,

  [
    check("itemName", "item name is required").not().isEmpty(),
    check("totalSale", "total sale is required").not().isEmpty(),
    check("date", "date is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    const { itemName, totalSale, date } = req.body;

    try {
      const data = { itemName, totalSale, date };

      const record = new ItemRecordModel(data);

      await record.save();

      res.json({ message: "success", Item: record });
    } catch (err) {
      res.status(500).json({ status: "server error", message: err });
    }
  }
);

router.get("/", auth, async (req, res) => {
  try {
    const itemRecord = await ItemRecordModel.find();

    if (!itemRecord) {
      res.status(400).json({ msg: "there is no Record " });
    }

    res.json(itemRecord);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("server error");
  }
});

module.exports = router;
