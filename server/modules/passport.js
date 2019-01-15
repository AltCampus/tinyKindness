const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models/User');

module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    console.log('check 1')
    done(null, user._id);
  });
      
  passport.deserializeUser((_id, done) => {
    console.log('check 2')
    User.findById(_id, (err, user) => {
      console.log('check 3')
      done(err, user);
    });
  });

  passport.use(new TwitterStrategy({
    consumerKey: 'hK4Bn5XBGPp2ppkoWHdYabuNg',
    consumerSecret: 'D70vTuIo9az4FJwjGVQjIGLSkZJR3K897HChn62AYEZwiSKDdU',
    callbackURL: 'http://localhost:8001/callback/twitter',
  },
  (token, tokenSecret, profile, done) => {
    console.log( profile.id, profile.username, profile.displayName, "profile");
    User.findOne({ twitterId: profile.id }, (err, user) => {
      if (user) {
        console.log(user, "user");
        done(null, user)
      }
      if(err) return  done(err) ;
      if(!user){
        newUser = new User({
          name : profile.displayName,
          userName: profile.username,
          twitterId: profile.id,
          date: new Date(),
        });
        newUser.save((err, data) => {
          if(err) return err;
          console.log(data, "data")
          return done(null, data);
        })
      }
    });
  }
  ));
};
