script.js
@@ -0,0 +1,30 @@
function mostrarMensaje() {
    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = "Cuida y protege a los animales";
    mensaje.style.display = "block";


    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 70);
}





function mostrarnota() {
    let mensaje = document.getElementById("mensaje2");

    mensaje.innerHTML = "Hola, que tal, me gusta que me digan Mariii";
    mensaje.style.display = "block";


    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 70);
}