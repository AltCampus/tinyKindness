const mongoose = require('mongoose');

const FeedbackTagSchema = new mongoose.Schema({
  name: { type: String },
});

const FeedbackTag = mongoose.model('FeedbackTag', FeedbackTagSchema);

module.exports = FeedbackTag;
