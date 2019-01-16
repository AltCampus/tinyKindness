const mongoose = require('mongoose');

const FeedbackTagSchema = new mongoose.Schema({
  tagName: { type: String },
  tagId: { type: Number },
});

const FeedbackTag = mongoose.model('FeedbackTag', FeedbackTagSchema);

module.exports = FeedbackTag;
