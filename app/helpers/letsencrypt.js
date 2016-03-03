var _ = require('underscore'),
	fs = require('fs'),
	os = require('os'),
	// class
	Parent = require("brisk").getClass("main");

// is this needed?
var DEV = !(process.env.NODE_ENV == 'production');

var helper = Parent.extend({

	acmeChallenge: function( domain ){
		// try to load the saved token, if available
		var creds;
		try {
			creds = JSON.parse( fs.readFileSync( os.tmpdir() + '/letsencrypt.json', "utf8") );
		} catch ( e ) {
			creds = {};
		}
		//res.json( json );
		return creds[domain] || null;
	},

	acmeToken: function( token, domain ){
		// fallbacks?
		var creds;
		try {
			creds = JSON.parse( fs.readFileSync( os.tmpdir() + '/letsencrypt.json', "utf8") );
		} catch ( e ) {
			creds = {};
		}
		creds[domain] = token;
		// save back
		fs.writeFileSync( os.tmpdir() + '/letsencrypt.json', JSON.stringify(creds), "utf8");
		return;
	}

});

module.exports = helper;
