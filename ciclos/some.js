//? .some

//* 📌 ¿Qué hace?
//* Verifica si al menos un elemento del array cumple con una condición.
//* ➡️ Retorna true si alguno cumple, si ninguno cumple retorna false.

//* 🧠 Sintaxis:
// array.some((elemento) => {
// condición que debe cumplir al menos uno
// })

//* 🧪 Ejemplo:
// const numeros = [1, 2, 3, 4];
// const hayPar = numeros.some(num => num % 2 === 0); // true

// 1.- * ¿Hay algún número negativo?
const numeros = [5, 10, -3, 8];

const numNegativo = numeros.some(num => -num) // se puede hacer así
const numNeg = numeros.some(num => num < 0) // O así
console.log(numNegativo);
console.log(numNeg);


// 2.- * ¿Algún usuario está activo?
const usuarios = [
  { nombre: 'Ana', activo: false },
  { nombre: 'Luis', activo: false },
  { nombre: 'Pedro', activo: true }
];

const userActive = usuarios.some(user => user.activo === true)
console.log(userActive);


// 3.- * ¿Hay alguna palabra que empiece con 'a'?
const palabras = ['sol', 'luna', 'astro', 'cielo'];

const startA = palabras.some(words => words.startsWith('a'))
console.log(startA);



