// CARRITO DE COMPRAS //

class Ropa{
    constructor(prenda, precio, disponible,stock){
        this.prenda = prenda;
        this.precio = precio;
        this.disponible = disponible;
        this.stock = stock;
    }
    agregar(){
        if(this.disponible == true){
            alert("Esta prenda ya se encuentra disponible")
        }
        else{
            this.disponible = true;
            alert("La prenda ahora esta disponible")
        }
    }
    quitar(){
        if(this.disponible == false){
            alert("No se encuentra stock")
        }
        else{
            this.disponible = false;
            alert("Esta prenda ahora no se encuentra disponible")
        }
    }
    vender(){
        
    }
}

let remera0 = new Ropa("remera0",1900,true,3)
let remera1 = new Ropa("remera1",2300,true,2)
let buzo0 = new Ropa("buzo0",2950,true,1)
let remera2 = new Ropa("remera2",1900,true,6)
let remera3 = new Ropa("remera3",2500,false,0)
let remera4 = new Ropa("remera4",2500,true,5)

const prendas = []
prendas.push(remera0,remera1,buzo0,remera2,remera3,remera4)

function FiltrarPrecio (){
    let entrada = parseInt(prompt("Ingresa cuanto es el maximo que queres gastar"))
    let precio = prendas.filter(el =>el.precio < entrada)
    console.log(precio)
}

function AgregarCarrito (){
    let seleccionCarrito = [];
    let temporal = "";
    let entrada = prompt("Ingresa que prenda queres agregar al carrito")
    while(entrada != "esc"){
        temporal = prendas.find(el => el.prenda == entrada)
        seleccionCarrito.push(temporal)
        entrada = prompt("Ingresa que prenda queres agregar al carrito")
    }
    console.log(seleccionCarrito)
}


AgregarCarrito();
