// leon rodriguez grupo 1 div z
// ejercicio 08 while

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
  let respuesta;
  let sumaPositivos;
  let multiplicacionNegativos;
  let numeroIngresado;

  sumaPositivos = 0;
  multiplicacionNegativos = 1;

  do {
    numeroIngresado = prompt("Ingresa un numero");
    numeroIngresado = parseInt(numeroIngresado);

    if (numeroIngresado > -1) {
      sumaPositivos += numeroIngresado;
    } else {
      multiplicacionNegativos *= numeroIngresado;
    }

    respuesta = confirm();
  } while (respuesta);

  txtIdSuma.value = sumaPositivos;
  txtIdProducto.value = multiplicacionNegativos;
} //FIN DE LA FUNCIÓN
