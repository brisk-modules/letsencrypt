var brisk = require("brisk"),
	Parent = brisk.getBaseController("main");

var controller = Parent.extend({

	// Let's encrypt verification...
	".well-known": function(req, res){
		var Helper = require('brisk-letsencrypt').getHelper('letsencrypt');
		var letsencrypt = new Helper(); // use: req.site.helpers.letsencrypt;
		var domain = req.get('host'); // or req.get('origin');
		// Let's Encrypt
		//if( req.query["acme-challenge"] ){
		if( req.query['_key'] == "acme-challenge" ){
			var creds = letsencrypt.acmeChallenge(domain);
			if( creds ) res.send( creds );
			return res.end();
		}
		//if( req.query["acme-token"] ){
		if( req.query['_key'] == "acme-token" ){
			// save token
			letsencrypt.acmeToken( req.query["token"], domain );
			res.sendStatus(200); // customize response?
			return res.end();
		}
		// otherwise end the request now
		return res.end();

	}

});


// Helpers


module.exports = controller;
