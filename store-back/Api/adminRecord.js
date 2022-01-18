const express = require("express");
const ItemRecordModel = require("../Model/saleRecord");
const auth = require("../middleware/auth");
const router = express.Router();
const { check, validationResult } = require("express-validator");

router.post(
  "/:id",
  auth,

  async (req, res) => {
    console.log(req.params.id);

    try {
      const record = await ItemRecordModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { approved: true } },
        { new: true }
      );

      await record.save();

      res.json({ message: "Record updated successfully", record: record });
    } catch (err) {
      res.status(500).json({ status: "server error", message: err });
    }
  }
);

router.get("/", auth, async (req, res) => {
  try {
    const itemRecord = await ItemRecordModel.find({ approved: false });

    if (!itemRecord) {
      res.status(400).json({ msg: "There is no Record to approve" });
    }

    res.json(itemRecord);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("server error");
  }
});

module.exports = router;
