var mongoose = require('mongoose');
var dbURI = 'mongodb://usertest:drakon12345@ds131323.mlab.com:31323/bdteste';
//

mongoose.connect(dbURI,{ useNewUrlParser: true });

mongoose.connection.on('connected', function() {
	console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
	console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
	console.log('Mongoose default connection disconnected');
});

mongoose.connection.once('open', function() {
	console.log('Mongoose default connection is open')
});

process.on('SIGINT', function() {
	mongoose.connection.close(function() {
		console.log('Mongoose default connection disconnected through app termination');
		process.exit(0);
	});
});
