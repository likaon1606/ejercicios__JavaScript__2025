//* Ejercicio: Escribe una función que reciba la edad de una persona y determine si puede votar. Si tiene menos de 18 años, debe decir "No puede votar". Si tiene entre 18 y 65, debe decir "Voto obligatorio". Si tiene más de 65, debe decir "Voto opcional".

function age(years) {

  if(years >= 18 && years <= 65) {
    console.log("Voto obigatorio");
  } 

  else if(years < 18){
    console.log("No puede votar");
  }
  else if(years > 65) {
    console.log("Voto opcional");
  } 

}

age(17);

function edad(años) {

  switch (true) {
    case años < 18:
      console.log("No puede votar");
      break;

    case años >= 18 && años <= 65:
      console.log("Voto obigatorio");
      break;

    case años > 65:
      console.log("Voto opcional");
      break;
  

  }

}

edad(23);
