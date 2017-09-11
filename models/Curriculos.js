var mongoose = require('mongoose');

var CurriculoSchema = new mongoose.Schema({
	
      estudios: String,
      experiencias: String


});

mongoose.model('Curriculos', CurriculoSchema);