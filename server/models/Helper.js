const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId;

const HelperSchema = new mongoose.Schema({
  // userId: { type: ObjectId, ref: 'User' },
  name: String,
  introduction: String,
  feedback: String,
  resources: String,
  twitterHandle: String,
  bio: String,
  createdAt: { type: Date },
});

const Helper = mongoose.model('Helper', HelperSchema);

module.exports = Helper;
