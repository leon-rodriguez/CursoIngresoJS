function mostrar() {
  var estacionIngresada = txtIdEstacion.value;
  var destinoIngresado = txtIdDestino.value;
  let precio;
  precio = 15000;

  switch (estacionIngresada) {
    case "Invierno":
      if (destinoIngresado == "Bariloche") {
        precio = precio * 0.2 + precio;
      } else {
        if (destinoIngresado == "Mar del plata") {
          precio = precio - precio * 0.2;
        } else {
          precio = precio - precio * 0.1;
        }
      }
      break;
    case "Verano":
      if (destinoIngresado == "Bariloche") {
        precio = precio - precio * 0.2;
      } else {
        if (destinoIngresado == "Mar del plata") {
          precio = precio + precio * 0.1;
        } else {
          precio = precio + precio * 0.1;
        }
      }
      break;
    default:
      if (destinoIngresado == "Bariloche") {
        precio = precio + precio * 0.1;
      } else {
        if (destinoIngresado == "Mar del plata") {
          precio = precio + precio * 0.1;
        } else {
          if (destinoIngresado == "Cataratas") {
            precio = precio + precio * 0.1;
          }
        }
      }
      break;
  }
  alert(precio);
} //FIN DE LA FUNCIÓN
