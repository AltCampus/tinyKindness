const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  userName: String,
  twitterId: String,
  date: { type: Date },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
