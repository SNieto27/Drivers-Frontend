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

pedido = {};

console.log(pedidos);

renderizarDetalles = () => {
    pedido = pedidos[0];
    
    document.getElementById("superior-detalles").innerHTML =
    `<div class="contenedor-solicitud mb-3">
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
            <div class="btn-menu-solicitud">Volver</div>
        </div>
    </div>`;

    document.getElementById("detalle-pedido").innerHTML =
    `<div class="nombre-empresa mb-3 centrar-subt">Detalles de la Entrega</div>
    <div class="nombre-cantidad mx-4">    
        <div>PIZZA BASE DE QUESO</div>
        <div>Cantidad: 2</div>
    </div>
    <div class="nombre-cantidad mx-4">
        <div>Precio unitario:</div>
        <div>177.69</div>
    </div>
    <div class="nombre-cantidad mx-4">
        <div>Subtotal:</div>
        <div>355.36</div>
    </div>
    <div class="nombre-cantidad mx-4">
        <div>ISV:</div>
        <div>42.64</div>
    </div>
    <div class="nombre-cantidad mx-4">
        <div>Envío:</div>
        <div>35.00</div>
    </div>
    <div class="nombre-cantidad mx-4">
        <div>Comisión de App:</div>
        <div>15.00</div>
    </div>
    <div class="nombre-cantidad mx-4">
        <div>Total:</div>
        <div>448.00</div>
    </div>
    <hr>
    <div class="nombre-empresa mb-3 centrar-subt">Información del Cliente</div>
    <div class="nombre-cantidad mx-4">
        <div>Nombre:</div>
        <div>Anthony Hopkins</div>
    </div>
    <div class="nombre-cantidad mx-4">
        <div>No. de Celular:</div>
        <div>1234-5678</div>
    </div>
    <hr>
    <div class="nombre-empresa mb-3 centrar-subt">Estado del Pedido</div>
    <div class="nombre-cantidad mx-4">
        <div>Estado Actual:</div>
        <div>Aceptado</div>
    </div>
    <div class="nombre-cantidad mx-4">
        <div>Siguiente:</div>
        <div>En el Origen</div>
    </div>
    `;
};

renderizarDetalles();

