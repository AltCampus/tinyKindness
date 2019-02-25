const User = require('../models/User');

module.exports = {
  getHelper: (req, res) => {
    User.find({}, (err, users) => {
      if (err) throw err;
      const filteredArr = users.reduce((acc, val) => {
        if (val.introductions.length || val.resources.length || val.feedback.length) {
          acc = [...acc, val];  
        }
        return acc;
      }, [])
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