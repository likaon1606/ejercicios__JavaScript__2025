//? filter
//* .filter() recorre un array y retorna un nuevo array con los elementos que cumplan una condición.
//* 📌 Es como un colador: solo deja pasar los elementos que sí cumplen el criterio.

// 1.- * Filtra los números impares del array
const nums = [1, 2, 3, 4, 5, 6, 7];

const impares = nums.filter(num => ((num % 2) !== 0))
console.log(impares);


// 2.- * Filtra solo los productos con precio mayor a 100
const productos = [
  { nombre: 'TV', precio: 300 },
  { nombre: 'Mouse', precio: 25 },
  { nombre: 'Celular', precio: 500 }
];

const prodCaros = productos.filter(prod => prod.precio > 100)
console.log(prodCaros);


// 3.- * Filtra solo los strings que tengan más de 4 letras
const palabras = ['sol', 'luna', 'estrella', 'mar', 'planeta'];

const texto = palabras.filter(text => text.length > 4)
console.log(texto);
