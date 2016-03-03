var fs = require("fs"),
	os = require("os"),
	path = require("path");

//var DEV = !(process.env.NODE_ENV == 'production');
//var deploy = (DEV) ? env.development : env.production;

module.exports = {
	letsencrypt: {
		dir: os.tmpdir()
	}
}
