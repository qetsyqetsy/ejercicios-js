/* Instrucciones

En la tarea del apartado anterior hicimos un programa 
que compara tres numeros para determinar cual es el mayor.

Ahora necesitamos poder utilizar esa lógica en diversas 
secciones de una aplicación. Para ello, necesitamos hacer un refactor del código.

Cambia el código para que toda la lógica 
este contenida en una función que permita hacer lo siguiente:

console.log(cualEsMayor(1,2,3))
*/

function mayordetres (x,y,z) {
    mayor = Math.max(x,y,z)
    return mayor 
}

console.log(mayordetres(4,5,6))



