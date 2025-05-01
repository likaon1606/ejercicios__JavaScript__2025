//? FOR...OF se usa para recorrer elementos de estructuras iterables como: Arrays, Strings, Sets, Map (con ciertas condiciones)

//* A diferencia de for...in que recorre claves, for...of recorre valores directamente.

//1.- * Imprime cada letra de la palabra 'Javascript' usando for...of.

const words = 'Javascript'

for (let word of words ) {
  // console.log(word);
}

//2.- * Suma todos los elementos usando for...of
const nums = [3, 6, 9, 12]

let suma = 0

for (let numero of nums) {
  suma += numero
}
// console.log(suma);


//3.- * Crea un nuevo array de mayusculas donde guardes cada string convertido a mayúsculas (usa .toUpperCase()).
const techs = ['React', 'Node', 'MySQL', 'Sass'];

let arr = []

for (let tec of techs) {
  arr.push(tec.toUpperCase())
}
console.log(arr);



