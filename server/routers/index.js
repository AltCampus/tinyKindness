// import modules
const router = require('express').Router();
const passport = require('passport');
const userController = require('../controllers/user.controller');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/help', (req, res) => {
  res.render('index');
});

// twitter authentication route
router.get('/auth/twitter', passport.authenticate('twitter'));


// twitter authentication callback route
router.get('/auth/callback/twitter',
  passport.authenticate('twitter', { failureRedirect: '/' }), userController.authCallback);


router.get('/help', (req, res) => {
  res.render('index');
});

router.get('/need', (req, res) => {
  res.render('index');
});

router.get('/profile', (req, res) => {
  res.render('index');
});

// export router
module.exports = router;
