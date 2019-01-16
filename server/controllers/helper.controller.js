const Helper = require('../models/Helper');

module.exports = {

  addHelper: (req, res) => {
    const {
      name, introduction, feedback, resources, twitterHandle, bio,
    } = req.body;

    console.log(req.body, 'req body in controller');
    const newHelper = new Helper({
      name,
      introduction,
      feedback,
      resources,
      twitterHandle,
      bio,
      createdAt: new Date(),
    });
    newHelper.save((err) => {
      if (err) throw err;
      else {
        Helper.find({}, (error, data) => {
          if (!error) res.json(data);
        });
      }
    });
  },
  displayAllHelper: (req, res) => {
    Helper.find({}, (err, data) => {
      console.log(data)
      if (!err) res.json(data);
    });
  },

};
