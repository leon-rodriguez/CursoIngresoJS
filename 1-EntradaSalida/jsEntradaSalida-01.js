/******************************************************************************
 * Apellido: Rodriguez
 * Nombre: Leon
 * Comisión: DIV Z
 * Tutor: Thiago
 * 
Ejercicio 1
La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos.



*******************************************************************************/

function mostrar() {
  let nombreIngresado;
  let nacionalidadIngresada;
  let posicionIngresada;
  let rojasRecibidasIngresadas;
  let menorCAntidadRojas;
  let golesIngresados;
  let mayorCantidadGoles;
  let nombreGoleador;
  let nombreArgentinoMenosRojas;
  let banderaRojas;
  let banderaGoleador;
  let respuesta;
  let cantidadJugadores;
  let cantidadIngleses;
  let porcentajeIngleses;

  cantidadIngleses = 0;
  porcentajeIngleses = 0;
  cantidadJugadores = 0;
  banderaGoleador = true;
  banderaRojas = true;
  do {
    nombreIngresado = prompt('Cual es el nombre del jugador');
    cantidadJugadores += 1;

    nacionalidadIngresada = prompt('Cual es la nacionalidad del jugador');

    if (
      nacionalidadIngresada == 'ingles' ||
      nacionalidadIngresada == 'inglaterra'
    ) {
      cantidadIngleses += 1;
    }

    do {
      posicionIngresada = prompt(
        'cual es la posicion del jugador (arquero, defensor, mediocampista o delantero)'
      );
    } while (
      posicionIngresada != 'arquero' &&
      posicionIngresada != 'defensor' &&
      posicionIngresada != 'mediocampista' &&
      posicionIngresada != 'delantero'
    );
    do {
      rojasRecibidasIngresadas = prompt('cuantas rojas tiene el jugador');
      rojasRecibidasIngresadas = parseInt(rojasRecibidasIngresadas);
    } while (rojasRecibidasIngresadas < 0);

    do {
      golesIngresados = prompt('cuantos goles tiene el jugador');
      golesIngresados = parseInt(golesIngresados);
    } while (golesIngresados < 0);

    if (golesIngresados > mayorCantidadGoles || banderaGoleador) {
      mayorCantidadGoles = golesIngresados;
      nombreGoleador = nombreIngresado;
      banderaGoleador = false;
    }

    if (
      (nacionalidadIngresada == 'argentina' ||
        nacionalidadIngresada == 'argentino') &&
      (rojasRecibidasIngresadas < menorCAntidadRojas || banderaRojas)
    ) {
      menorCAntidadRojas = rojasRecibidasIngresadas;
      banderaRojas = false;
      nombreArgentinoMenosRojas = nombreIngresado;
    }

    respuesta = confirm('Queres seguir ingresando?');
  } while (respuesta);

  porcentajeIngleses = (100 * cantidadIngleses) / cantidadJugadores;
  porcentajeIngleses = porcentajeIngleses.toFixed(2);

  document.write(
    `EL goleador es: ${nombreGoleador} con ${mayorCantidadGoles}<br>El jugador argentino con menos rojas es ${nombreArgentinoMenosRojas} con ${menorCAntidadRojas}<br>El porcentaje de ingleses es: %${porcentajeIngleses} habiendo ${cantidadJugadores} de jugadores y ${cantidadIngleses} de ingleses`
  );
}
