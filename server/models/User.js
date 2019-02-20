const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
	name: {type: String},
	bio: {type: String},
	twitter_handle: {type: String},
	introduction: [],
	resources: [],
	feedback: []
})

const User = mongoose.model('User', userSchema);

module.exports = User;