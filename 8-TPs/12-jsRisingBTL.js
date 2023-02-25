// Leon Rodriguez Grupo 1 DIV Z
// Ejercicio integrador while

function ComenzarIngreso() {
  //definicion de variables
  let edadIngresada;
  let sexoIngresado;
  let estadoCivilIngresado;
  let sueldoIngresado;
  let legajoIngresado;
  let nacionalidadIngresada;
  let mensajeEstadoCivil;
  let mensajeNacionalidad;

  //edad ingresada
  edadIngresada = prompt("Cual es tu edad?");
  while (edadIngresada < 18 || edadIngresada > 90) {
    edadIngresada = prompt("Ingrese una edad valida");
  }
  txtIdEdad.value = edadIngresada;

  //sexo ingresado
  sexoIngresado = prompt("Cual es tu sexo?");
  while (sexoIngresado != "f" && sexoIngresado != "m") {
    sexoIngresado = prompt("Ingrese una sexo valido");
  }
  txtIdSexo.value = sexoIngresado;

  //estadoCivil ingresado
  estadoCivilIngresado = prompt("Cual es tu estado civil?");
  estadoCivilIngresado = parseInt(estadoCivilIngresado);
  while (estadoCivilIngresado < 0 || estadoCivilIngresado > 4) {
    estadoCivilIngresado = prompt("Ingrese una estado civil valido");
    estadoCivilIngresado = parseInt(estadoCivilIngresado);
  }
  switch (estadoCivilIngresado) {
    case 1:
      //console.log(1);
      mensajeEstadoCivil = "soltero";
      break;
    case 2:
      //console.log(2);
      mensajeEstadoCivil = "casado";
      break;
    case 3:
      //console.log(3);
      mensajeEstadoCivil = "divorciado";
      break;
    case 4:
      //console.log(4);
      mensajeEstadoCivil = "viudo";
  }
  txtIdEstadoCivil.value = mensajeEstadoCivil;

  //sueldo ingresado
  sueldoIngresado = prompt("Cual es tu sueldo?");
  while (sueldoIngresado < 8000) {
    sueldoIngresado = prompt("Ingrese una sueldo valido");
  }
  txtIdSueldo.value = sueldoIngresado;

  //legajo ingresado
  legajoIngresado = prompt("Cual es tu legajo?");
  legajoIngresado = parseInt(legajoIngresado);
  while (legajoIngresado < 1000 || legajoIngresado > 9999) {
    legajoIngresado = prompt("Ingrese un legajo valido");
    legajoIngresado = parseInt(legajoIngresado);
  }
  txtIdLegajo.value = legajoIngresado;

  //nacionalidad ingresada
  nacionalidadIngresada = prompt("Cual es tu nacionalidad?");
  while (
    nacionalidadIngresada != "A" &&
    nacionalidadIngresada != "E" &&
    nacionalidadIngresada != "N"
  ) {
    nacionalidadIngresada = prompt("Ingrese una nacionalidad valida");
  }
  switch (nacionalidadIngresada) {
    case "A":
      mensajeNacionalidad = "argentino";
      break;
    case "extranjero":
      break;
    case "nacionalizado":
      break;
  }
  txtIdNacionalidad.value = mensajeNacionalidad;
}
