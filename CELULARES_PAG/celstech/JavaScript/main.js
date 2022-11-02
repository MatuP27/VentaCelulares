let miBoton = document.querySelector('#usuario');
let miTitulo = document.querySelector('h2.bienvenida');

function estableceNombreUsuario(){
	let miNombre = prompt('Por favor, ingresa tu nombre.');
	let miApellido = prompt('Por favor, ingresa tu apellido.');
	if ((!miNombre) || (!miApellido)) {
		estableceNombreUsuario();
	}
	else {
		localStorage.setItem('nombre', miNombre);
		localStorage.setItem('apellido', miApellido);

		miTitulo.innerHTML = '¡Hola ' + miNombre + ' ' + miApellido + ', bienvenido a CelsTech!';
		let miEdad = prompt('Ingrese su edad:');
		if(!miEdad) {
			establecerEdad();
		}
		else {
			if (miEdad < 18) {
				alert('ALERTA.\nESTÁ PÁGINA PUEDE CONTENER CONTENIDO NO APTO PARA MENORES.');
			}
		}
	}
}

if ((!localStorage.getItem('nombre')) || (!localStorage.getItem('apellido'))) {
	estableceNombreUsuario();
}
else {
	let nombreAlmacenado = localStorage.getItem('nombre');
	let apellidoAlmacenado = localStorage.getItem('apellido');
	miTitulo.textContent = '¡Hola ' + nombreAlmacenado + ' ' + apellidoAlmacenado + ', bienvenido a CelsTech!';
}
 miBoton.onclick = function() {
 	estableceNombreUsuario();
 }