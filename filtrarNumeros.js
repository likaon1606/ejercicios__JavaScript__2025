// Crea una función que reciba dos parámetros:

// Un array de números.
// Un número de referencia.
// La función debe retornar un nuevo array que contenga únicamente los números del array original que sean mayores que el número de referencia.

// Por ejemplo:

// js
// Copiar
// Editar
// filtrarNumeros([2, 5, 8, 1, 10], 5); // debería retornar [8, 10]
//* Pista: Puedes utilizar el método .filter() para resolver este ejercicio.

function filtrarNumeros(arr, num) {

  return arr.filter(item => item > num)

}

console.log(filtrarNumeros([2, 5, 8, 1, 10], 5));
 