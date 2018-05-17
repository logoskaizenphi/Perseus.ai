const PersistData = require('./lib/PersistData');

exports.handler = function(event, context, callback) {
	const storedata = new PersistData(event); // succeeds

	storedata.persistdata(callback, context);
};
