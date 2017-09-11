var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UPOLI - Social' });
});

var mongoose = require('mongoose');
var Perfiles = mongoose.model('Perfiles');
var Mensajes = mongoose.model('Mensajes');
var Curriculos = mongoose.model('Curriculos');
var Circulos = mongoose.model('Circulos');
var Historias = mongoose.model('Historias');


// GET - Find Messages
router.get('/mensajes', function(req, res, next){
    Mensajes.find(function(err, mensajes){
        if(err){return next(err)}

        res.json(mensajes)
    })
})

// POST - Add Profile
router.post('/perfil', function(req, res, next){
	var perfil = new Perfiles(req.body);

	perfil.save(function(err, perfil){
		if(err){return next(err)}
			res.json(perfil);

	})
})

// GET - Get Profiles
router.get('/perfiles', function(req, res, next){
    Perfiles.find(function(err, perfiles){
        if(err){return next(err)}

        res.json(perfiles)
    })
})

// GET - Get Circles
router.get('/circulos', function(req, res, next){
    Circulos.find(function(err, circulos){
        if(err){return next(err)}

        res.json(circulos)
    })
})

module.exports = router;
