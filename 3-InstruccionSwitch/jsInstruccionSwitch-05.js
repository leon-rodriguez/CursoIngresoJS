//leon rodriguez grupo 1 div z
// ejercicio 05 switch

function mostrar() {
  //tomo la hora
  var horaDelDia = txtIdHora.value;
  horaDelDia = parseInt(horaDelDia);
  let mensaje;

  switch (horaDelDia) {
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      mensaje = "es de mañana";
      break;

    default:
      mensaje = "no es de mañana";
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
