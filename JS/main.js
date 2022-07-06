
// desafio complementario 1
/*
let cantVueltas = prompt("Ingresar la cantidad de numeros: ")

for (let i = 0; i <= cantVueltas; i++){
    let numeroAPedir = parseInt(prompt("Ingrese un numero: "))
    console.log("su numero es: " + numeroAPedir)
    x =  i * 2
    console.log("numero a sumarle: " + x)
    suma = numeroAPedir + x
    console.log("resultado final: " + suma)
}
*/

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
let edadPersona;
let acumEdad = 0;

for(i = 0; i < cantPersonas; i++) {
    edadPersona = Number(prompt('ingrese la edad de la persona.'));
    acumEdad = acumEdad + edadPersona;
}

let promedio = promediar(acumEdad, cantPersonas);
console.log('El promedio de edad es ' + promedio)