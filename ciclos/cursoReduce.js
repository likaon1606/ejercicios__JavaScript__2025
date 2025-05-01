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

//* 🧩 Lección 1: Introducción a reduce()

//TODO 🧪 Ejercicio práctico 1
// Tu objetivo es usar reduce() para obtener el total de todos los precios.
const precios = [100, 200, 300, 450];

const total = precios.reduce((acc, price) => {
  return acc + price
}, 0)
console.log('resultado ejercicio 1: ', total);


//* 🧩 Lección 2: reduce() con objetos
//* En esta lección, vamos a explorar cómo usar reduce() para trabajar con objetos. Uno de los casos comunes de uso de reduce() es para agrupar o transformar los elementos de un array en un solo objeto.

//* 🧠 ¿Qué hace reduce() con objetos?
//* Puedes usar reduce() para construir un objeto a partir de un array de elementos. Esto es útil cuando necesitas agrupar datos o transformar el array en algo más estructurado, como un objeto con claves y valores.

//? Sintáxis de Objetos
// array.reduce((acumulador, valorActual) => {
  // modificar acumulador y agregar propiedades
//   acumulador[clave] = valorActual;
//   return acumulador;
// }, {});
//* En este caso, el acumulador es un objeto vacío {} que va acumulando las claves y valores.

//* 💡 Ejemplo: Agrupar por categoría
// Imagina que tienes un array de productos con su categoría:

// const productos = [
//   { nombre: 'Camiseta', categoria: 'Ropa', precio: 30 },
//   { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
//   { nombre: 'Taza', categoria: 'Accesorios', precio: 15 },
//   { nombre: 'Gorra', categoria: 'Accesorios', precio: 25 }
// ];

//* Queremos agrupar los productos por su categoría. Usamos reduce() de la siguiente forma:

//* Usamos reduce para transformar el array `productos` en un objeto agrupado por categoría
// const agrupadosPorCategoria = productos.reduce((acum, producto) => {
  //* Verificamos si la categoría del producto actual ya existe como propiedad en el acumulador
  // if (!acum[producto.categoria]) {
    //* Si no existe, inicializamos esa categoría como un array vacío
  //   acum[producto.categoria] = [];
  // }
  //* Agregamos el producto actual al array de su categoría correspondiente
  // acum[producto.categoria].push(producto);
  //* Retornamos el acumulador actualizado para la siguiente iteración
  // return acum;
//* El valor inicial del acumulador es un objeto vacío {}
// }, {});
//* console.log(agrupadosPorCategoria);


// console.log(agrupadosPorCategoria);


//* 🧪 Ejercicio práctico 2

// Tienes un array de estudiantes, cada uno con su nombre y la calificación obtenida:
//* Tu tarea es usar reduce() para crear un objeto que agrupe a los estudiantes por calificación, es decir, que las claves sean las calificaciones y los valores sean arrays con los nombres de los estudiantes que obtuvieron esa calificación.

// Por ejemplo:
// {
//   90: ['Ana'],
//   85: ['Luis'],
//   95: ['Carlos'],
//   80: ['Laura']
// }

const estudiantes = [
  { nombre: 'Ana', calificacion: 90 },
  { nombre: 'Laura', calificacion: 80 },
  { nombre: 'Luis', calificacion: 85 },
  { nombre: 'Carlos', calificacion: 95 },
  { nombre: 'Karla', calificacion: 80 }
];

 const agrupadosPorCalificacion = estudiantes.reduce((acum, estudiante) => {
  if (!acum[estudiante.calificacion]) {
    acum[estudiante.calificacion] = [];
  }

  acum[estudiante.calificacion].push(estudiante.nombre)
  return acum
 }, {})

 console.log('Resultado ejercicio 2: ', agrupadosPorCalificacion);
 



//* 🧪 Ejercicio práctico 3

// Dado un array de objetos que representa votos en una encuesta, usa .reduce() para contar cuántos votos recibió cada opción.

//TODO 💡 Pista:
// Usa reduce con un acumulador que sea un objeto.
// Si la opción no existe, inicialízala en 1.
// Si ya existe, simplemente súmale 1.

//? salida esperada: 
// {
//   React: 3,
//   Vue: 2,
//   Angular: 1,
//   Svelte: 1
// }

const votos = [
  { opcion: 'React' },
  { opcion: 'Vue' },
  { opcion: 'React' },
  { opcion: 'Angular' },
  { opcion: 'Vue' },
  { opcion: 'React' },
  { opcion: 'Svelte' }
];

const contarVotos = votos.reduce((acum, voto) => {
  if (!acum[voto.opcion]) {
    acum[voto.opcion] = 1
  } else {
    acum[voto.opcion] += 1
  } return acum
}, {})
console.log(contarVotos);


