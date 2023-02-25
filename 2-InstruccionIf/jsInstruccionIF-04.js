// Leon Rodriguez DIV Z Grupo 1
// Ejercicio 04

function mostrar() {
  //tomo la edad
  let edad;
  edad = document.getElementById("txtIdEdad").value;
  edad = parseInt(edad);

  if (edad > 12 && edad < 18) {
    alert("La persona es adolescente");
  }
} //FIN DE LA FUNCIÓN
