const productos = [
    {
        id: "grabado1",
        titulo: "Uno",
        imagen: "./img-gr/gr1.jpg",
        precio: 500,
        tamanio: "25 x 14"
    },

    {
        id: "grabado2",
        titulo: "Encuentro Color",
        imagen: "./img-gr/gr2.jpg",
        precio: 800,
        tamanio: "48 x 54"
    },

    {
        id: "grabado3",
        titulo: "Espejo",
        imagen: "./img-gr/gr3.jpg",
        precio: 400,
        tamanio: "25 x 14"
    },

    {
        id: "grabado4",
        titulo: "Encuentro",
        imagen: "./img-gr/gr1.jpg",
        precio: 700,
        tamanio: "48 x 54"
    },

    {
        id: "grabado5",
        titulo: "Valizas",
        imagen: "./img-gr/gr5.jpg",
        precio: 400,
        tamanio: "14 x 14"
    },

    {
        id: "grabado6",
        titulo: "xilografía 1",
        imagen: "./img-gr/gr6.jpg",
        precio: 500,
        tamanio: "25 x 14"
    }
]


const contenedorProductos = document.querySelector("#contenedor-productos")

function cargarProductos() {

    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <div class="col-xl-4 col-md-6 col-sm-12 p-2 pb-4 text-center">
                        <img class="producto-imagen img-fluid" src"${producto.imagen}" alt="${producto.titulo}">
                        <div class="producto-detalles">
                            <h3 class="producto-titulo py-1">${producto.titulo}</h3>
                            <p class="producto-precio py-1">$${producto.precio}</p>
                            <p class="producto-tamanio py-1">${producto.tamanio}</p>
                            <button class="btn btn-info producto-agregar" id="${producto.id}">Agregar</button>
                        </div>
                    </div>
        
        `;
        contenedorProductos.append(div);

    })
}

cargarProductos()