// import modules
const router = require('express').Router();
const userController = require('../controllers/user.controller');
// const helperController = require('../controllers/helper.controller');

router.get('/check', (req, res) => {
  res.send('You are connected to TinyKindness');
});

// verify user by JWT token and send user data
router.get('/user/:token', userController.verifyJWT);

router.get('/users/:username', userController.userInfo);

// export router
module.exports = router;
