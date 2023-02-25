function mostrar() {
  var destinoIngresado = txtIdDestino.value;
  let mensaje;

  switch (destinoIngresado) {
    case "Bariloche":
      mensaje = "Oeste";
      break;
    case "Ushuaia":
      mensaje = "Sur";
      break;
    case "Cataratas":
      mensaje = "Norte";
      break;
    case "Mar del plata":
      mensaje = "Este";
  }

  alert(mensaje);
} //FIN DE LA FUNCIÓN
