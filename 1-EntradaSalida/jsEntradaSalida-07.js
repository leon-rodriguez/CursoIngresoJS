/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

// Leon Rodriguez DIV Z Grupo 1
// Ejercicio 07

function sumar() {
  let num1;
  num1 = document.getElementById("txtIdNumeroUno").value;
  num1 = parseInt(num1);
  let num2;
  num2 = document.getElementById("txtIdNumeroDos").value;
  num2 = parseInt(num2);
  let suma = num1 + num2;
  alert("La suma es " + suma);
}

function restar() {
  let num1;
  num1 = document.getElementById("txtIdNumeroUno").value;
  num1 = parseInt(num1);
  let num2;
  num2 = document.getElementById("txtIdNumeroDos").value;
  num2 = parseInt(num2);
  let resta = num1 - num2;
  alert("La resta es " + resta);
}

function multiplicar() {
  let num1;
  num1 = document.getElementById("txtIdNumeroUno").value;
  num1 = parseInt(num1);
  let num2;
  num2 = document.getElementById("txtIdNumeroDos").value;
  num2 = parseInt(num2);
  let multiplciacion = num1 * num2;
  alert("La multiplicacion es " + multiplciacion);
}

function dividir() {
  let num1;
  num1 = document.getElementById("txtIdNumeroUno").value;
  num1 = parseInt(num1);
  let num2;
  num2 = document.getElementById("txtIdNumeroDos").value;
  num2 = parseInt(num2);
  let division = num1 / num2;
  alert("LA division es " + division);
}
