//1. Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje

//1- Pedir un número (y parsearlo)
const edad = parseInt(prompt("Ingresá tu edad"));

//2- Validar que la entrada sea un número
//NaN !== NaN

if (isNaN(edad)) {
  console.log("No es un número");
} else {
  //3- Si es un número, verificar si es legal
  if (edad >= 0 && edad < 100) {
    //edad en el rango valido
    if (edad >= 18) {
      console.log("Puede conducir y embriagarse");
    } else {
      console.log("No puede tomar, salí de acá");
    }
  } else {
    //edad en el rango invalido
    console.log("Edad en rango erroneo");
  }
}

//     if(edad < 0){
//         console.log('No es un número válido')
//     } else if(edad > 100) {
//         console.log('Vuelva a la tumba')
//     }else if(edad >= 18){
//     console.log('Puede conducir y embriagarse');
//     }else{
//     console.log('No puede tomar, salí de acá');
// }
