// import modules
const router = require("express").Router();

const IntroductionTag = require('../models/IntroductionTag');
const FeedbackTag = require('../models/FeedbackTag');
const ResourcesTag = require('../models/ResourcesTag');



router.get("/check", (req, res) => {
  res.send("You are connected to TinyKindness");
});

router.get("/v1/introductions", (req, res) => {
  if (!req.query.q) {
    IntroductionTag.find({}, (err, data) => {
      if (!err) res.send(data);
    });
  } else{
    const query = req.query.q;
    const regexp = new RegExp(query);
    IntroductionTag.find({ name: { $regex: regexp } }, (err, data) => {
      if (!err) res.send(data);
    });
  }
});

router.get("/v1/feedback", (req, res) => {
  if (!req.query.q) {
    FeedbackTag.find({}, (err, data) => {
      if (!err) res.send(data);
    });
  } else {
    const query = req.query.q;
    const regexp = new RegExp(query);
    FeedbackTag.find({ name: { $regex: regexp } }, (err, data) => {
      if (!err) res.send(data);
    });
  }
});

router.get("/v1/resources", (req, res) => {
  if (!req.query.q) {
    ResourcesTag.find({}, (err, data) => {
      if (!err) res.send(data);
    });
  } else {
    const query = req.query.q;
    const regexp = new RegExp(query);
    ResourcesTag.find({ name: { $regex: regexp } }, (err, data) => {
      if (!err) res.send(data);
    });
  }
});

// verify user by JWT token and send user data
// export router
module.exports = router;
