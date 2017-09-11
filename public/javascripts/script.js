// Iniciamos WOW JS
new WOW().init();

// Cambiar el color del menu al desplazar hacia abajo. Por Elvin Acuña
$(window).scroll(function() {
	if ($("#nav-menu").offset().top > 56) {
		$("#nav-menu").addClass("bg-transparent");
		$("#con-menu").addClass("bg-transparent");
	} else {
		$("#nav-menu").removeClass("bg-transparent");
		$("#con-menu").removeClass("bg-transparent");
	}
});

// Muestra las carreras según la escuela seleccionada. Por Oscar López.
function seleccionarCarrera() {
	var Disenio = ["Diseño de Productos", "Diseño Integral"];
	var Enfermeria = ["Licenciatura en Enfermería"];
   	var Ingenieria = ["Ingeniería en Sistemas de Información", "Ingeniería en Computación", "Ingeniería en Biotecnología"];
   	var CienciasEE = ["Administración de Empresas", "Administración Turística y Hotelera", "Contaduría Pública y Finanzas", "Economía Gerencial", "Mercadotecnia"];
   	var CienciasJP = ["Licenciatura en Derecho"];
   	var School = document.getElementById("school").value;
	// 1. Diseño
	if(School == 1) {
		for (var i = 0; i < Disenio.length; i++) {
			if (Disenio.length <  area.options.length) {
				Remover(area.options.length - Disenio.length);
			}
			area.options[i] = new Option(Disenio[i]);
		}
	}
	// 2. Enfermería
	if(School == 2) {
		for (var i = 0; i < Enfermeria.length; i++) {
			if (Enfermeria.length <  area.options.length) {
				Remover(area.options.length - Enfermeria.length);
			}
			area.options[i] = new Option(Enfermeria[i]);
		}
	}
	// 3. Ingeniería
	if(School == 3) {
		for (var i = 0; i < Ingenieria.length; i++) {
			if (Ingenieria.length < area.options.length) {
				Remover(area.options.length - Ingenieria.length);
			}
			area.options[i] = new Option(Ingenieria[i]);
		}
	}
	// 4. Ciencias Económicas y Empresariales
	if(School == 4) {
		for (var i = 0; i < CienciasEE.length; i++) {
			if (CienciasEE.length <  area.options.length) {
				Remover(area.options.length - CienciasEE.length);
			}
			area.options[i] = new Option(CienciasEE[i]);
		}
	}
	// 5. Ciencias Jurídicas y Políticas
	if(School == 5) {
		for (var i = 0; i < CienciasJP.length; i++) {
			if (CienciasJP.length <  area.options.length) {
				Remover(area.options.length - CienciasJP.length);
			}
			area.options[i] = new Option(CienciasJP[i]);
		}
	}
}

function Remover(Rem) {
	for (var i = 0; i < Rem; i++) {
			area.remove(area.lentgh - 1);
		}
}