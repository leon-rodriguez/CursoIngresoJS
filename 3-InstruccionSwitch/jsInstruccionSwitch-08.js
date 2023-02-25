function mostrar() {
  var destinoIngresado = txtIdDestino.value;
  let mensaje;

  switch (destinoIngresado) {
    case "Bariloche":
    case "Ushuaia":
      mensaje = "Hace frio";
      break;

    default:
      mensaje = "hace calor";
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
