
var fs = require("fs"),
	path = require("path");

// Helpers
var utils = {

	// deep extend
	extend: function() {
		var objects = Array.prototype.slice.apply( arguments );
		var destination = objects.shift();
		for (var i in objects){
			var source = objects[i];
			for (var property in source) {
				if (source[property] && source[property].constructor &&
				 source[property].constructor === Object) {
					destination[property] = destination[property] || {};
					arguments.callee(destination[property], source[property]);
				} else {
					destination[property] = source[property];
				}
			}
		}
		return destination;
	}

}

// private methods



module.exports = utils;
