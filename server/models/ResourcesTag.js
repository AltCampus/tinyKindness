const mongoose = require('mongoose');

const ResourcesTagSchema = new mongoose.Schema({
  tagName: { type: String },
  tagId: { type: Number },
});

const ResourcesTag = mongoose.model('ResourcesTag', ResourcesTagSchema);

module.exports = ResourcesTag;
