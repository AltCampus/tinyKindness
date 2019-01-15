const router = require('express').Router();
const passport = require('passport');

router.get('/', (req, res) => {
  res.render('index');
});

<<<<<<< HEAD

router.get('/auth/twitter',
  passport.authenticate('twitter'));

router.get('/callback/twitter',
  passport.authenticate('twitter', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect home.
    // console.log(req, "req in callback");
    res.status(200).redirect('/');
  });

module.exports = router;
=======
router.get('/help', (req, res) => {
  res.render('index');
})

module.exports = router;
>>>>>>> ecdc22423e34d6b971d09feb2286b9e2c0969f96
