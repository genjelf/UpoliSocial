var mongoose = require('mongoose');

var circleSchema = new mongoose.Schema({
	
      carreraPerteneciente:String,
      interes:String,
      admin:String,
      helperUno:String,
      helperDos:String


});

mongoose.model('Circulos', circleSchema);