class Articulo {
    constructor(info) {
        this.nombre = info.nombre;
        this.varietal = info.varietal;
        this.descripcion = info.descripcion;
        this.precio = info.precio;
        this.stock = info.stock;
        this.vendido = false;
    };
    vender() {
        this.vendido = true};
};

const articulo1 = new Articulo({
    nombre: "Alma Mora.",
    varietal: "Cabernet Sauvignon.",
    descripcion: "Añejado en barrica de roble.",
    precio: 1700,
    stock: 12
});

const articulo2 = new Articulo({
    nombre: "El Enemigo.",
    varietal: "Malbec.",
    descripcion: "Cosecha año 2016.",
    precio: 8500,
    stock: 6
});

const articulo3 = new Articulo({
    nombre: "Trumpeter.",
    varietal: "Blend Syrah/Merlot.",
    descripcion: "Vino joven de aromas frutados con matices entre citricos.",
    precio: 5500,
    stock: 12
});

const articulo4 = new Articulo({
    nombre: "Abeja Reina.",
    varietal: "Cabernet Franc.",
    descripcion: "Proveniente de Lujan de Cuyo de las fincas de los hermanos Durigutti.",
    precio: 6900,
    stock: 6
});

const articulo5 = new Articulo({
    nombre: "Toro Viejo.",
    varietal: "Borgoña.",
    descripcion: "Un clasico argentino y bien baratito.",
    precio: 690,
    stock: 24
});

let articulos = [articulo1, articulo2, articulo3, articulo4, articulo5];

articulos.push(new Articulo({
    nombre: "Santa Julia",
    varietal: "Chardonnay",
    descripcion: "Ideal para las tardes de calor",
    precio: 1800,
    stock: 18
}));

function mostrarArticulos() {
    articulos.forEach(articulo => {
        const articuloInfo =
           `Nombre: ${articulo.nombre}
            Varietal: ${articulo.varietal}
            Descripción: ${articulo.descripcion}
            Precio: $${articulo.precio}
            Stock: ${articulo.stock}`;

        alert(articuloInfo);
    });
};

function ingreso() {
    const condicionIngreso = prompt("Estás por ingresar a un sitio de venta alcohólica, ¿Eres mayor de 18 años? Responde si o no.");

    if (condicionIngreso === "si") {
        alert("¡Bienvenido, estos son nuestros vinitos disponibles!");
        mostrarArticulos();
        compra();
    } else {
        alert("Lo sentimos, este sitio es solo para mayores de edad.");
    };
};

ingreso();

function compra() {
    let cliente = prompt("¿Estas interesado en comprar algunos de nuestros vinitos? Responde si o no por favor");
    if (cliente != "si") {
        let sugerenciaCliente = prompt("Ok, te gustaria sugerirnos algun vino para que incorporemos a CoderWine? Responde si o no por favor");
        if (sugerenciaCliente != "si") {
            alert("Bueno, esperemos que en la proxima visita encuentres algun vinito que te tiente");
        } else {
            let posibleNuevoArticulo = prompt("Bien, ¿Cual es el nombre de ese vinito?");
            alert(`Gracias, tendremos en cuenta a ${posibleNuevoArticulo} para incorporar a nuestra tienda`);
        }
    } else {
        alert("Proseguimos con la experiencia CoderWine.");
    };
};