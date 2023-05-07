var motoristas = [];

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

const obtenerMotoristas = () => {
    fetch('http://localhost:8000/motoristas', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((respuesta) => respuesta.json())
    .then((respuestaMotoristas) => {
        console.log(respuestaMotoristas);
        motoristas = respuestaMotoristas;
    })
}

obtenerMotoristas();

const logIn = () => {
    let correo = document.getElementById("correo-login").value;
    let clave = document.getElementById("pass-login").value;
    motoristas.forEach(motorista => {
        if (correo == motorista.email && clave == motorista.password) {
            localStorage.setItem("_id", motorista._id);
            window.location.href = "principal.html"
        } 
    });
}