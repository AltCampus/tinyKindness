// import modules
const router = require("express").Router();

const introductionsController = require("../controllers/introductionTag.controller")
const feedbackController = require("../controllers/feedbackTag.controller")
const resourcesController = require("../controllers/resourcesTag.controller")
const userController = require('../controllers/user.controller');

router.post("/v1/token", userController.createUser)


router.get("/check", (req, res) => {
  res.send("You are connected to TinyKindness");
});

router.get("/v1/introductions",introductionsController.introductions );

router.get("/v1/feedback",feedbackController.feedbacks );

router.get("/v1/resources",resourcesController.resources);

// verify user by JWT token and send user data
// export router
module.exports = router;
