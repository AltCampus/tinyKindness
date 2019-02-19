const mongoose = require('mongoose');

const ResourcesTagSchema = new mongoose.Schema({
  name: { type: String },
});

const ResourcesTag = mongoose.model('ResourcesTag', ResourcesTagSchema);

module.exports = ResourcesTag;
