//Crea un menú de 3 opciones

const opcion = Number(
  prompt(`Bienvenidos a mi menú
 0.Sumar
 1.Sumar
 2.Restar
 3.Dividir
 4.Salir`)
);

confirm('Confirma');

// if (opcion === 1) {
//   //Sumar
//   alert("Suma!");
// } else if (opcion === 2) {
//   //Restar
//   alert("Resta!");
// } else if (opcion === 3) {
//   //Dividir
//   alert("Dividir!");
// } else if (opcion === 4) {
//   //Salir
//   alert("Nos vemos!");
// }

switch (opcion) {
  case 0:
  case 1:
    alert("Suma!");
    break;
  case 2:
    alert("Resta!");
    break;
  case 3:
    alert("Dividir!");
    break;
  default:
    alert("Nos vemos!");
}
