// Leon Rodriguez Grupo 1 DIV Z
//Ejercicio 03 switch

function mostrar() {
  //tomo el mes
  var mesDelAño = txtIdMes.value;
  let mensaje;

  switch (mesDelAño) {
    case "Febrero":
      mensaje = "Este mes no tiene más de 29 días.";
      break;

    default:
      mensaje = "Este mees tiene 30 dias o mas";
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
