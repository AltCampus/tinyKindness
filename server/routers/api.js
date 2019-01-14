const router = require('express').Router();
const helperController = require('../controllers/helper.controller');

router.get('/check', (req, res) => {
  res.send('You are connected to TinyKindness');
});

router.post('/helper', helperController.addHelper);

module.exports = router;
