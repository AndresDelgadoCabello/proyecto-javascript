// PRODUCTOS y uso de Array //
const productos = [
    {
        id: "perro_01",
        titulo: "Perro en KFC #17",
        imagen: "./img/perroKFC.jpg",
        precio: 700
    },
    {
        id: "perro_02",
        titulo: "Perro Chef #127",
        imagen: "./img/perroChef.jpg",
        precio: 1000
    },
    {
        id: "perro_03",
        titulo: "perro con Sombrero #26",
        imagen: "./img/perroSombrero.jpg",
        precio: 300
    },
    {
        id: "perro_04",
        titulo: "Perro Martinez #7",
        imagen: "./img/perroMartinez.jpg",
        precio: 1000
    },
    {
        id: "perro_05",
        titulo: "Perro Mago #20",
        imagen: "./img/perroMago.jpg",
        precio: 1500
    },
    {
        id: "perro_06",
        titulo: "Perro Spike #4",
        imagen: "./img/perroSpike.jpg",
        precio: 1000
    },
    {
        id: "perro_07",
        titulo: "Perro Bigote #47",
        imagen: "./img/perroBigote.jpg",
        precio: 3000
    },
    {
        id: "perro_08",
        titulo: "Perro Messi #1",
        imagen: "./img/perroMessi.jpg",
        precio : 20000
    },

];

// Elementos DOM //

const contenedorProductos = document.querySelector("#contenedor-productos");
const numero = document.querySelector("#numero");



function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    // creacion contenedores de productos //

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
                        `;
        contenedorProductos.append(div);
    })
    botonesParaAgregar();
}

cargarProductos(productos);


// botones para agregar

function botonesParaAgregar() {
    botonesParaAgregar = document.querySelectorAll(".producto-agregar");

    botonesParaAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
actualizarNumero();
} else {
    productosEnCarrito = [];
}

// agregar al carrito

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }



actualizarNumero();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumero() {
    let nuevonumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = nuevonumero;
}

// uso de API y fetch

const dog_btn = document.getElementById('dog_btn');
const dog_resultado = document.getElementById('dog_resultado');

dog_btn.addEventListener('click', RandomDog);


function RandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
        dog_resultados.innerHTML = `<img src=${data.url} alt="dog" />`
		});
}