require('dotenv').config();

module.exports ={
	jsonwebtoken:{
		clientSecret:process.env.JSONWEB_TOKEN_SECRET,
	}
};
