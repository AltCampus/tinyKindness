// import modules
const router = require("express").Router();

router.get("/check", (req, res) => {
  res.send("You are connected to TinyKindness");
});

// verify user by JWT token and send user data
// export router
module.exports = router;
