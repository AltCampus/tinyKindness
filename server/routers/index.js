const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const myJWTSecretKey = 'tinyKindness';

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
router.get('/help', (req, res) => {
  res.render('index');
});

router.get('/auth/twitter',
  passport.authenticate('twitter'));

router.get('/auth/callback/twitter',
  passport.authenticate('twitter', { failureRedirect: '/' }),
  (req, res) => {
    const { _id } = req.user;
    const obj = { id: _id };

    const token = jwt.sign(obj, myJWTSecretKey);
    // creat JWT token - jwt.sign(req.user.id, )
    // send JWt token via res - res.send({ jwt : token})
    // res.status(200).json({
    //   user: req.user,
    //   jwtToken: token,
    // });
    console.log(token,"token")
    res.redirect(`/?token=${token}`);
  });
  
router.get('/help', (req, res) => {
  res.render('index');
});

router.get('/need', (req, res) => {
  res.render('index');

});

module.exports = router;
