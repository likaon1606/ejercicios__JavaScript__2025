//? ✅ 🔁 EJEMPLOS CON FOR

//* ✅ Ejemplo 1: Sumar números de un array

const numeros = [1, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}

console.log("Suma total:", suma);

//* Explicación:
// Recorremos el array numeros con un índice i. En cada vuelta, sumamos el número actual a la variable suma.


//* ✅ Ejemplo 2: Buscar un valor en el array

const nombres = ['Luis', 'Carlos', 'Pedro', 'Ana'];
const nombreBuscado = 'Pedro';

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] === nombreBuscado) {
    console.log(`¡Encontrado! Está en la posición ${i}`);
    break;
  }
}

//* Explicación:
// Se busca un nombre específico en un array. Si lo encuentra, se imprime su índice y se rompe el ciclo con break.



//* ✅ Ejemplo 3: Filtrar números pares

const numeros2 = [3, 6, 8, 9, 12];

for (let i = 0; i < numeros2.length; i++) {
  if (numeros2[i] % 2 === 0) {
    console.log(`Par: ${numeros2[i]}`);
  }
}

//* Explicación:
// Usamos el operador % para verificar si el número es divisible entre 2 (par).



// ✅ Ejemplo 4: Invertir un array manualmente

const frutas = ['manzana', 'pera', 'uva'];
const frutasInvertidas = [];

for (let i = frutas.length - 1; i >= 0; i--) {
  frutasInvertidas.push(frutas[i]);
}

console.log(frutasInvertidas);

//* Explicación:
// Comenzamos desde el último índice del array original y agregamos los elementos al nuevo array.



// ✅ Ejemplo 5: Recorrer un array de objetos y sumar un campo

const productos = [
  { nombre: 'Laptop', precio: 1000 },
  { nombre: 'Mouse', precio: 50 },
  { nombre: 'Teclado', precio: 80 }
];

let total = 0;

for (let i = 0; i < productos.length; i++) {
  total += productos[i].precio;
}

console.log("Total a pagar:", total);

//* Explicación:
// Accedemos a cada objeto del array y sumamos el campo precio.

// ✅ Ejemplo 6 Sumar solo "manzana" y "plátano"

const articulos = [
  { nombre: 'manzana', precio: 10 },
  { nombre: 'plátano', precio: 8 },
  { nombre: 'pera', precio: 12 },
  { nombre: 'sandía', precio: 20 },
  { nombre: 'uva', precio: 15 },
  { nombre: 'melón', precio: 18 }
];

let total2 = 0;

for (let i = 0; i < articulos.length; i++) {
  if (articulos[i].nombre === 'manzana' || articulos[i].nombre === 'plátano') {
    total2 += articulos[i].precio;
  }
}

console.log("Total de manzana y plátano:", total2);

//* 🧠 Explicación:
// Se recorre el array con for.
// En cada vuelta se verifica si el nombre del artículo es "manzana" o "plátano".
// Si coincide, se suma su precio al total.



//TODO 🧩 Ejercicios con for (para que resuelvas tú):

//** */ Recorre el array que se te da  y cuenta cuántos son mayores de edad (18+).

const edades = [10, 15, 20, 25]

let mayores = 0

for(let i = 0; i < edades.length; i++) {
  if(edades[i] >= 18) {
    mayores++
  }
}
console.log(mayores, "Son mayores de edad")


//** */ Recorre el array  y crea un nuevo array con las letras en mayúscula.

const letras = ['a', 'b', 'c', 'd']

let nuevoArray = []

for(let i = 0; i < letras.length; i++) {
  let letrasMayusculas = letras[i].toUpperCase()  
  nuevoArray.push(letrasMayusculas)
  
}
console.log(nuevoArray);


//** */ Dado const numeros = [2, 4, 6, 8, 10], crea un nuevo array con los valores multiplicados por 3.

const numeros3 = [2, 4, 6, 8, 10]

let valoresMultiplicados = []

for(let i = 0; i < numeros3.length; i++) {
  let multliplicacin = numeros3[i] * 3
  valoresMultiplicados.push(multliplicacin)
}
console.log(valoresMultiplicados);


//** */ Dado un array const temperaturas = [22, 28, 18, 30], encuentra el número más alto SIN usar .max.

const temperaturas = [22, 28, 18, 30]

let maximo = temperaturas[0]

for(let i = 0; i < temperaturas.length; i++) {
  if(temperaturas[i] > maximo) {
    maximo = temperaturas[i]
  }
}

console.log(maximo);


//** */ Dado un array de objetos const empleados = [{salario: 5000}, {salario: 6000}], suma todos los salarios.

const empleados = [{salario: 5000}, {salario: 6000}]

let sumaSalarios = 0

for(let i = 0; i < empleados.length; i ++) {
  sumaSalarios += empleados[i].salario
  
}
console.log(sumaSalarios);


//** */ Dado el siguiente array de productos, Usando un ciclo for, suma solo los productos que sean "sandía" o "melón".Guarda el resultado en una variable llamada totalSandiaMelon. Imprime el total al final.

const productosVarios = [
  { nombre: 'manzana', precio: 10 },
  { nombre: 'plátano', precio: 8 },
  { nombre: 'pera', precio: 12 },
  { nombre: 'sandía', precio: 20 },
  { nombre: 'uva', precio: 15 },
  { nombre: 'melón', precio: 18 }
];

let sumaFrutas = 0

for(let i = 0; i < productosVarios.length; i++) {
  if(productosVarios[i].nombre === 'sandía' || productosVarios[i].nombre === 'melón') {
    sumaFrutas += productosVarios[i].precio
  }
}
console.log(sumaFrutas);
