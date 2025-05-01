// ? CICLO FOR
// * El ciclo for se utiliza para repetir un bloque de código un número específico de veces.

//1.- * Imprimir los números del 1 al 5
for (i = 0; i <= 5; i++) {
  // console.log(i);
}


//2.- * Imprime todos los números del 10 al 1 (de forma descendente).
for ( i = 10; i >= 1; i--) {
  // console.log(i);
}


//3.- * Crea un array pares = [] y agrega ahí todos los números pares del 1 al 20.
let pares = [];

for (i = 1; i <= 20; i++) {
  if(i % 2 === 0) {
    pares.push(i);
  }  
}
// console.log(pares);


//4.- * Suma todos los números del array [5, 10, 3, 7, 2] usando un for.
const arr = [5, 10, 3, 7, 2]

let suma = 0

for (i = 0; i < arr.length; i++) {
  suma += arr[i]
}
console.log(suma);

