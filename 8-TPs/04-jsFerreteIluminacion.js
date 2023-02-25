/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

//Leon Rodriguez DIV Z Grupo 1
//TP 4 ejercicio A

function CalcularPrecio() {
  let cantidadLamparas;
  let marca;
  let precioLampara;
  let precioFinal;

  cantidadLamparas = document.getElementById("txtIdCantidad").value;
  marca = document.getElementById("Marca").value;
  marca = parseInt(marca);
  precioLampara = 35;

  switch (marca) {
    case "ArgentinaLuz":
      if (cantidadLamparas >= 6) {
        precioFinal = cantidadLamparas * precioLampara * 0.5;
      } else {
        if (cantidadLamparas == 5) {
          precioFinal = cantidadLamparas * precioLampara * 0.6;
        } else {
          if (cantidadLamparas == 4) {
            precioFinal = cantidadLamparas * precioLampara * 0.75;
          } else {
            if (cantidadLamparas == 3) {
              precioFinal = cantidadLamparas * precioLampara * 0.85;
            }
          }
        }
      }
      break;
    case "FelipeLamparas":
      break;
    case "JeLuz":
      break;
    case "HazIluminacion":
      break;

    case "Osram":
  }
}

// let cantidadLamparas;
// let totalBruto;
// let totalPagar;
// let marca;
// let descuento;

// marca = document.getElementById("Marca").value;
// cantidadLamparas = document.getElementById("txtIdCantidad").value;
// cantidadLamparas = parseInt(cantidadLamparas);
// totalBruto = cantidadLamparas * 35;
// totalPagar = totalBruto;

// if (cantidadLamparas > 5) {
//   //totalPagar = totalBruto * 0.5;
//   descuento = 0.5;
// } else {
//   //punto b
//   if (cantidadLamparas == 5 && marca == "ArgentinaLuz") {
//     // totalPagar = totalBruto * 0.6;
//     descuento = 0.6;
//   } else {
//     if (cantidadLamparas == 5) {
//       // totalPagar = totalBruto * 0.7;
//       descuento = 0.7;
//     }
//     //punto c
//     else {
//       if (
//         cantidadLamparas == 4 &&
//         (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
//       ) {
//         descuento = 0.75;
//       } else {
//         if (cantidadLamparas == 4) {
//           descuento = 0.8;
//         }
//         //punto d
//         else {
//           if (cantidadLamparas == 3 && marca == "ArgentinaLuz") {
//             descuento = 0.85;
//           } else {
//             if (cantidadLamparas == 3 && marca == "FelipeLamparas") {
//               descuento = 0.9;
//             } else {
//               if (cantidadLamparas == 3) {
//                 descuento = 0.95;
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// totalPagar = totalPagar * descuento;
// if (totalPagar > 120) {
//   let impuesto;

//   impuesto = 0.1 * totalBruto;

//   totalPagar = totalPagar + impuesto;
//   alert(
//     `IIBB Usted pago ${totalPagar}, siendo ${impuesto} el impuesto que se pagó`
//   );
// } else {
//   document.getElementById("txtIdprecioDescuento").value = totalPagar;
// }
