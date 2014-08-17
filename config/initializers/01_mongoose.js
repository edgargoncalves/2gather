

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/2gather');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

var mongooseTypes = require("mongoose-types");
mongooseTypes.loadTypes(mongoose);


