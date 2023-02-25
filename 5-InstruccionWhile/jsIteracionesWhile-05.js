// Leon Rodriguez DIV Z Grupo 1
//Ejercicio while 05

function mostrar() {
  var sexoIngresado;
  sexoIngresado = prompt("ingrese f ó m .");

  while (sexoIngresado != "f" && sexoIngresado != "m") {
    sexoIngresado = prompt("ingrese f ó m .");
  }

  txtIdSexo.value = sexoIngresado;
} //FIN DE LA FUNCIÓN
