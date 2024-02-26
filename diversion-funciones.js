/* Instrucciones 

Creá diferentes funciones, tanto funciones que devuelvan algo
como funciones que no devuelvan nada */

// mostrar texto en consola

let texto = "my text"
function mytext(){
    console.log(texto)
}
mytext()

// doble de un número 

const x = function(y){
    return y * 2 
}

const doble = x(10); 
console.log(doble)

// no hace nada 

function nada( ) {
    console.log("algo")
}