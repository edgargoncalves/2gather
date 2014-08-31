

var mongoose = require('mongoose');
mongoose.connect('mongodb://eemg:1234@kahana.mongohq.com:10032/2gather_sand');
//mongoose.connect('mongodb://localhost/2gather');

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

var mongooseTypes = require("mongoose-types");
mongooseTypes.loadTypes(mongoose);


