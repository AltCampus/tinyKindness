// import modules
const router = require("express").Router();
const passport = require('passport');
const jsonwebtoken = require('jsonwebtoken')

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/user/kind", (req, res) => {
  res.render("index");
});

router.get ('/api/v1/token', (req, res) => {
  res.render('index');
})


router.get('/api/auth/twitter/callback', passport.authenticate('twitter', {session: false}), (req, res) => {
  const token = jsonwebtoken.sign({user : req.user}, 'secret');
  
  res.redirect(`http://localhost:8001/api/v1/token?t=${token}`);
});

// export router
module.exports = router;
