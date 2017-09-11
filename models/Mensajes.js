var mongoose = require('mongoose');

var MensajeSchema = new mongoose.Schema({
	
	  cuerpo:String,
      fechaHora:Date,
      remitente:String,
      destinatario:String
});

mongoose.model('Mensajes', MensajeSchema);