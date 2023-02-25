/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
txtIdLargo
txtIdAncho
txtIdRadio
*/

// Leon Rodriguez DIV Z Grupo 1
// TP 2

function Rectangulo() {
  let ancho;
  let largo;
  let perimetro;
  let cantidadAlambre;

  ancho = document.getElementById("txtIdAncho").value;
  largo = document.getElementById("txtIdLargo").value;
  ancho = parseFloat(ancho);
  largo = parseFloat(largo);

  perimetro = (ancho + largo) * 2;
  cantidadAlambre = perimetro * 3;

  alert(`Se debe comprar ${cantidadAlambre} metros de alambre`);
}
function Circulo() {
  let radio;
  let perimetro;
  let cantidadAlambre;

  radio = document.getElementById("txtIdRadio").value;
  radio = parseFloat(radio);

  perimetro = radio * 2 * Math.PI;

  cantidadAlambre = perimetro * 3;

  alert(`Se debe comprar ${cantidadAlambre}`);
}
function Materiales() {
  let ancho;
  let largo;
  let area;
  let cantidadCal;
  let cantidadCemento;

  ancho = document.getElementById("txtIdAncho").value;
  largo = document.getElementById("txtIdLargo").value;
  ancho = parseFloat(ancho);
  largo = parseFloat(largo);

  area = largo * ancho;

  cantidadCal = area * 3;
  cantidadCemento = area * 2;

  alert(
    `La cantidad de bolsas de cal son ${cantidadCal}\nLa cantidad de bolas de cemento son ${cantidadCemento}`
  );
}
