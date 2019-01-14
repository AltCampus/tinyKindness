const Helper = require('../models/Helper');

module.exports = {
  
  addHelper: (req, res) => {
    console.log(req.body, "req body in controller");
    const newHelper = new Helper(req.body);
    newHelper.save((err, data) => {
      console.log(err, data, 'data');
      if (err) throw err;
      else {
        Helper.find({}, (err, data) => {
          if (!err) res.json(data);
        });
      }
    });
  },

};
