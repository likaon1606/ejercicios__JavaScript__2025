// Ejercicio 1: Motor de Decisión Simple
// Crea una función llamada decidirAccion que reciba dos parámetros:

// Un clima (puede ser "soleado", "lluvioso", "nublado").
// Una temperatura en grados Celsius.
// La función debe devolver una acción basada en estas reglas:

// Si está soleado y la temperatura es mayor a 25°C, devuelve "Ir a la playa".
// Si está lluvioso, devuelve "Llevar paraguas".
// Si está nublado y la temperatura es menor o igual a 20°C, devuelve "Tomar un café caliente".
// En cualquier otro caso, devuelve "Salir a pasear".

function decidirAccion(clima, temperatura) {
  if(clima === "soleado" && temperatura > 25) {
    return "Ir a la playa";
  }
  else if(clima === "lluvioso") {
    return "Llevar paraguas";
  }
  else if(clima === "nublado" && temperatura <= 20) {
    return "Tomar un café caliente";
  }
  else {
    return "Salir a pasear";
  }
}



console.log(decidirAccion("soleado", 30)); // "Ir a la playa"
console.log(decidirAccion("lluvioso", 18)); // "Llevar paraguas"
console.log(decidirAccion("nublado", 15)); // "Tomar un café caliente"
console.log(decidirAccion("soleado", 22)); // "Salir a pasear"