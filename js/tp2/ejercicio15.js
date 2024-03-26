//15. Realiza un script que cuente el número de vocales que tiene un texto.
const texto = prompt('Ingrese texto');
let contador = 0;

for (let i = 0; i < texto.length; i++) {
  const caracter = texto.at(i).toLowerCase();
  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    caracter === "o" ||
    caracter === "u" ||
    caracter === "á" ||
    caracter === "é" ||
    caracter === "í" ||
    caracter === "ó" ||
    caracter === "ú" ||
    caracter === "ü"
  ) {
    contador ++;
  }
}

console.log(`La cantidad de vocales que tiene el texto es ${contador}`);
