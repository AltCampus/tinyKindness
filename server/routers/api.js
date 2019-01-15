const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const helperController = require('../controllers/helper.controller');

const myJWTSecretKey = 'tinyKindness';

router.get('/check', (req, res) => {
  res.send('You are connected to TinyKindness');
});

router.post('/helper', helperController.addHelper);

router.get('/helper', helperController.displayAllHelper);

router.get('/user/:token', (req, res) => {
  console.log(req.params.token, 'token in verify');
  try {
    const tokenDecodedData = jwt.verify(req.params.token, myJWTSecretKey);
    User.findById(tokenDecodedData.id, (err, data) => {
      if (!err) return res.json(data);
    });
  } catch (error) {
    return res.json({
      error: true,
      data: error,
    });
  }
});

module.exports = router;
