const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = mongoose.Schema({
  name: {type: String, required: true},
  username: {type: String, required: true},
  imageURL: {type: String, required: true},
  bio: {type: String, required: true},
  introductions: [{type: Schema.Types.ObjectId, ref: 'IntroductionTag'}],
  resources: [{type: Schema.Types.ObjectId, ref: 'ResourcesTag'}],
  feedback: [{type: Schema.Types.ObjectId, ref: 'FeedbackTag'}]
})

const User = mongoose.model('User', userSchema);
module.exports = User;