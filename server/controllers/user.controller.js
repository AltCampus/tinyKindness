const Fuse = require('fuse.js');
const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/User');
const IntroductionTag = require('./../models/IntroductionTag');

module.exports = {
  sendUserData(req, res) {
    if (!req.query.q) {
      const token = req.headers.authorization;
      // const username = req.params.userName.slice(1);
      jsonwebtoken.verify(token, 'secret', (err, decoded) => {
        if (decoded.user) {
          const { _id } = decoded.user;
          User.findOne({ _id }, (err, user) => {
            res.json({ user });
          })
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
      User.find({})
        .populate('introductions')
        .populate('resources')
        .populate('feedback')
        .exec((err, data) => {
          if (!err) {
            // filtering out users whisn are narayan(if they have tags inside respective field)
            users = data.filter(user => (user.introductions.length || user.resources.length || user.feedback.length));
            const fuse = new Fuse(users, options);
            const result = fuse.search(queryTag);
            res.json({ result });
          }
        });
      }
  },
  updateUser(req, res) {
    const async = require('async');    
    const { user } = req.body;

    User.findOne({ _id: user._id }, (err, userData) => {
      if (err || !userData) {
        return res.status(404).json({
          msg: 'Something went wrong or user not available. Please try again.',
        });
      }
      const keyValArr = Object.entries(user);

      keyValArr.forEach((keyVal, i) => {
        const [key, value] = keyVal;
        if (key == 'introductions') {
          const savedTags = value.filter(v => v._id != 'null').map(v => v._id);
          
          const tagsToSaved = value.filter(v => v._id == 'null').map(v => new IntroductionTag({
            name: v.name,
          }));
          
          const newSavedTags = tagsToSaved.map(v => v._id);
          
          async.eachOfSeries(tagsToSaved, (tag) => {
            tag.save((err, tag)=> {
              if (err) throw err;
              newSavedTags.push(tag._id);
            });
          });
          userData[key] = [...savedTags, newSavedTags];
        } else {
          userData[key] = value;
        }
      });    
      userData.save(() => {
        if (err) throw err;
        req.statusCode(202);
      });
    });
  },
  getUserProfile(req, res) {
    const username = req.params.username.slice(1);

    User.findOne({ username })
      .populate('introductions')
      .populate('resources')
      .populate('feedback')
      .exec((err, user) => {
        if(err || !user) {
          return res.status(404).json({
            msg: "Profile not found"
          });
        }
        return res.json({ user });
      })
  }
};
