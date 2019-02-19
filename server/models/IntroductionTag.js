const mongoose = require('mongoose');

const IntroductionTagSchema = new mongoose.Schema({
  name: { type: String },
});

const IntroductionTag = mongoose.model('IntroductionTag', IntroductionTagSchema);

module.exports = IntroductionTag;
