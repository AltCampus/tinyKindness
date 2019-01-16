// import modules
const mongoose = require('mongoose');

// create a HelperSchema
const HelperSchema = new mongoose.Schema({
  name: String,
  introduction: String,
  feedback: String,
  resources: String,
  twitterHandle: String,
  bio: String,
  createdAt: { type: Date },
});

// create a Helper Model
const Helper = mongoose.model('Helper', HelperSchema);

// export model Helper
module.exports = Helper;
