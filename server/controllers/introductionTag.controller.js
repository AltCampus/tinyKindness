const IntroductionTag = require('../models/IntroductionTag');

module.exports = {
  findTagByQuery: (req, res) => {
    const { query } = req.query;
    const regexp = new RegExp(query);
    console.log(query, 'query');
    IntroductionTag.find({ name: { $regex: regexp } }, (err, data) => {
      if (!err) res.send(data);
    });
  },

  findAllTags: (req, res) => {
    IntroductionTag.find({}, (err, data) => {
      if (!err) res.send(data);
    });
  },

};
