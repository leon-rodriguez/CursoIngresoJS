/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

// Leon Rodriguez DIV Z Grupo 1
// Ejercicio 10

function mostrarAumento() {
  let importe;
  importe = document.getElementById("txtIdImporte").value;
  importe = parseInt(importe);

  let descuento;
  descuento = (importe / 100) * 25;

  let resultado;
  resultado = importe - descuento;

  document.getElementById("txtIdResultado").value = resultado;
}
