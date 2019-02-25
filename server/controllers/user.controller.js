const Fuse = require('fuse.js');
const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/User');


module.exports = {
  sendUserData(req, res) {
    if (!req.query.q) {
      const token = req.headers.authorization;
      jsonwebtoken.verify(token, 'secret', (err, decoded) => {
        if (decoded.user) {
          const { _id } = decoded.user;
          User.findOne({ _id }, (e, user) => {
            res.json({
              user,
            });
          });
        }
      });
    } else {
      // display queried users
      const queryTag = req.query.q;
      const options = {
        shouldSort: true,
        threshold: 0.5,
        // location: 0,
        // distance: 100,
        // maxPatternLength: 32,
        // minMatchCharLength: 1,
        keys: [
          'introductions.name',
          'resources.name',
          'feedback.name',
        ],
      };
      let users = [];
      User.find()
        .populate('introductions')
        .populate('resources')
        .populate('feedback')
        .exec((err, data) => {
          if (!err) {
            // filtering out users whisn are narayan(if they have tags inside respective field)
            users = data.filter(user => (user.introductions.length || user.resources.length || user.feedback.length));
            const fuse = new Fuse(users, options);
            const result = fuse.search(queryTag);
            res.json(result);
          }
        });
    }
  }
};
