const productos = [
    {nombre: "samsung",
     precio:1000},
    {nombre: "motorola",
     precio:900},
    {nombre: "xiaomi",
     precio:950},
    {nombre: "pocophone",
     precio:800},
    {nombre: "asus rog",
     precio:1050},
    {nombre: "iphon", 
    precio:1300}, 
];

let carrito = [ ]

let eleccion = prompt("Bienvenido a Electro*House desea comprar algun producto.")

while( eleccion != "si" && eleccion != "no"){
    alert("por favor ingresa si o no")
    eleccion =prompt("si desea comprar ingrese si o no.")
} 
if(eleccion === "si"){
    alert("Esta es, nuestra seleccion de productos.")
    let todoslosproductos = productos.map((productos) => productos.nombre + " " + productos.precio + "$" + " ");
    alert(todoslosproductos.join("-"))}
    else if ( eleccion == "no"){
        alert("gracias por su visita vuelva pronto.")
    }
while(eleccion != "no"){
    let productos = prompt ("agregar componentes al carrito.")
    let precio = 0

    if(productos == "samsung" || productos == "motorola" || productos == "xiaomi" || 
    productos == "pocophone" || productos == "asus rog" || productos == "iphon"){
        switch(productos){
            case "samsung":
                precio = 1000;
                break;
            case "motorola":
                precio = 900;
                break;    
            case "xiaomi":
                precio = 950;
                break;
            case "pocophone":
                precio = 800;
                break;
            case "asus rog":
                precio = 1050;
                break;
            case "iphon":
                precio = 1300;
                break;
                default:
                break;
        }
        let unidad = parseInt(prompt("cuantos componentes quiere agregar."))
        carrito.push({productos,unidad,precio})
        console.log(carrito)
    }
    eleccion = prompt ("desea algun otro componente? / 'si o no' ")

    while (eleccion  == "no"){
        alert ("gracias por comprar en Electro*House") 
        carrito.map((carritofin)=>{
            alert(`productos: ${carritofin.productos}, unidades: ${carritofin.unidad},sub total $  ${carritofin.unidad*carritofin.precio}`);})
        break;   
    }
}
const total = carrito.reduce ((acc,el)=> acc + el.precio * el.unidad , 0)
alert(`total de su compra: ${total} `)