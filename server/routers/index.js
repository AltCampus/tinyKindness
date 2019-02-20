// import modules
const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/user/kind", (req, res) => {
  res.render("index");
});

// export router
module.exports = router;
