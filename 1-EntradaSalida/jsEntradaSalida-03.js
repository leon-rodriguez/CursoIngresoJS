/******************************************************************************
 * Apellido: rodriguez
 * Nombre: leon
 * Comisión: div z
 * Tutor: thiago
 
Ejercicio 3

Una fabrica de muebles nos pide realizar una app para gestionar sus productos. 
El programa pide dar de alta cada venta realizada (Cada venta representa un mueble 
en particular, con los atributos definidos mas abajo).

Se debe ingresar en cada venta.
-Nombre del mueble
-Material del mueble (Madera, Metal y Vidrio)
-Peso
-Altura
-Anchura 
-Precio

Debido a la tala excesiva de árboles el gobierno pone un impuesto del 15% ante la compra de 
muebles de madera.
Los muebles de vidrio o metal tienen un 10% de descuento.

Se pide

a)Precio promedio por mueble vendido
b)Cantidad total de muebles de madera
c)El mueble de metal más alto 
d)El mueble más liviano
e)Porcentaje de muebles de cada tipo de material
f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)
g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos)

NOTA: Los precios no podran ser cero ni negativo.


*******************************************************************************/

function mostrar() {
  let nombreIngresado;
  let materialIngresado;
  let pesoIngresado;
  let alturaIngresada;
  let anchuraIngresada;
  let precioIngresado;
  let respuesta;
  let promedioPrecio;
  let acumuladorPrecio;
  let cantidadMuebles;
  let cantidadMueblesMadera;
  let cantidadMueblesMEtal;
  let cantidadMueblesVidrio;
  let banderaMuebleMasAlto;
  let muebleMetalMasALto;
  let nombreMuebleMAsAlto;
  let muebleMAsLiviano;
  let banderaMuebleMAsLiviano;
  let nombreMuebleMAsliviano;
  let porcentajeMEtal;
  let porcentajeMAdera;
  let porcentajeVidrio;
  let acumuladorPRecioImpuestoMAdera;

  banderaMuebleMAsLiviano = true;
  banderaMuebleMasAlto = true;
  muebleMetalMasALto = 0;
  acumuladorPrecio = 0;
  cantidadMuebles = 0;
  cantidadMueblesMadera = 0;
  cantidadMueblesMEtal = 0;
  cantidadMueblesVidrio = 0;
  acumuladorPRecioImpuestoMAdera = 0;

  do {
    nombreIngresado = prompt('ingrese el nombre');
    do {
      materialIngresado = prompt('el material, metal madera o vidrio');
    } while (
      materialIngresado != 'metal' &&
      materialIngresado != 'vidrio' &&
      materialIngresado != 'madera'
    );

    pesoIngresado = prompt('ingrese el peso');
    pesoIngresado = parseInt(pesoIngresado);

    alturaIngresada = prompt('ingrese la altura');
    alturaIngresada = parseInt(alturaIngresada);

    anchuraIngresada = prompt('ingrese la anchura');
    anchuraIngresada = parseInt(anchuraIngresada);

    do {
      precioIngresado = prompt('ingrese el precio');
      precioIngresado = parseInt(precioIngresado);
    } while (precioIngresado < 1);
    cantidadMuebles += 1;
    acumuladorPrecio += precioIngresado;

    switch (materialIngresado) {
      case 'madera':
        cantidadMueblesMadera += 1;
        acumuladorPRecioImpuestoMAdera =
          precioIngresado + (precioIngresado / 100) * 115;
        break;

      case 'metal':
        cantidadMueblesMEtal += 1;
        if (alturaIngresada > muebleMetalMasALto || banderaMuebleMasAlto) {
          muebleMetalMasALto = alturaIngresada;
          banderaMuebleMasAlto = false;
          nombreMuebleMAsAlto = nombreIngresado;
        }
        break;
      default:
        cantidadMueblesVidrio += 1;
    }

    if (muebleMAsLiviano > pesoIngresado || banderaMuebleMAsLiviano) {
      banderaMuebleMAsLiviano = false;
      muebleMAsLiviano = pesoIngresado;
      nombreMuebleMAsliviano = nombreIngresado;
    }
    respuesta = confirm('queres eguir ingresando datos');
  } while (respuesta);

  promedioPrecio = acumuladorPrecio / cantidadMuebles;

  porcentajeMEtal = (100 * cantidadMueblesMEtal) / cantidadMuebles;
  porcentajeMAdera = (100 * cantidadMueblesMadera) / cantidadMuebles;
  porcentajeVidrio = (100 * cantidadMueblesVidrio) / cantidadMuebles;

  document.write(
    `el promedio de precio es ${promedioPrecio}<br> cantidad muebles madera: ${cantidadMueblesMadera}<br>el mueble mas alto de metal es ${nombreMuebleMAsAlto}<br>el mueble mas liviano es ${nombreMuebleMAsliviano}<br> porcentaje de madera ${porcentajeMAdera} porcentaje de vidrio ${porcentajeVidrio} porcentaje de metal ${porcentajeMEtal}<br> precio bruto ${acumuladorPrecio}<br>precio de muebles de madera ${acumuladorPRecioImpuestoMAdera}`
  );
}
