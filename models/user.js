var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	user_name: { type: String, index: true },
	email_address: String
});

module.exports = mongoose.model('User', UserSchema);