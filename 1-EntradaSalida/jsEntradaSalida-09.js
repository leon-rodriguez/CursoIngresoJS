/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

// Leon Rodriguez DIV Z Grupo 1
// Ejercicio 09

function mostrarAumento() {
  let sueldo;
  sueldo = document.getElementById("txtIdSueldo").value;
  sueldo = parseInt(sueldo);

  let porcentaje;
  porcentaje = (sueldo / 100) * 10;

  let resultado;
  resultado = sueldo + porcentaje;

  document.getElementById("txtIdResultado").value = resultado;
}
