const passport = require('passport');
const jsonwebtoken = require('jsonwebtoken');

// import modules
const router = require("express").Router();

router.get("/check", (req, res) => {
  res.send("You are connected to TinyKindness");
});

router.get('/auth/twitter', passport.authenticate('twitter', {session: false}));


// verify user by JWT token and send user data
// export router
module.exports = router;
