/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

// Leon Rodriguez DIV Z Grupo 1
// TP 1

function Sumar() {
  var precioUno;
  var precioDos;
  var precioTres;
  var sumaDePrecios;

  precioUno = document.getElementById("txtIdPrecioUno").value;
  precioDos = document.getElementById("txtIdPrecioDos").value;
  precioTres = document.getElementById("txtIdPrecioTres").value;

  precioUno = parseInt(precioUno);
  precioDos = parseInt(precioDos);
  precioTres = parseInt(precioTres);

  sumaDePrecios = precioUno + precioDos + precioTres;
  alert("El resultado de la suma es:  " + sumaDePrecios);
}
function Promedio() {
  var precioUno;
  var precioDos;
  var precioTres;
  var promedioPrecios;

  precioUno = document.getElementById("txtIdPrecioUno").value;
  precioDos = document.getElementById("txtIdPrecioDos").value;
  precioTres = document.getElementById("txtIdPrecioTres").value;

  precioUno = parseInt(precioUno);
  precioDos = parseInt(precioDos);
  precioTres = parseInt(precioTres);

  promedioPrecios = (precioUno + precioDos + precioTres) / 3;
  alert("El promedio es: " + promedioPrecios);
}
function PrecioFinal() {
  var precioUno;
  var precioDos;
  var precioTres;
  var precioFinal;

  precioUno = document.getElementById("txtIdPrecioUno").value;
  precioDos = document.getElementById("txtIdPrecioDos").value;
  precioTres = document.getElementById("txtIdPrecioTres").value;

  precioUno = parseFloat(precioUno);
  precioDos = parseFloat(precioDos);
  precioTres = parseFloat(precioTres);

  precioFinal = precioUno + precioDos + precioTres;
  precioFinal = precioFinal * 1.21;

  alert("El precio final es " + precioFinal.toFixed(2));
}
