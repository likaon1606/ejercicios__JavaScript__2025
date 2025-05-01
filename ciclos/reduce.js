//? 🧠 ¿Qué es reduce()?
//* reduce() es un método de los arrays en JavaScript que te permite reducir (combinar) todos los elementos del array en un solo valor. Por ejemplo: sumar todos los elementos de un array, multiplicarlos, unir strings, agrupar datos, etc.
//* Se recorre el array elemento por elemento y se va acumulando un valor con cada iteración.

//* 🧪 Sintaxis:

// array.reduce((acumulador, elementoActual, índice, arrayOriginal) => {
  // lógica de acumulación
//   return nuevoAcumulador;
// }, valorInicial);

// acumulador: lo que se va "guardando" en cada paso.

// elementoActual: el valor del elemento actual del array.

// valorInicial: valor con el que inicia el acumulador (si no lo das, será el primer elemento del array y el bucle empieza desde el segundo).

//*🧪 Ejemplo:
// const numeros = [1, 2, 3, 4, 5];

// const suma = numeros.reduce((acum, num) => {
//   return acum + num;
// }, 0);

// console.log(suma); // resultado 15

//*************** 🧪 EJERCICIOS .reduce() ****************************************************************

// 1.- * Suma todos los números del array.
const numeros = [5, 10, 15];
// Resultado esperado: 30

const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma);


// 2.- * Calcula el total del carrito de compras.
const carrito = [
  { producto: 'Laptop', precio: 1000 },
  { producto: 'Mouse', precio: 50 },
  { producto: 'Teclado', precio: 80 }
];
// Resultado esperado: 1130

const totalCar = carrito.reduce((acc, prod) => acc + prod.precio, 0)
console.log(totalCar);


// 3.- * Cuenta cuántas veces aparece cada fruta en el array.
const frutas = ['manzana', 'banana', 'manzana', 'pera', 'banana', 'manzana'];
// Resultado esperado:
// { manzana: 3, banana: 2, pera: 1 }

const contFruits = frutas.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1
  return acc
}, {})
console.log(contFruits);

// 4.- * Agrupar productos por categoría
const productos = [
  { nombre: 'TV', categoria: 'Electrónica' },
  { nombre: 'Sofá', categoria: 'Muebles' },
  { nombre: 'Laptop', categoria: 'Electrónica' },
  { nombre: 'Mesa', categoria: 'Muebles' }
];

const agrupados = productos.reduce((acc, producto) => {
  const categoria = producto.categoria;
  if (!acc[categoria]) {
    acc[categoria] = [];
  }
  acc[categoria].push(producto);
  return acc;
}, {});

console.log(agrupados);


// 5.- * Calcular el promedio de los números en el array
const nums = [10, 20, 30, 40, 50];

const promedio = nums.reduce((acumulador, actual) => acumulador + actual, 0) / nums.length;

console.log(promedio);


// 6.- * ¿Cuál es el número más grande del array?
const numms = [10, 25, 3, 99, 42];

const max = numms.reduce((mayor, actual) => {
  return actual > mayor ? actual : mayor;
});

console.log(max);


// 7.- * Une todos los strings del array en una sola frase.
const palabras = ['Hola', 'cómo', 'estás', '?'];
// Resultado esperado: "Hola cómo estás ?"

const unirWords = palabras.reduce((acc, palabra) => {
  return acc + ' ' + palabra
})
console.log(unirWords);

