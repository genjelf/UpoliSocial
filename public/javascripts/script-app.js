var app = angular.module("appUPOLI", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
		.when("/home", {
			templateUrl : "views/home.html"
		})
        .when("/circle", {
            templateUrl : "views/circle.html",
            controller: 'CircleController'
        })
		.when("/signup", {
			templateUrl : "views/signup.html",
            controller: 'SignUpController'
		})
        .when("/signin", {
            templateUrl : "views/signin.html",
            controller: 'SignInController'
        })
        .when("/profile", {
            templateUrl : "views/profile.html",
            controller: 'ProfileController'
        })
		.when("/message", {
			templateUrl : "views/message.html",
            controller: 'MessageController'
		})
		.otherwise({
			redirectTo: '/home'
		});

})

.factory('comun', function($http) {
    
    var comun = {};

    comun.perfiles = [];
    comun.perfil = {};

    comun.mensajes = [];
    comun.mensaje = {};

    comun.getMensajes = function(){
        return $http.get('/mensajes')
        .then(function(response){
            angular.copy(response.data, comun.mensajes)
            return comun.mensajes
        })
    }

    comun.addPerfil = function(perfil){
        return $http.post('/perfil', perfil)
        .then(function(response){
            comun.perfiles.push(perfil);
        })
    }

  	return comun;
})

app.controller('CircleController', function($scope, comun) {

})

app.controller('SignUpController', function($scope, comun) {
    $scope.perfil = {}
    // comun.getPerfiles(); 
    $scope.perfiles = comun.perfiles;

    $scope.agregarPerfil = function() {
        comun.addPerfil({
            sede: $scope.perfil.sede,
            escuela: $scope.perfil.escuela,
            carrera: $scope.perfil.carrera,
            nombre: $scope.perfil.nombre,
            edad: $scope.perfil.edad,
            anioIngreso: $scope.perfil.anioIngreso,
            anioEgreso: $scope.perfil.anioEgreso
        })
    }
})

app.controller('SignInController', function($scope, comun) {

})

app.controller('ProfileController', function($scope, comun) {

})

app.controller('MessageController', function($scope, comun) {
    $scope.mensaje = {}
    comun.getMensajes(); 
    $scope.mensajes = comun.mensajes;
});
