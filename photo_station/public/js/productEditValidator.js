window.onload = function(){
    let formulario = document.querySelector(".formulario");
        
    formulario.addEventListener("submit", function(event){
        let errores = [];

        let name = document.querySelector("[name='name']");
        if(name.value.length < 5){
            errores.push("El nombre es obligatorio y debe ser mayor a 5");
        } 

        let description = document.querySelector("[name='description']");
        if(description.value.length < 20){
            errores.push("La descripción debe tener al menos 20 caracteres");
        } 

        let price = document.querySelector("[name='price']");
        if(price.value < 0){
            errores.push("El precio debe ser mayor a 0");
        } else if (price.value == ""){
            errores.push("El precio es obligatorio");
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