//leon rodriguez grupo 1 div z
// ejercicio 04 switch

function mostrar() {
  //tomo el mes
  let mesDelAño = txtIdMes.value;
  let mensaje;
  switch (mesDelAño) {
    case "Febrero":
      mensaje = "tiene 28 dias";
      break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
      mensaje = "tiene 30 dias";
      break;
    default:
      mensaje = "tiene 31 dias";
  }

  alert(mensaje);
} //FIN DE LA FUNCIÓN
