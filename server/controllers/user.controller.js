const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/User');
const IntroductionTag = require('./../models/IntroductionTag');

module.exports = {
  sendUserData(req, res) {
    const token = req.headers.authorization;
    const username = req.params.userName.slice(1);

    jsonwebtoken.verify(token, 'secret', (err, decoded) => {
      if (decoded.user) {
        const { _id } = decoded.user;
        User.findOne(req.params.userName ? { _id } : { username }, (e, user) => {
          res.json({
            user,
          });
        });
      }
    });
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
  // sendProfile(req, res) {
  //   const {userName} = req.params;

  //   console.log(req.params);
  // }
};
