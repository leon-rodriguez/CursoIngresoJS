// // León Rodriguez Grupo 1 DIV Z
// // ejercicio  10

// function mostrar()
// {
// 	//declarar contadores y variables
// 	let respuesta;
// 	let numeroIngresado;
// 	let sumaNegativos;
// 	let sumaPositivos;
// 	let cantPositivos;
// 	let cantNegativos;
// 	let cantPares;
// 	let cantCeros;
// 	let promedioNegativos;
// 	let promedioPostivos;
// 	let diferencia;
// 	let masGrandePositivos;
// 	let masChicoNegativos;
// 	let procentajePositivos;
// 	let procentajeNegativos;

// 	sumaNegativos = 0;
// 	sumaPositivos = 0;
// 	cantPositivos = 0;
// 	cantNegativos = 0;
// 	cantPares = 0;
// 	cantCeros = 0;
// 	promedioNegativos=0;
// 	promedioPostivos=0;
// 	diferencia=0;
// 	masGrandePositivos=0;
// 	 masChicoNegativos=0;
// 	 respuesta = true;

// 	while(respuesta)
// 	{
// 		numeroIngresado = prompt("Ingrese un numero");
// 		numeroIngresado = parseInt(numeroIngresado);
// 		if(numeroIngresado > 0){
// 			if(numeroIngresado % 2 == 0){
// 				cantPares += 1;
// 			}
// 			if(numeroIngresado > masGrandePositivos){
// 				masGrandePositivos = numeroIngresado;
// 			}
// 			sumaPositivos += numeroIngresado;
// 			cantPositivos += 1;
// 		}
// 		else{
// 			if(numeroIngresado < 0){
// 				if(numeroIngresado % 2 == 0){
// 					cantPares += 1;
// 				}
// 				if(numeroIngresado < masChicoNegativos){
// 					masChicoNegativos = numeroIngresado;
// 				}
// 				sumaNegativos += numeroIngresado;
// 				cantNegativos += 1;
// 			}
// 			else{
// 				cantCeros += 1;
// 			}
// 		}
// 		console.log(numeroIngresado)
// 		respuesta=confirm("desea continuar?");
// 	}//fin del while

// 	promedioNegativos = sumaNegativos / cantNegativos;
// 	promedioPostivos = sumaPositivos / cantPositivos;
// 	promedioNegativos = promedioNegativos.toFixed(2)
// 	promedioPostivos = promedioPostivos.toFixed(2)
// 	diferencia = sumaPositivos - sumaNegativos;
// 	procentajePositivos = (cantPositivos * 100) / (cantNegativos + cantPositivos);
// 	procentajeNegativos = 100 - procentajePositivos;

// 	document.write(`La suma de negativos es: ${sumaNegativos}<br> La suma de positivos es: ${sumaPositivos}<br> La cantidad de negativos es: ${cantNegativos}<br> La cantidad de positivos es: ${cantPositivos}<br> La cantidad de ceros es: ${cantCeros}<br> La cantidad de pares es: ${cantPares}<br> Promedio positivos: ${promedioPostivos}<br> Promedio negativos: ${promedioNegativos}<br> La diferencia es: ${diferencia}<br> El mas grande de positivos es: ${masGrandePositivos}<br> El mas chico de los negativos es: ${masChicoNegativos}<br> El Porcentaje de positivos es: ${procentajePositivos}%<br> El porcentaje de negativos es: ${procentajeNegativos}%`);
// }//FIN DE LA FUNCIÓN
/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
  var acumuladorNegativos;
  var numeroIngresado;
  var acumuladorPositivos;
  var contadorPositivos;
  var contadorNegativos;
  var contadorCero;
  var contadorPares;
  var respuesta;
  var promedioPositivos;
  var promedioNegativos;
  var diferenciaAcumuladores;
  var banderaDelMenorNegativo;
  var menorNegativo;

  acumuladorNegativos = 0;
  acumuladorPositivos = 0;
  contadorPositivos = 0;
  contadorNegativos = 0;
  contadorCero = 0;
  contadorPares = 0;
  banderaDelMenorNegativo = true;
  //diferenciaAcumuladores = 0;
  //promedioPositivos = 0;
  //promedioNegativos = 0;

  do {
    numeroIngresado = prompt('Ingrese un número: ');
    numeroIngresado = parseFloat(numeroIngresado);
    while (isNaN(numeroIngresado)) {
      alert('No ingreso un numero');
      numeroIngresado = prompt('Ingrese un número: ');
      numeroIngresado = parseFloat(numeroIngresado);
    }
    if (numeroIngresado < 0) {
      acumuladorNegativos = acumuladorNegativos + numeroIngresado;
      contadorNegativos++;
      if (numeroIngresado < menorNegativo || banderaDelMenorNegativo == true) {
        menorNegativo = numeroIngresado;
        banderaDelMenorNegativo = false;
      }
    } else {
      if (numeroIngresado > 0) {
        acumuladorPositivos = acumuladorPositivos + numeroIngresado;
        contadorPositivos++;
      } else {
        if (numeroIngresado == 0) {
          contadorCero++;
        }
      }
    }
    if (numeroIngresado % 2 == 0) {
      contadorPares++;
      //alert("Es par");
    }
    respuesta = confirm('Quiere seguir ingresando números?');
  } while (respuesta);

  diferenciaAcumuladores = acumuladorPositivos + acumuladorNegativos;

  if (contadorPositivos == 0) {
    promedioPositivos = 0;
  } else {
    promedioPositivos = acumuladorPositivos / contadorPositivos;
  }
  if (contadorNegativos == 0) {
    promedioNegativos = 0;
  } else {
    promedioNegativos = acumuladorNegativos / contadorNegativos;
  }

  document.write(
    'La suma de los negativos es: ' +
      acumuladorNegativos.toFixed(2) +
      '<br>' +
      'La suma de los positivos es: ' +
      acumuladorPositivos.toFixed(2) +
      '<br>' +
      'El contador de positivos es: ' +
      contadorPositivos +
      '<br>' +
      'El contador de negativos es: ' +
      contadorNegativos +
      '<br>' +
      'El contador de ceros es: ' +
      contadorCero +
      '<br>' +
      'El contador de pares es: ' +
      contadorPares +
      '<br>' +
      'El promdedio de los positivos es: ' +
      promedioPositivos.toFixed(2) +
      '<br>' +
      'El promdedio de los negativos es: ' +
      promedioNegativos.toFixed(2) +
      '<br>' +
      'La diferencia entre positivos y negativos es: ' +
      diferenciaAcumuladores.toFixed(2) +
      '<br>'
  );
}
//FIN DE LA FUNCIÓN

/*//declarar contadores y variables 
var respuesta;
var numeroIngresado;
var sumaNegativos=0;

respuesta="si";

while(respuesta=="si")
{
	
	respuesta=prompt("desea continuar?");
}//fin del while

document.write("la suma de negativos es :"+sumaNegativos);*/
