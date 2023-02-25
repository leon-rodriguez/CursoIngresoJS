//Leon Rodriguez DIV Z Grupo 1
//ejercicio 01 switch

function mostrar() {
  //tomo el mes
  let mesDelAño = txtIdMes.value;
  let mensaje;
  switch (mesDelAño) {
    case "Enero":
      mensaje = "Que comiences bien el año!!";
      break;
    case "Marzo":
      mensaje = "a clases!!!.";
      break;
    case "Julio":
      mensaje = "se vienen las vacaciones";
      break;
    case "Diciembre":
      mensaje = "felices fiestas";
      break;
    default:
      mensaje = "la opcion q elegiste no tiene mensaje";
  }

  alert(mensaje);
} //FIN DE LA FUNCIÓN
