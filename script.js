
function mostrarMensaje() {
    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = "Cuida y ama a los animales de la comunidad";
    mensaje.style.display = "block";


    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 70);
}





function mostrarnota() {
    let mensaje = document.getElementById("mensaje2");

    mensaje.innerHTML = "es el mejor amigo fiel que existe";
    mensaje.style.display = "block";


    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 70);
}