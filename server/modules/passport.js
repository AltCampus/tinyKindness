const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models/User');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    console.log('check 1');
    return done(null, user._id);
  });
  
  passport.deserializeUser((_id, done) => {
    console.log(_id,'check 2')
    User.findById(_id, (err, user) => {
      console.log('check 3');
      return done(err, user);
    });
  });

  passport.use(new TwitterStrategy({
    consumerKey: 'dJaGG5hR8BuxO0CAsUVkwhIo4',
    consumerSecret: 'rdWjQaUaPUtsjUZGDHalXO6t2zOP0puX1NUoZXX339w9GEGYQT',
    callbackURL: 'http://localhost:8001/auth/callback/twitter'
  },
  (token, tokenSecret, profile, done) => {
    console.log( profile.id, profile.username, profile.displayName, 'profile');
    User.findOne({ twitterId: profile.id }, (err, user) => {
      if (user) {
        console.log(user, 'user');
        return done(null, user);
      }
      if (err) return done(err);
      if (!user) {
        console.log(profile._id, profile.name, 'profile details');
        const newUser = new User({
          name: profile.displayName,
          userName: profile.username,
          twitterId: profile.id,
          date: new Date(),
        });
        newUser.save((err, data) => {
          if (err) return err;
          console.log(data, 'data');
          return done(null, data);
        });
      }
    });
  },
  ));
};
