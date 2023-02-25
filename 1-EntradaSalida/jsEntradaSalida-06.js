/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

// Leon Rodriguez DIV Z Grupo 1
// Ejercicio 06
function sumar() {
  let num1 = document.getElementById("txtIdNumeroUno").value;
  let num2 = document.getElementById("txtIdNumeroDos").value;

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  let suma = num1 + num2;

  alert(suma);
}
