window.onload = function(){
    let formulario = document.querySelector(".login-form");
    
    formulario.addEventListener("submit", function(event){
        let errores = [];

        let email = document.querySelector("[name='email']");
        if(email.value.length == 0){
            errores.push("El email es ogligatorio y debe ser valido");
        } 

        let password = document.querySelector("[name='description']");
        if(password.value.length == 0){
            errores.push("La contraseña es obligatoria");
        } 
        
        if(errores.length > 0){
            event.preventDefault();
            
            let ulErrores = document.querySelector("div.errores ul");
            for (let i=0; i<errores.length; i++){
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }

        }
    })
}