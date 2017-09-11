var mongoose = require('mongoose');

var HistorySchema = new mongoose.Schema({
	
      Cuerpo:String,
      comentario:String,
      circuloPerteneciente:String


});

mongoose.model('Historias', HistorySchema);