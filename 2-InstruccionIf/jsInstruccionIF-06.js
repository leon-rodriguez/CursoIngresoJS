//Leon Rodriguez DIV Z Grupo 1
// ejercicio 06

function mostrar() {
  let edad;
  let mensaje;

  edad = document.getElementById("txtIdEdad").value;
  edad = parseInt(edad);
  mensaje = "La persona es mayor";

  if (edad < 18 && edad > 12) {
    mensaje = "La persona es adolescente";
  }
  if (edad < 13) {
    mensaje = "La persona es un niño";
  }
  //tomo la edad
  alert(mensaje);
} //FIN DE LA FUNCIÓN
