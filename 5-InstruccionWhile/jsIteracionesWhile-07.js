// leon rodriguez grupo 1 div z
// ejercicio 07 while

/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
  let contador;
  let acumulador;
  let numeroIngresado;
  let respuesta;
  let promedio;

  contador = 0;
  acumulador = 0;
  respuesta = "si";

  while (respuesta == "si") {
    numeroIngresado = prompt("Ingrese un numero");
    numeroIngresado = parseInt(numeroIngresado);

    acumulador += numeroIngresado;

    respuesta = prompt("Desea seguir usando numeros? (si o no)");
    contador += 1;
  }

  promedio = acumulador / contador;

  txtIdSuma.value = acumulador;
  txtIdPromedio.value = promedio;
} //FIN DE LA FUNCIÓN
