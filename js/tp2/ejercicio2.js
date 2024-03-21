/*2. Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
*/
// let nota = parseInt(prompt("Ingresar calificación"));

// if (isNaN(nota)) {
//   console.log("Introduce un número válido");
// } else {
//   if (nota >= 0 && nota <= 10) {
//     if (nota <= 2) {
//       alert("Muy deficiente");
//     } else if (nota <= 4) {
//       alert("Insuficiente");
//     } else if (nota <= 6) {
//       alert("Suficiente");
//     } else if (nota === 7) {
//       alert("Bien");
//     } else if (nota <= 9) {
//       alert("Notable");
//     } else {
//       alert("Sobresaliente");
//     }
//   } else {
//     console.log("Número erroneo");
//   }
// }

let numero = 50;
let nombre = "Gabi";
let profesion = "Cocinera";

//Alt Gr + } -> Template Strings
console.log(`Hola mundo! Soy ${nombre} y tengo ${numero} años`);

// % -> Módulo = Resto de la división entera

console.log(5 / 2);
console.log(5 % 2);