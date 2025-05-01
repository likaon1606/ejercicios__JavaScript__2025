//? FOR IN 
// Se usa para recorrer las propiedades (claves) de un objeto u array

//1.- * Recorre este objeto e imprime clave y valor
const coche = { marca: 'Toyota', modelo: 'Corolla', año: 2020 };

for (let clave in coche) {
  // console.log(clave);
  // console.log(coche[clave]);
}

//2.- * Dado este objeto, suma todos los valores
const gastos = { comida: 200, transporte: 100, renta: 800 };

let suma = 0

for (let clave in gastos) {
  // console.log(clave);
  // console.log(gastos[clave]);
  suma += gastos[clave] 
  // console.log('total gastos', suma);
}

//3.- * Convierte las claves de este objeto en un array
const usuario = { id: 1, username: 'devjs', activo: true };

let claves = []

for (let clave in usuario) {
  claves.push(clave)
}
console.log(claves);


