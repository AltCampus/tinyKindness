const ResourcesTag = require('../models/ResourcesTag');


module.exports = {

  resources: (req, res) => {
    if (!req.query.q) {
      ResourcesTag.find({}, (err, data) => {
        if (!err) res.send(data);
      });
    } else {
      const query = req.query.q;
      const regexp = new RegExp(query);
      ResourcesTag.find({ name: { $regex: regexp } }, (err, data) => {
        if (!err) res.send(data);
      });
    }
  }

}