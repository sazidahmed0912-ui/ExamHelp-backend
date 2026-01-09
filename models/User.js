const mongoose = require('mongoose');

module.exports = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  mobile: String,
  password: String,
  role: { type: String, default: 'user' }
}, { timestamps: true }));
