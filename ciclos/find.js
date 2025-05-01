//? find

//* .find() recorre un array y retorna el - primer elemento - que cumpla una condición.
//* 📌 Si ningún elemento cumple, retorna undefined.

// 1.- * Encuentra el primer número mayor a 20 en el array [3, 10, 18, 25, 40].
const numMayor = [3, 10, 18, 25, 40]

const encontrado = numMayor.find(num => num > 20)
console.log(encontrado);


// 2.- * 👉 Usa .find() para obtener el primer usuario activo.
const usuarios = [
  { nombre: 'Ana', activo: false },
  { nombre: 'Luis', activo: true },
  { nombre: 'Pedro', activo: false }
];

const usuario = usuarios.find(user => user.activo === true)
console.log(usuario);


// 3.- * Dado el array ['manzana', 'banana', 'kiwi', 'pera'], encuentra la primera palabra que tenga más de 5 letras.
const frutas = ['coco', 'manzana', 'kiwi', 'pera']

const fruits = frutas.find(word => word.length > 5)
console.log(fruits);

