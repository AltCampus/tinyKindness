// import modules
const router = require('express').Router();
const userController = require('../controllers/user.controller');
const introductionTagController = require('../controllers/introductionTag.controller');
const feedbackTagController = require('../controllers/feedbackTag.controller');
const resourcesTagController = require('../controllers/resourcesTag.controller');
// const helperController = require('../controllers/helper.controller');

router.get('/check', (req, res) => {
  res.send('You are connected to TinyKindness');
});

// verify user by JWT token and send user data
router.get('/user/:token', userController.verifyJWT);

router.get('/users/:username', userController.userInfo);

router.get('/introudction-tags/search', introductionTagController.findTagByQuery);

router.get('/feedback-tags/search', feedbackTagController.findTagByQuery);

router.get('/resources-tags/search', resourcesTagController.findTagByQuery);

router.get('/introduction-tags', introductionTagController.findAllTags);

router.get('/feedback-tags', feedbackTagController.findAllTags);

router.get('/resources-tags', resourcesTagController.findAllTags);

// export router
module.exports = router;
