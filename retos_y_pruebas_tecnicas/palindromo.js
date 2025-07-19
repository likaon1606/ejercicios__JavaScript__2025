// Dada una cadena de texto, comprobar si es un palindromo o no

let word = 'pedro'
let wordPalindromo = word.split('').reverse().join("")

if (word === wordPalindromo) {
  console.log(`${word} es un palindromo`);
} else {
  console.log(`${word} No es un palindromo`);
}



//* NO USAR FUNCIONES PROPIAS DE JS, solo con estructuras de control. Método mas complejo

function esPalindromo(palabra) {
  // dividir la cadena de texto en un array de letras
  // Invertir el array con un bucle
  // Unir todas las letras del array con un bucle y guardar resultado en una variable
  //devoler resultado

}

console.log(esPalindromo('Ariel')); // false
console.log(esPalindromo('Ana')); //true
