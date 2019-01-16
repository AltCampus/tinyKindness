const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String },
  userName: { type: String },
  twitterId: { type: String },
  location: { type: String },
  introductionTagsId: [{ type: Number }],
  feedbackTagsId: [{ type: Number }],
  resourcesTagsId: [{ type: Number }],
  introductionTagsInText: [{ type: String }],
  feedbackTagsInText: [{ type: String }],
  resourcesTagsInText: [{ type: String }],
  bio: { type: String },
  joinedAt: { type: Date },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
