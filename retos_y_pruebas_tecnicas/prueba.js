
// Una lista WordFound que contiene palabras clave.
// Una cadena query que contiene una oración.

// Escribe un programa en Python que identifique y devuelva las palabras en la cadena query que también se encuentran en la lista WordFound. El programa debe devolver esas palabras en el orden en que aparecen en query, formando una cadena única.

// Por ejemplo:

// python
// Copiar código
// WordFound = ["dog", "audiobooks", "stories", "whale", "to"]
// query = "I love listening to audiobooks!"
// Resulta

let WordFound = ["dog", "audiobooks", "stories", "whale", "to"];
let query = "I love listening to audiobooks!";
let result = "";
let word = "";

// Recorremos la cadena query
for (let i = 0; i <= query.length; i++) {
    let char = query[i]?.toLowerCase(); // Convertir a minúsculas y manejar undefined
    if (char >= 'a' && char <= 'z') {
        word += char; // Formar la palabra
    } else if (word.length > 0) {
        // Verificamos si la palabra está en WordFound
        for (let j = 0; j < WordFound.length; j++) {
            if (word === WordFound[j]) {
                result += result.length === 0 ? word : " " + word; // Añadir al resultado
                break; // Salimos del bucle ya que encontramos la palabra
            }
        }
        word = ""; // Reiniciar la palabra
    }
}

console.log(result); // Resultado esperado: "to audiobooks"





