var mongoose = require('mongoose');

var PerfilSchema = new mongoose.Schema({
	
      sede: String,
      escuela: String,
      carrera: String,
      nombre: String,
      edad:Number,
      anioIngreso:Number,
      anioEgreso:Number,
      tipoUsuario: String,
      pass:String
	

});

mongoose.model('Perfiles', PerfilSchema);
