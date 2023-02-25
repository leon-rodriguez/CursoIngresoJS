// leon rodriguez grupo 1 div z
// ejercicio 09 while

function mostrar() {
  // declarar variables
  let banderaDelPrimero;
  let numeroIngresado;
  let numeroMaximo;
  let numeroMinimo;
  let respuesta;

  numeroMaximo = 0;
  numeroMinimo = 0;
  banderaDelPrimero = true;

  do {
    numeroIngresado = prompt("ingresa un numero");
    numeroIngresado = parseInt(numeroIngresado);

    if (!banderaDelPrimero) {
      if (numeroIngresado < numeroMinimo) {
        numeroMinimo = numeroIngresado;
      } else {
        if (numeroIngresado > numeroMaximo) {
          numeroMaximo = numeroIngresado;
        }
      }
    } else {
      console.log("a");
      numeroMaximo = numeroIngresado;
      numeroMinimo = numeroIngresado;
      banderaDelPrimero = false;
    }

    respuesta = confirm();
  } while (respuesta);

  txtIdMaximo.value = numeroMaximo;
  txtIdMinimo.value = numeroMinimo;
} //FIN DE LA FUNCIÓN
