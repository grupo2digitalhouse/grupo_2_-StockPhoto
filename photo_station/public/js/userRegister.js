window.onload = function(){
	let formulario = document.querySelector(".login-form");
	
	formulario.addEventListener("submit", function(event){
		let errores = [];

		let username = document.querySelector("[name='username']");
		if(username.value.length == 0){
			errores.push("El usuario es obligatorio");
		}else if(username.value.length < 2){
			errores.push("El usuario debe tener al menos 2 caracteres");
		}

		let email = document.querySelector("[name='email']");
		if(email.value.length == 0){
			errores.push("El email es obligatorio");
		}

		let password = document.querySelector("[name='password']");
		if(password.value.length == 0){
			errores.push("La contraseña es obligatoria");
		}else if(password.value.length < 8){
			errores.push("La contraseña debe tener al menos 8 caracteres");
		}
		
		if(errores.length > 0){
			event.preventDefault();
			
			let ulErrores = document.querySelector("div.errores ul");
			for (let i=0; i<errores.length; i++){
				ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
			}

			let objBoton = document.getElementById('boton-registro');
			objBoton.setAttribute("style", "pointer-events: none;");
			objBoton.style.backgroundColor = '#A7A9AC';

			setTimeout(function(){
				ulErrores.innerHTML = '';
				objBoton.setAttribute("style", "pointer-events: auto;");
			}, 4000);
		}
	})
}