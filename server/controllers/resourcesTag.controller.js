const ResourcesTag = require('../models/ResourcesTag');

module.exports = {
  findTagByQuery: (req, res) => {
    const { query } = req.query;
    const regexp = new RegExp(query);
    console.log(query, 'query');
    ResourcesTag.find({ name: { $regex: regexp } }, (err, data) => {
      if (!err) res.send(data);
    });
  },

  findAllTags: (req, res) => {
    ResourcesTag.find({}, (err, data) => {
      if (!err) res.send(data);
    });
  },

};
