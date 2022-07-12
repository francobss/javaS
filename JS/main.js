
// desafio complementario 1
/*
let cantVueltas = prompt("Ingresar la cantidad de numeros: ")

for (let i = 0; i <= cantVueltas; i++){
    let numeroAPedir = parseInt(prompt("Ingrese un numero: "))
    console.log("su numero es: " + numeroAPedir)
    x =  i * 2
    console.log("numero a sumarle: " + x)
    suma = numeroAPedir + x;
    console.log("resultado final: " + suma)
}
*/
/*
// =======================================================
// Desafio 2 (clase 4) para proyecto 
function promediar(cant, div){
    let promedio = 0
    if (cant > 0 && div > 0){
        promedio = cant / div;
    }
    return promedio;
}


 // calculando edad promedio de personas ingresadas.

let cantPersonas = Number(prompt('ingrese la cantidad de personas.'))
let acumEdad = 0;

for(i = 0; i < cantPersonas; i++) {
    let edadPersona = Number(prompt('ingrese la edad de la persona.'));
    acumEdad = acumEdad + edadPersona;
}

let promedio = promediar(acumEdad, cantPersonas);
console.log('El promedio de edad es ' + promedio)
*/

// =======================================================
// Desafío: Incorporar Arrays
class persona{
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        
    }
}
class productos{
    constructor(ident, precio) {
        this.ident = ident;
        this.precio = precio;
        
    }
}

let entrada = parseInt(prompt('Ingrese su opcion.\n 1- cargar clientes.\n 2- cargar productos.\n 3- mostrar arrays.\n 4- Salir'));
let cantidad;
const listaNombres = [];
const listaProductos = [];
while(entrada != 4){
    switch(entrada){
        case 1:
            cantidad = parseInt(prompt('Ingrese la cantidad de clientes.'));
            for(i = 1; i <= cantidad; i++){
                const nombre = prompt('Ingrese el nombre.');
                const edad = prompt('Ingrese la edad.');
                listaNombres.push(new persona(nombre, edad))
            }
            break;
        case 2:
            cantidad = parseInt(prompt('Ingrese la cantidad de productos.'));
            for(i = 1; i <= cantidad; i++){
                const prod = prompt('Ingrese el producto.');
                const valor = prompt('Ingrese el valor.');
                listaProductos.push(new productos(prod, valor))
            }
        case 3:
            console.log(listaNombres)
            console.log(listaProductos)
        default:
            console.log('Opcion erronea')
            break;
    }
    entrada = parseInt(prompt('Ingrese su opcion.\n 1- cargar clientes.\n 2- cargar productos.\n 3- mostrar arrays.\n 4- Salir'));
}

if (listaNombres.length === 0 && listaProductos.length === 0){
    console.log('No has cargado ningun dato')
}
