// Leon Rodriguez DIV Z Grupo 1
//Ejercicio while 03

function mostrar() {
  let claveIngresada;
  let claveReal;

  claveReal = "utn750";
  claveIngresada = prompt("ingrese el número clave.");

  while (claveIngresada != claveReal) {
    claveIngresada = prompt("ingrese el número clave.");
  }
  alert("acertaste la clave");
} //FIN DE LA FUNCIÓN
