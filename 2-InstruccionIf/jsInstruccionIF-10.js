//Leon Rodriguez DIV Z Grupo 1
// ejercicio 10

function mostrar() {
  let numeroAleatorio;
  let mensaje;

  mensaje = "Vamos, la proxima se puede";
  numeroAleatorio = Math.floor(Math.random() * 10 + 1);

  if (numeroAleatorio > 8) {
    mensaje = "EXCELENTE";
  } else {
    if (numeroAleatorio > 4) {
      mensaje = "APROBÓ";
    }
  }
  alert(mensaje + " " + numeroAleatorio);
} //FIN DE LA FUNCIÓN
