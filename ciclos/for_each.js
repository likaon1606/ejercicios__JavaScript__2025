//? for each
//* forEach es un método de los arrays en JavaScript que ejecuta una función por cada elemento del array.
//* Es como un for simplificado para recorrer y ejecutar algo con cada elemento, pero no retorna nada.

// 1.- * Usa forEach para imprimir cada color en mayúsculas.
const colores = ['rojo', 'verde', 'azul'];

colores.forEach((color) => {
  console.log(color.toUpperCase());
})


// 2.- * Suma todos los valores del array
const valores = [5, 10, 15];

let suma = 0

valores.forEach((valor) => {
  suma += valor
})
console.log(suma);

// 3.- * Usa forEach para imprimir frases como: "Ana tiene 25 años", "Luis tiene 30 años"...
const personas = [
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Luis', edad: 30 },
  { nombre: 'Marta', edad: 20 }
];

personas.forEach((persona) => {
  console.log(`${persona.nombre} tiene ${persona.edad} años`);
})