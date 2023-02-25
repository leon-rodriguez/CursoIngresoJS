// Leon Rodriguez DIV Z Grupo 1
//Ejercicio while 04

function mostrar() {
  var numeroIngresado;
  numeroIngresado = prompt("ingrese un número entre 0 y 10.");
  while (numeroIngresado < 0 || numeroIngresado > 10) {
    numeroIngresado = prompt("ingrese un número entre 0 y 10.");
  }
  alert("listo");
} //FIN DE LA FUNCIÓN
