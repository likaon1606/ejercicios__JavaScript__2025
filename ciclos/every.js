//? .every
// 📌 ¿Qué hace?
// Verifica si todos los elementos del array cumplen con una condición.
// ➡️ Retorna true si todos cumplen, si al menos uno no cumple retorna false.

// 🧠 Sintaxis:
// array.every((elemento) => {
  // condición que deben cumplir todos
// })

//🧪 Ejemplo:
//const edades = [18, 21, 30];
//const todosMayores = edades.every(edad => edad >= 18); // true

// 1.- * ¿Todos los números son mayores a 0?
const numeros = [1, 3, 5, 10];

const mayor = numeros.every(num => num > 0)
console.log(mayor);


// 2.- *¿Todos los productos tienen stock mayor a 0?
const productos = [
  { nombre: 'Laptop', stock: 10 },
  { nombre: 'Mouse', stock: 5 },
  { nombre: 'Teclado', stock: 2 }
];

const products = productos.every(product => product.stock > 0)
console.log(products);



// 3.- * ¿Todas las palabras tienen más de 3 letras?
const palabras = ['casa', 'sol', 'luz', 'estrella'];

const words = palabras.every(word => word.length > 3)
console.log(words);

