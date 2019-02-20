const passport = require('passport');
const User = require('../models/User');


module.exports = {

createUser: (req, res) => {
	User.find({twitter_handle: req.body.twitter_handle}, (err, user) => {
		if(!user.length){
			var newUser = new User(req.body);
			newUser.save((err, user) => {
				if(err) throw err;
				res.json({user})

			})
		}else res.json({
			msg: "User already exist"
		})

	})
}

}