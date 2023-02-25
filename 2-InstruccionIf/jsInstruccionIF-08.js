//Leon Rodriguez DIV Z Grupo 1
// ejercicio 08

function mostrar() {
  let edad;
  let estadoCivil;

  edad = document.getElementById("txtIdEdad").value;
  edad = parseInt(edad);
  estadoCivil = document.getElementById("estadoCivil").value;

  if (edad > 17 && estadoCivil == "Soltero") {
    alert("Es soltero y no es menor");
  }
} //FIN DE LA FUNCIÓN
