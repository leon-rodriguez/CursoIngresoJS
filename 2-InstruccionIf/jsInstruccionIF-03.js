// Leon Rodriguez DIV Z Grupo 1
// Ejercicio 03

function mostrar() {
  let edad;
  edad = document.getElementById("txtIdEdad").value;
  edad = parseInt(edad);
  //tomo la edad
  if (edad > 17) {
    alert("La persona es mayor");
  } else {
    alert("La persona es menor");
  }
}
//FIN DE LA FUNCIÓN
