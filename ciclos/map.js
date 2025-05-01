//? map

//* .map() también recorre un array, pero retorna un nuevo array con los resultados de aplicar una función a cada elemento.
//* 📌 Úsalo cuando necesites transformar los datos, no solo recorrerlos como con forEach.

// 1.- * Usa .map() para crear un nuevo array con los nombres capitalizados (primera letra en mayúscula).
const nombres = ['ana', 'juan', 'pedro'];

const nombresCapitalize = nombres.map((nombre) => nombre.charAt(0).toUpperCase() + nombre.slice(1))
console.log(nombresCapitalize);


// 2.- * Usa .map() para crear un nuevo array con la raíz cuadrada de cada número.
const numeros = [1, 4, 9];

const raices = numeros.map((numero) => Math.sqrt(numero))
console.log(raices)


// 3.- * Usa .map() para crear un nuevo array que contenga solo los precios.
const productos = [
  { nombre: 'Laptop', precio: 1000 },
  { nombre: 'Mouse', precio: 50 },
  { nombre: 'Teclado', precio: 80 }
];

const precios = productos.map((producto) => producto.precio)
console.log(precios);
