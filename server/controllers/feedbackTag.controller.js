const FeedbackTag = require('../models/FeedbackTag');

module.exports = {
  findTagByQuery: (req, res) => {
    const { query } = req.query;
    const regexp = new RegExp(query);
    console.log(query, 'query');
    FeedbackTag.find({ name: { $regex: regexp } }, (err, data) => {
      if (!err) res.send(data);
    });
  },

  findAllTags: (req, res) => {
    FeedbackTag.find({}, (err, data) => {
      if (!err) res.send(data);
    });
  },

};
