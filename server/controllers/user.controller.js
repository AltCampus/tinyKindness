const passport = require('passport');
const User = require('../models/User');


module.exports = {

createUser: (req, res) => {
	User.find({twitter_handle: req.body.twitter_handle} (err, user) => {
		if(!user){
			var newUser = new User(req.body);
		}

	})
}

}