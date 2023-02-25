function mostrar() {
  var estacionIngresada = txtIdEstacion.value;
  var destinoIngresado = txtIdDestino.value;
  let mensaje;

  switch (estacionIngresada) {
    case "Invierno":
      if (destinoIngresado == "Bariloche") {
        mensaje = "se viaja";
      } else {
        mensaje = "no se viaja";
      }
      break;
    case "Verano":
      if (
        destinoIngresado == "Mar del plata" ||
        destinoIngresado == "Cataratas"
      ) {
        mensaje = "se viaja";
      } else {
        mensaje = "no se viaja";
      }
      break;
    case "Primavera":
      if (destinoIngresado == "Bariloche") {
        mensaje = "no se viaja";
      } else {
        mensaje = "se viaja";
      }
      break;
    default:
      mensaje = "se viaja";
  }

  alert(mensaje);
} //FIN DE LA FUNCIÓN
