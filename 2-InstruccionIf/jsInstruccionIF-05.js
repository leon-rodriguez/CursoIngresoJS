// Leon Rodriguez DIV Z Grupo 1
// Ejercicio 05

function mostrar() {
  //tomo la edad
  let edad;
  edad = document.getElementById("txtIdEdad").value;
  edad = parseInt(edad);
  if (edad < 13 || edad > 17) {
    alert("La persona no es adolescente");
  }
} //FIN DE LA FUNCIÓN
