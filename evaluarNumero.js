function numero(numero) {
  switch (true) {
    case numero < 0:
      console.log("Negativo");
      break;

    case numero === 0:
      console.log("Cero");
      break;

    case numero > 0:
      console.log("Positivo");
      break;    
  }
}
numero(1)