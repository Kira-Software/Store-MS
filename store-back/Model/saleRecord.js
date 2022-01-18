const mongoose = require("mongoose");

const saleRecord = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  totalSale: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("saleRecord", saleRecord);

module.exports = User;
