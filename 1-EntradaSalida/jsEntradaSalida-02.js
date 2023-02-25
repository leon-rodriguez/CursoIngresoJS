/******************************************************************************
 * Apellido: rodriguez
 * Nombre: leon
 * Comisión: div z
 * Tutor: thiago
 
Ejercicio 2

Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.



*******************************************************************************/

function mostrar() {
  let nombreMascota;
  let edadMascota;
  let tipoMascota;
  let pesoMascota;
  let diagnosticoMascota;
  let vacunaMascota;
  let respuesta;
  let mascotaMasVieja;
  let banderaMAscotaMasVieja;
  let nombreMascotaMasvieja;
  let cantMascParasitosSinRabica;
  let gatosProblemasDigsetivos;
  let perrosProblemasDigsetivos;
  let hamsterProblemasDigsetivos;
  let mayorCantProblemasDigestivos;
  let nombreMascotaMasJoven;
  let edadMascotaMasJoven;
  let diagnosticoMascotaMasJoven;
  let banderaMAscotaMasJoven;
  let cantidadPErrosOtitis;

  banderaMAscotaMasVieja = true;
  banderaMAscotaMasJoven = true;
  mascotaMasVieja = 0;
  cantMascParasitosSinRabica = 0;
  gatosProblemasDigsetivos = 0;
  perrosProblemasDigsetivos = 0;
  hamsterProblemasDigsetivos = 0;
  edadMascotaMasJoven = 0;
  cantidadPErrosOtitis = 0;

  do {
    nombreMascota = prompt('nombre de la mascota');

    do {
      edadMascota = prompt('edad de la mascota');
      edadMascota = parseInt(edadMascota);
    } while (edadMascota < 1 || edadMascota > 20);

    do {
      tipoMascota = prompt('tipo mascota');
    } while (
      tipoMascota != 'gato' &&
      tipoMascota != 'perro' &&
      tipoMascota != 'hamster'
    );

    do {
      pesoMascota = prompt('peso de la mascota');
      pesoMascota = parseInt(pesoMascota);
    } while (pesoMascota < 0);

    do {
      diagnosticoMascota = prompt('diagnostico de la mascota');
    } while (
      diagnosticoMascota != 'problemas digestivos' &&
      diagnosticoMascota != 'otitis' &&
      diagnosticoMascota != 'alergias en la piel' &&
      diagnosticoMascota != 'parasitos' &&
      diagnosticoMascota != 'picazon de abeja'
    );

    do {
      vacunaMascota = prompt('vacuna de la antirrabica de la mascota');
    } while (vacunaMascota != 'si' && vacunaMascota != 'no');

    if (
      vacunaMascota == 'si' &&
      (mascotaMasVieja < edadMascota || banderaMAscotaMasVieja)
    ) {
      mascotaMasVieja = edadMascota;
      nombreMascotaMasvieja = nombreMascota;
    }
    if (vacunaMascota == 'no' && diagnosticoMascota == 'parasitos') {
      cantMascParasitosSinRabica += 1;
    }
    if (diagnosticoMascota == 'problemas digestivos') {
      switch (tipoMascota) {
        case 'gato':
          gatosProblemasDigsetivos += 1;
          break;
        case 'hamster':
          hamsterProblemasDigsetivos += 1;
          break;
        default:
          perrosProblemasDigsetivos += 1;
      }
    }
    if (
      gatosProblemasDigsetivos > perrosProblemasDigsetivos &&
      gatosProblemasDigsetivos > hamsterProblemasDigsetivos
    ) {
      mayorCantProblemasDigestivos = 'gato';
    } else {
      if (
        perrosProblemasDigsetivos > gatosProblemasDigsetivos &&
        perrosProblemasDigsetivos > hamsterProblemasDigsetivos
      ) {
        mayorCantProblemasDigestivos = 'perro';
      } else {
        mayorCantProblemasDigestivos = 'hamster';
      }
    }
    if (edadMascota < edadMascotaMasJoven || banderaMAscotaMasJoven) {
      edadMascotaMasJoven = edadMascota;
      banderaMAscotaMasJoven = false;
      nombreMascotaMasJoven = nombreMascota;
      diagnosticoMascotaMasJoven = diagnosticoMascota;
    }

    if (tipoMascota == 'perro' && diagnosticoMascota == 'otitis') {
      cantidadPErrosOtitis += 1;
    }

    respuesta = confirm('quieres seguir ingresando datos?');
  } while (respuesta);
  document.write(
    `la mascota mas vieja con vacuna antirrabica es ${nombreMascotaMasvieja}<br> hay ${cantMascParasitosSinRabica} sin rabica y con parasitos<br>la mascota con mas problemas digestivos es ${mayorCantProblemasDigestivos}<br>La edad de mascota mas joven es ${edadMascotaMasJoven} diagnostico ${diagnosticoMascotaMasJoven} nombre ${nombreMascotaMasJoven}<br>cantidad de perros con otitis: ${cantidadPErrosOtitis}`
  );
}
