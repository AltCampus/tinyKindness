const mongoose = require('mongoose');

const IntroductionTagSchema = new mongoose.Schema({
  tagName: { type: String },
  tagId: { type: Number },
});

const IntroductionTag = mongoose.model('IntroductionTag', IntroductionTagSchema);

module.exports = IntroductionTag;
