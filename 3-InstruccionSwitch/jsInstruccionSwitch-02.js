//Leon Rodriguez DIV Z Grupo 1
//ejercicio 02 switch

function mostrar() {
  //tomo el mes
  let mesDelAño = txtIdMes.value;
  let mensaje;
  switch (mesDelAño) {
    case "Julio":
    case "Agosto":
      mensaje = "Abrigate que hace frio";
      break;
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Mayo":
    case "Junio":
      mensaje = "Falta para el invierno";
      break;
    default:
      mensaje = "Ya pasamos el frio, ahora calor!!!.";
      break;
  }

  alert(mensaje);
} //FIN DE LA FUNCIÓN
