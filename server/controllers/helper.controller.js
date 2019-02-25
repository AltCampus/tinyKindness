const User = require('../models/User');

module.exports = {
  getHelper: (req, res) => {
    User.find({}, (err, users) => {
      if (err) throw err;
      const filteredArr = users.filter(user => (user.introductions.length || user.resources.length || user.feedback.length));
      if (filteredArr.length) {
        res.json({ filteredArr })
      } else {
        res.json({
          msg: '404 helpers not found :)'
        })
      }
    })
  }
}