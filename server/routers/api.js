const passport = require("passport");
const router = require("express").Router();
const auth = require("./../modules/auth");

const introductionsController = require("../controllers/introductionTag.controller");
const feedbackController = require("../controllers/feedbackTag.controller");
const resourcesController = require("../controllers/resourcesTag.controller");
const userController = require("../controllers/user.controller");

router.get("/check", (req, res) => {
  res.send("You are connected to TinyKindness");
});

router.get("/introductions", introductionsController.introductions);

router.get("/feedback", feedbackController.feedbacks);

router.get("/resources", resourcesController.resources);

router.get('/auth/twitter', passport.authenticate('twitter', { session: false }));

// removing auth for testing purpose
// router.get('/user', auth.isLoggedIn, userController.sendUserData);
router.get('/user', userController.sendUserData);


// export router
module.exports = router;
