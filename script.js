function mostrarMensaje() {
    let mensaje = document.getElementById("mensaje");

        mensaje.innerHTML = "🐾 cuida y protege a los animales";
        mensaje.style.display = "block";

        setTimeout(() => {
            mensaje.style.opacity= "1";
            mensaje.style.transform = "translateY(0)";
        }, 50);

}

function mostrarMensaje() {
    let mensaje = document.getElementById("mensaje");

        mensaje.innerHTML = "🐾 si tienes mascostas tu dever es cuidar de ellos";
        mensaje.style.display = "block";

        setTimeout(() => {
            mensaje.style.opacity= "1";
            mensaje.style.transform = "translateY(0)";
        }, 50);

}

function mostrarOcultar() {
 let mensaje = document.getElementById("mensaje");

 if (mensaje.style.display ="none") {
   mensaje.style.display = "block";
 } else {
   mensaje.style.display = "none";
 }
}
console.log("🐾 cuida y protege a los animales");
setInterval(() => {}, 1000);