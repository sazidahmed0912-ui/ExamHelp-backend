const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  state: String,
  amount: Number,
  status: String,
  createdAt: Date
});

module.exports = mongoose.model("Order", OrderSchema);
