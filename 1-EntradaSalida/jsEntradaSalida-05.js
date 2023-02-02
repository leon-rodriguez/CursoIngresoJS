/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

// Leon Rodriguez DIV Z Grupo 1
// Ejercicio 05

function mostrar() {
  let nombre = document.getElementById("txtIdNombre").value;
  let edad = document.getElementById("txtIdEdad").value;

  alert(`Usted se llama ${nombre} y tiene ${edad} años`);
}
