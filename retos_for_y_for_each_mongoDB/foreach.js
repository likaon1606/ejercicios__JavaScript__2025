//? ✅ 🔁 EJEMPLOS CON FOR EACH

//* ✅ Ejemplo 1: Imprimir todos los elementos

const colores = ['rojo', 'verde', 'azul'];

colores.forEach(color => {
  console.log(`Color: ${color}`);
});

//* Explicación:
// forEach recorre cada elemento del array y ejecuta una función por cada uno.


//* ✅ Ejemplo 2: Sumar elementos

const valores = [1, 2, 3, 4];
let total = 0;

valores.forEach(valor => {
  total += valor;
});

console.log("Total:", total);
//* Explicación:
// Sumamos los elementos del array con forEach.


//* ✅ Ejemplo 3: Imprimir índice y valor

const frutas = ['naranja', 'banana', 'sandía'];

frutas.forEach((fruta, index) => {
  console.log(`Fruta #${index + 1}: ${fruta}`);
});

//* Explicación:
// forEach permite obtener el índice como segundo parámetro.


//* ✅ Ejemplo 4: Transformar objetos

const usuarios = [
  { nombre: 'Pedro', activo: true },
  { nombre: 'Ana', activo: false }
];

usuarios.forEach(usuario => {
  if (!usuario.activo) {
    console.log(`${usuario.nombre} está inactivo`);
  }
});

//* Explicación:
// Usamos forEach para filtrar o actuar según condiciones dentro de objetos.


//* ✅ Ejemplo 5: Crear un nuevo array (no recomendado con forEach, pero posible)

const numeros = [1, 2, 3];
const alCuadrado = [];

numeros.forEach(num => {
  alCuadrado.push(num * num);
});

console.log(alCuadrado);

//* Explicación:
// Aunque map() sería más adecuado, se puede usar forEach para llenar un nuevo array.


// ✅ Ejemplo 6: Sumar solo "manzana" y "plátano"

const articulos = [
  { nombre: 'manzana', precio: 10 },
  { nombre: 'plátano', precio: 8 },
  { nombre: 'pera', precio: 12 },
  { nombre: 'sandía', precio: 20 },
  { nombre: 'uva', precio: 15 },
  { nombre: 'melón', precio: 18 }
];

let totalUnitario = 0;

articulos.forEach(articulo => {
  if (articulo.nombre === 'manzana' || articulo.nombre === 'plátano') {
    totalUnitario += articulo.precio;
  }
});

console.log("Total de manzana y plátano:", totalUnitario);

//* 🧠 Explicación:
// forEach recorre cada elemento del array articulos.
// Se evalúa si el nombre del artículo es "manzana" o "plátano".
// Si sí, se agrega su precio al total.





//TODO 🧩 Ejercicios con forEach (para que resuelvas tú):

//? Imprime “Hola” seguido de cada nombre del array ['Luis', 'Mario', 'Sofía'].

//? Dado const precios = [100, 200, 300], imprime el precio más IVA (16%).

//? Dado un array de const mascotas = ['perro', 'gato', 'loro'], imprime su nombre en mayúsculas.

//? Dado un array de objetos const productos = [{nombre: 'Libro', stock: 3}, ...], imprime solo los productos con stock menor a 5.

//? Dado const ventas = [10, 20, 15], crea un nuevo array con las ventas acumuladas (ej: [10, 30, 45]).

//? Usando el mismo el array, suma solo los productos que sean "pera" o "uva". Guarda el resultado en una variable llamada totalPeraUva. Imprime el total al final.


const productosVarios = [
  { nombre: 'manzana', precio: 10 },
  { nombre: 'plátano', precio: 8 },
  { nombre: 'pera', precio: 12 },
  { nombre: 'sandía', precio: 20 },
  { nombre: 'uva', precio: 15 },
  { nombre: 'melón', precio: 18 }
];


