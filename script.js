function mostrarmensaje() {
    let mensaje = document.getElementById("mensaje");

        mensaje.innerHTML = "🐾 cuida y protege a los animales";
        mensaje.style.display = "block";

        setTimeout(() => {
            mensaje.style.opacity= "1";
            mensaje.style.transform = "translateY(0)";
        }, 50);

}

function mostrarMensaje2() {
    let mensaje = document.getElementById("mensaje2");

        mensaje.innerHTML = "🐾 si tienes mascostas tu dever es cuidar de ellos";
        mensaje.style.display = "block";

        setTimeout(() => {
            mensaje.style.opacity= "1";
            mensaje.style.transform = "translateY(0)";
        }, 50);

      setTimeout(() => {
        msg.style.opacity = "0";
      }, 3000);
    }