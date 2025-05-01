// Paso 1: Declarar los arrays
const arr1 = [0, 10, 8, 5, 5];
const arr2 = [3, 4, 5, 4, 8];

// Paso 2: Suma índice por índice
const sumaIndicePorIndice = [];
for (let i = 0; i < arr1.length; i++) {
  sumaIndicePorIndice.push(arr1[i] + arr2[i]);
}
console.log("Suma índice por índice:", sumaIndicePorIndice);

// Paso 3: Sumar solo los valores que sean 5
const todos = arr1.concat(arr2);
const soloCincos = todos.filter(n => n === 5);
const sumaCincos = soloCincos.reduce((acc, val) => acc + val, 0);
console.log("Suma solo de los 5:", sumaCincos);
console.log("Valores sumados (solo los 5):", soloCincos);

// Paso 4: Mostrar los valores que no son 5
const noCincos = todos.filter(n => n !== 5);
console.log("Valores que no son 5:", noCincos);

// Paso 5: Mostrar pares que suman 7 (índice por índice)
const paresQueSuman7 = [];
for (let i = 0; i < arr1.length; i++) {
  const suma = arr1[i] + arr2[i];
  if (suma === 9) {
    paresQueSuman7.push([arr1[i], arr2[i]]);
  }
}
console.log("Pares que suman 7:", paresQueSuman7);
