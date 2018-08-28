const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String
	},
	password: {
		type: String
	},
	isAdmin:{
		type: Boolean,
    default: false
	}
});

UserSchema.methods.generateHash = function(password) {
	console.log(password);
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
	console.log(password);
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', UserSchema);
