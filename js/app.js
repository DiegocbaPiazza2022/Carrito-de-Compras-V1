const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const btn = document.querySelectorAll(".btn-primary");
const fragment = document.createDocumentFragment()

const carritoArray = [];

const agregarProductoAlCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };
        const posicion = carritoArray.findIndex(item => item.id === producto.id);
        
        if(posicion === -1) {
            carritoArray.push(producto);
        }else {
            carritoArray[posicion].cantidad++;
        }

      

        mostrarCarrito()

};

const mostrarCarrito = () => {
        carrito.textContent = "";

    carritoArray.forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);

        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;

        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);

};


btn.forEach((item) => {
    item.addEventListener("click", agregarProductoAlCarrito);
    
});
