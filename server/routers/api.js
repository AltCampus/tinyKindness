const passport = require("passport");
const router = require("express").Router();
const auth = require("./../modules/auth");

const introductionsController = require("../controllers/introductionTag.controller");
const feedbackController = require("../controllers/feedbackTag.controller");
const resourcesController = require("../controllers/resourcesTag.controller");
const userController = require("../controllers/user.controller");
const helperController = require('../controllers/helper.controller');

router.get("/check", (req, res) => {
  res.send("You are connected to TinyKindness");
});

// router.get("/introductions", introductionsController.introductions);

// router.get("/feedback", feedbackController.feedbacks);

// router.get('/introductions', introductionsController.introductions);

// router.get('/feedback', feedbackController.feedbacks);

// removing auth for testing purpose
// router.get('/user', auth.isLoggedIn, userController.sendUserData);
// router.get('/user', userController.sendUserData);

router.get('/auth/twitter', passport.authenticate('twitter', { session: false }));

router.get('/users', auth.isLoggedIn, userController.sendUserData);

router.put('/users', auth.isLoggedIn, userController.updateUser);

// router.get('/profile/:username')

// Sending all helper list on '/api/v1/helper'
router.get("/v1/helper", helperController.getHelper);

// verify user by JWT token and send user data
// export router
module.exports = router;
