const mostrarSeccionLogIn = () => {
    document.getElementById('seccion-login').style.display = "block";
    document.getElementById('seccion-signin').style.display = "none";
    document.getElementById('seccion-solicitudes').style.display = "none";
}

mostrarSeccionLogIn();

const mostrarSeccionSignIn = () => {
    document.getElementById('seccion-login').style.display = "none";
    document.getElementById('seccion-signin').style.display = "block";
    document.getElementById('seccion-solicitudes').style.display = "none";
}

const mostrarSeccionSolicitudes = () => {
    document.getElementById('seccion-login').style.display = "none";
    document.getElementById('seccion-signin').style.display = "none";
    document.getElementById('seccion-solicitudes').style.display = "block";
}

var pedidos = [
    {
        id: 'B25C21',
        empresa: 'PIZZA HUT',
        distancia: 4.8,
        tiempo: 9,
        costoEnvio: 35,
        urlLogo: 'assets/img/logo-empresas/pizzahut.png'
    },
    {
        id: 'B25C22',
        empresa: 'BURGER KING',
        distancia: 5.5,
        tiempo: 12,
        costoEnvio: 42,
        urlLogo: 'assets/img/logo-empresas/bk.png'
    },
    {
        id: 'B25C23',
        empresa: 'McDONALDS',
        distancia: 6.7,
        tiempo: 13,
        costoEnvio: 49,
        urlLogo: 'assets/img/logo-empresas/mcdonalds.png'
    },
    {
        id: 'B25C24',
        empresa: 'KFC',
        distancia: 4.9,
        tiempo: 10,
        costoEnvio: 35,
        urlLogo: 'assets/img/logo-empresas/kfc.png'
    },
    {
        id: 'B25C25',
        empresa: 'PIZZA HUT',
        distancia: 3.4,
        tiempo: 7,
        costoEnvio: 28,
        urlLogo: 'assets/img/logo-empresas/pizzahut.png'
    }
];