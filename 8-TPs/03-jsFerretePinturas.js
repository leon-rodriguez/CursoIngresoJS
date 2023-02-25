/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

// Leon Rodriguez DIV Z Grupo 1
// TP 3

function FahrenheitCentigrados() {
  let temperaturaFarenheit;
  let temperaturaCentigrados;

  temperaturaFarenheit = document.getElementById("txtIdTemperatura").value;
  temperaturaFarenheit = parseFloat(temperaturaFarenheit);

  temperaturaCentigrados = (temperaturaFarenheit - 32) * (5 / 9);
  alert(`La temperatura en farenheit es ${temperaturaFarenheit} °F\n
    La temperatura en centigrados es ${temperaturaCentigrados} °C`);
}

function CentigradosFahrenheit() {
  let temperaturaFarenheit;
  let temperaturaCentigrados;

  temperaturaCentigrados = document.getElementById("txtIdTemperatura").value;
  temperaturaCentigrados = parseFloat(temperaturaCentigrados);

  temperaturaFarenheit = (temperaturaCentigrados * 9) / 5 + 32;
  alert(`La temperatura en centigrados es ${temperaturaCentigrados} °C\n
      La temperatura en farenheit es ${temperaturaFarenheit} °F`);
}
