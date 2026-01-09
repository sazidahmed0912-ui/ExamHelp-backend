const mongoose = require('mongoose');

module.exports = mongoose.model('Order', new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  state: String,
  amount: Number,
  status: String,
  coupon: String
}, { timestamps: true }));
