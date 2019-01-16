// import modules
const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

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
  passport.authenticate('twitter', { failureRedirect: '/' }),
  (req, res) => {
    // set JWT secret Key
    const myJWTSecretKey = 'tinyKindness';
    const { _id } = req.user;
    const obj = { id: _id };

    // creat JWT token - jwt.sign(obj, )
    const token = jwt.sign(obj, myJWTSecretKey);

    // send JWt token via res - res.redirect('')
    console.log(token, 'token');
    res.redirect(`/?token=${token}`);
  });


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
