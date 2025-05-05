//? #Prueba Técnica – Programador Junior

//TODO * Instrucciones:

// Crea una función en JavaScript que reciba como entrada una cadena compuesta únicamente por los siguientes caracteres:

//? Paréntesis: ( y )

//? Llaves: { y }

//? Corchetes: [ y ]

// Tu función deberá analizar únicamente los paréntesis (( y )) y determinar cuántos pares correctamente cerrados existen. Es decir, solo se deben contar los paréntesis que tienen apertura y cierre válidos. No se deben considerar los corchetes ni las llaves para esta lógica.

//? * Por ejemplo:

// Entrada: "(()())" → Salida esperada: 3 pares

// Entrada: "([({})])" → Salida esperada: 2 pares

// Entrada: "((())" → Salida esperada: 2 pares

// Entrada: "))(()" → Salida esperada: 1 par

//? * Condiciones:

// No uses expresiones regulares.

// Puedes usar estructuras como pilas (stacks), arreglos y bucles.

// Si lo deseas, puedes implementar una interfaz visual para probar tu solución (opcional).

// Se valorará que el código esté ordenado, comentado y bien estructurado.

//? * Objetivo:

// Demostrar que entiendes el uso de estructuras de control, manejo de strings y lógica de balanceo de símbolos.

function countParenthesis(arr) {
  const stack = []; // La pila que va a almacenar los paréntesis abiertos
  let count = 0;    // Contador de pares de paréntesis válidos

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];

    // Si es un paréntesis de apertura, lo agregamos a la pila
    if (char === '(') {
      stack.push(char);
    } 
    
    // Si es un paréntesis de cierre, intentamos emparejarlo con el de la pila
    else if (char === ')') {
      if (stack.length > 0) {
        stack.pop();  // Emparejamos el par y eliminamos el paréntesis de apertura de la pila
        count++;      // Incrementamos el contador de pares
      }
    }
  }

  return count;
}

// Ejemplo de uso
const input = ["[", "(", "(", "(", "{", "(", ")", "}", ")", "]", ")"];
const result = countParenthesis(input);
console.log(result);  // Salida: 3 (ya que hay 3 pares de paréntesis



