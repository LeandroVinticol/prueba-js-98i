//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

//1. Pedir la cadena de texto
//2. Verificar si es "cancelar" = null
//3. Si toco cancelar, terminar la ejecución, si no repetir hasta que toque cancelar

let chistes = "";

do {
  let texto = prompt("Ingresa tu mejor chiste");

  if (texto === null) {
    //terminar programa
    break;
  }

  chistes += `-${texto}`;

  alert(`Tu chiste fue ${texto}`);
} while (true);

alert(`Tus chistes fueron ${chistes}`);
