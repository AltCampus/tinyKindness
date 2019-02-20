const IntroductionTag = require('../models/IntroductionTag');

module.exports = {

  introductions: (req, res) => {
    if (!req.query.q) {
      IntroductionTag.find({}, (err, data) => {
        if (!err) res.send(data);
      });
    } else {
      const query = req.query.q;
      const regexp = new RegExp(query);
      IntroductionTag.find({ name: { $regex: regexp } }, (err, data) => {
        if (!err) res.send(data);
      });
    }
  }

}