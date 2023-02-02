/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

// Leon Rodriguez DIV Z Grupo 1
// Ejercicio 04

function mostrar() {
  let nombre = prompt("Cual es tu nombre?");
  let input = document.getElementById("txtIdNombre");

  input.value = nombre;
}
