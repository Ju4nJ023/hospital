const ropa = [
    {tipoProducto: "camisa",
     precio: 20,
     stock: 10,
     descripcion: "Camisa de algodón",
    },
    {tipoProducto: "pantalón",
        precio: 30,
        stock: 5,
        descripcion: "Pantalón de mezclilla",
    },
    {tipoProducto: "zapatos",
        precio: 50,
        stock: 2,
        descripcion: "Zapatos de cuero",
    },
    {tipoProducto: "bufanda",
        precio: 15,
        stock: 8,
        descripcion: "Bufanda de lana",
    },
];
const muestraRopa = (ropa) => {
    const div = document.getElementById("Lista-ropa");
    const tipoProducto = document.createElement("p");
    const precio = document.createElement("p");
    const stock = document.createElement("p");
    const descripcion = document.createElement("p");

    tipoProducto.innerHTML = ropa.tipoProducto;
    precio.innerHTML = ropa.precio;
    stock.innerHTML = ropa.stock;
    descripcion.innerHTML = ropa.descripcion;

    div.appendChild(tipoProducto);
    div.appendChild(precio);
    div.appendChild(stock);

}

const muestraRopaCompleta = () => {
    for (let i = 0; i < ropa.length; i++) {
        muestraRopa(ropa[i]);
    }
};

document.addEventListener("DOMContentLoaded", muestraRopaCompleta); 