
let cantVueltas = prompt("Ingresar la cantidad de numeros: ")

for (let i = 0; i <= cantVueltas; i++){
    let numeroAPedir = parseInt(prompt("Ingrese un numero: "))
    console.log("su numero es: " + numeroAPedir)
    x =  i * 2
    console.log("numero a sumarle: " + x)
    suma = numeroAPedir + x
    console.log("resultado final: " + suma)
}