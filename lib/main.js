var Module = require("brisk").getHelper("module"),
	config = require("../config/brisk"),
	utils = require("./utils");

var Main = Module.extend({

	dir : __dirname,

	config: function( obj ){
		// extend (with underscore?)
		obj = utils.extend({}, config.letsencrypt, obj);
		return obj;
	}

});


module.exports = new Main();
