/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

// Leon Rodriguez DIV Z Grupo 1
// Ejercicio 03

function mostrar() {
  let input = document.getElementById("txtIdNombre");
  let nombreIngresado = input.value;
  alert(`EL nombre es ${nombreIngresado}`);
}
