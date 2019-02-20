// import modules
const router = require("express").Router();
const User = require('../models/User');

router.get("/api/v1/token", (req, res) => {
	console.log(req.body,"user Schema")
  var newUser = new User(req.body);
  newUser.save((err, data) => {
  	if(err) res.send(err);
  	res.json({user: data})
  })
});



// verify user by JWT token and send user data
// export router
module.exports = router;
