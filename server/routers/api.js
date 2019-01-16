// import modules
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const helperController = require('../controllers/helper.controller');

router.get('/check', (req, res) => {
  res.send('You are connected to TinyKindness');
});

router.post('/helper', helperController.addHelper);

router.get('/helper', helperController.displayAllHelper);

// verify user by JWT token and send user data
router.get('/user/:token', (req, res) => {
  const myJWTSecretKey = 'tinyKindness';
  try {
    const tokenDecodedData = jwt.verify(req.params.token, myJWTSecretKey);
    User.findById(tokenDecodedData.id, (err, data) => {
      if (!err) return res.json(data);
      return err;
    });
  } catch (error) {
    return res.json({
      error: true,
      data: error,
    });
  }
  return null;
});

// export router
module.exports = router;
