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

renderizarActivos = () => {
    pedidos.forEach(function(pedido){
        document.getElementById('activos').innerHTML +=
        `<div class="contenedor-solicitud">
            <div class="contenedor-int1">
                <div class="contenedor-int2 mb-2">
                    <div><img src="${pedido.urlLogo}" alt=""></div>
                    <div class="nombre-empresa">${pedido.empresa}</div>
                </div>
                <div class="contenedor-int3">
                    <div class="mb-2"><i class="fa-solid fa-motorcycle"></i> ${pedido.tiempo} min</div>
                    <div class="mb-2">L. ${pedido.costoEnvio}</div>
                    <div>${pedido.distancia} Km</div>
                    <div>${pedido.id}</div>
                </div>
            </div>
            <div class="contenedor-int4">
                <div class="btn-menu-solicitud">Ver Mapa</div>
                <div class="btn-menu-solicitud" onclick="irDetalles()">Aceptar</div>
            </div>
        </div>`
    })
}

renderizarActivos();

irIndex = () => {
    window.location.href = "index.html"
}