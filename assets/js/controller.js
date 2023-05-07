const mostrarSeccionLogIn = () => {
    document.getElementById('seccion-login').style.display = "block";
    document.getElementById('seccion-signin').style.display = "none";
}

mostrarSeccionLogIn();

const mostrarSeccionSignIn = () => {
    document.getElementById('seccion-login').style.display = "none";
    document.getElementById('seccion-signin').style.display = "block";
}

irPrincipal = () => {
    window.location.href = "principal.html"; 
}