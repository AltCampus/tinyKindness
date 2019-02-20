const TwitterStrategy = require('passport-twitter').Strategy;
const SECRET = process.env.CLIENT_SECRET;
const User = require('../models/User');

module.exports = (passport) => {
  passport.use(new TwitterStrategy({
    consumerKey: 'XNAKIb0AUk414HAnFNJ5bAbRE',
    consumerSecret: SECRET,
    callbackURL: "http://localhost:8001/api/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    
    const username = profile._json.screen_name;
    console.log(username)
    User.findOne({ username }, (err, user) => {
      if (user === null) {
        const newUser = new User({
          name: profile._json.name,
          username: profile._json.screen_name,
          imageURL: profile._json.profile_image_url_https,
          bio: profile._json.description
        });
        newUser.save((err, userData) => {
          done(null, userData)
        })
      } else {
        done(null, user)
      }
    })
  }
));

}

