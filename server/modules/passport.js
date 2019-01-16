// import modules
const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models/User');

// export passport module
module.exports = (passport) => {
  // serialize
  passport.serializeUser((user, done) => {
    console.log('check 1');
    const { _id } = user;
    return done(null, _id);
  });

  // de-serialize
  passport.deserializeUser((_id, done) => {
    console.log(_id, 'check 2');
    User.findById(_id, (err, user) => {
      console.log('check 3');
      return done(err, user);
    });
  });

  // passport use as middleware
  passport.use(new TwitterStrategy({
    consumerKey: 'dJaGG5hR8BuxO0CAsUVkwhIo4',
    consumerSecret: 'rdWjQaUaPUtsjUZGDHalXO6t2zOP0puX1NUoZXX339w9GEGYQT',
    callbackURL: 'http://localhost:8001/auth/callback/twitter',
  },
  // callback function
  (token, tokenSecret, profile, done) => {
    const { id, displayName, username } = profile;

    User.findOne({ twitterId: profile.id }, (err, user) => {
      // for registered user
      if (user) {
        console.log(user, 'user');
        return done(null, user);
      }
      if (err) return done(err);
      // For new user
      if (!user) {
        console.log(id, username, 'profile details');
        const newUser = new User({
          name: displayName,
          userName: username,
          twitterId: id,
          location: profile._json.location,
          introductionTagsId: [],
          feedbackTagsId: [],
          resourcesTagsId: [],
          introductionTagsInText: [],
          feedbackTagsInText: [],
          resourcesTagsInText: [],
          bio: '',
          joinedAt: new Date(),
        });
        // save new user in mongoDB
        newUser.save((error, data) => {
          if (error) return error;
          console.log(data, 'data');
          return done(null, data);
        });
      }
      return null;
    });
  }));
};
