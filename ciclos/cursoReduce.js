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


//* 🧪 Ejercicio práctico 4. Agrupar productos por rango de precio

// Objetivo: Utilizaremos reduce para agrupar productos en diferentes rangos de precios. Por ejemplo: "menos de 50", "entre 50 y 100", "más de 100".

// Imagina que tienes una lista de productos, cada uno con un nombre y un precio:
const productos = [
  { nombre: 'Camiseta', precio: 30 },
  { nombre: 'Pantalón', precio: 60 },
  { nombre: 'Zapatos', precio: 120 },
  { nombre: 'Sombrero', precio: 15 },
  { nombre: 'Chaqueta', precio: 90 },
  { nombre: 'Guantes', precio: 20 }
];

//? Objetivo del ejercicio:
// Agrupar estos productos en tres categorías de precios:
// Menos de 50
// Entre 50 y 100
// Más de 100

//TODO 💡 Pista:
// Usa reduce para iterar sobre la lista de productos.
// En cada iteración, usa una condición para decidir en qué grupo se debe incluir el producto.
// Si el grupo (rango de precio) no existe, inicialízalo.
// Agrega el nombre del producto a la lista correspondiente.

//? Resultado esperado:
// {
//   'menos de 50': [ 'Camiseta', 'Sombrero', 'Guantes' ],
//   'entre 50 y 100': [ 'Pantalón', 'Chaqueta' ],
//   'más de 100': [ 'Zapatos' ]
// }

const agruparProductos = productos.reduce((acum, producto) => {

  let clave; // Se declara vacía así o así: let clave = ''

  if (producto.precio < 50) {
    clave = 'menos de 50'
  } else if (producto.precio > 100) {
    clave = 'Más de 100'
  } else if (producto.precio <= 100) {
    clave = 'Entre 50 y 100'
  }
  
  if (!acum[clave]) {
    acum[clave] = []
  }

  acum[clave].push(producto.nombre)

  return acum;
}, {})
console.log(agruparProductos);

//* 🧪 Ejercicio práctico 5. 🧪 Caso práctico: estudiantes que aprueban o no

// Tienes un array de objetos donde cada estudiante tiene un nombre y una nota. Queremos contar cuántos aprobaron (nota ≥ 60) y cuántos no.

//? Usando reduce, devuelve un objeto que tenga la forma:

// {
//   aprobados: X,
//   reprobados: Y
// }

// Donde X es el número de estudiantes con nota ≥ 60 y Y los que tienen menos de 60.

const estudiantes2 = [
  { nombre: 'Ana', nota: 55 },
  { nombre: 'Luis', nota: 42 },
  { nombre: 'Carlos', nota: 77 },
  { nombre: 'Karla', nota: 59 },
  { nombre: 'Laura', nota: 90 },
  { nombre: 'Pedro', nota: 38 }
];

const contarEstudiantesAprobados = estudiantes2.reduce((acum, estudiante2) => {

  const clave2 = estudiante2.nota >= 60 ? 'Aprobados' : 'Reprobados'
  acum[clave2] = (acum[clave2] || 0) + 1

  return acum;
}, {})
console.log(contarEstudiantesAprobados);


//* 🧪 Ejercicio práctico 6. Calcular el promedio de calificaciones

// Tienes un array de estudiantes con sus nombres y calificaciones. Tu objetivo es usar reduce para calcular el promedio total de todas las calificaciones.

//todo 🧠 Pista:
// Debes usar reduce para sumar todas las calificaciones y luego dividir entre la cantidad de estudiantes. Recuerda: array.length te da el total.

//? 📝 Objetivo final:
// Imprimir en consola el promedio total:

const students = [
  { nombre: 'Ana', calificacion: 85 },
  { nombre: 'Luis', calificacion: 92 },
  { nombre: 'Carlos', calificacion: 78 },
  { nombre: 'Laura', calificacion: 95 }
];

const promedioCalificaciones = students.reduce((acum, student) => {    

  return acum + student.calificacion
}, 0)

const promedio = promedioCalificaciones / students.length

console.log('Promedio Total: ', promedio);

//todo SE PUEDE HACER EL PROMEDIO DENTRO DEL .reduce de la siguiente manera:

const students2 = [
  { nombre: 'Ana', calificacion: 85 },
  { nombre: 'Luis', calificacion: 92 },
  { nombre: 'Carlos', calificacion: 78 },
  { nombre: 'Laura', calificacion: 95 }
];

//* Calculamos el promedio directamente en reduce
const promedio2 = estudiantes.reduce((acum, estudiante, index, array) => {
  //* Sumamos la calificación al acumulador
  acum += estudiante.calificacion;

  //* Si es el último elemento, dividimos dentro del reduce
  if (index === array.length - 1) {
    return acum / array.length;
  }

  //* Si no es el último, seguimos sumando
  return acum;
}, 0);

console.log('Promedio Total:', promedio);



// 🧩 Ejercicio 7: Agrupar ventas por mes y calcular total

// 🎯 Objetivo:
// Usar reduce para obtener un objeto así:

//? {
//?   Enero: 350,
//?   Febrero: 550,
//?   Marzo: 100
//? }

// Cada clave representa el mes y el valor es el total vendido en ese mes.

const ventas = [
  { producto: 'Camisa', mes: 'Enero', monto: 200 },
  { producto: 'Pantalón', mes: 'Febrero', monto: 300 },
  { producto: 'Zapatos', mes: 'Enero', monto: 150 },
  { producto: 'Gorra', mes: 'Marzo', monto: 100 },
  { producto: 'Camisa', mes: 'Febrero', monto: 250 },
];

const reporteVentas = ventas.reduce((acum, venta) => {
  
  if (!acum[venta.mes]) {
    acum[venta.mes] = 0;    
  }

  acum[venta.mes] += venta.monto

  return acum;
}, {})

console.log(reporteVentas);






