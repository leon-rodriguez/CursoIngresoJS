// leon rodriguez grupo 1 div z
// ejercicio 06 while

function mostrar() {
  let contador;
  let acumulador;
  let numeroIngresado;
  let promedio;

  contador = 0;
  acumulador = 0;

  while (contador < 5) {
    numeroIngresado = prompt("ingrese un numero");
    numeroIngresado = parseInt(numeroIngresado);

    acumulador += numeroIngresado;
    contador += 1;
  }

  promedio = acumulador / contador;

  txtIdSuma.value = acumulador;
  txtIdPromedio.value = promedio;
} //FIN DE LA FUNCIÓN
