const FeedbackTag = require('../models/FeedbackTag');

module.exports = {
  feedbacks: (req, res) => {
    if (!req.query.q) {
      FeedbackTag.find({}, (err, data) => {
        if (!err) res.send(data);
      });
    } else {
        const query = req.query.q;
        const regexp = new RegExp(query);
        FeedbackTag.find({ name: { $regex: regexp } }, (err, data) => {
          if (!err) res.send(data);
        });
      }
  },

}