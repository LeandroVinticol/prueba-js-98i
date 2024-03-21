// console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10);

//1. Declarar un iterador
//2. Declarar la condición de corte
//3. Ejecutar la lógica
//4. Aumentar en 1 el iterador


//1. ESTRUCTURA WHILE
// let i = 0;  //Iterador
// let suma = 0;  //Acumulador
// while (i <= 1000) {
//   suma = suma + i;
//   i = i + 1;
// }

// console.log(suma);


//2. ESTRUCTURA FOR
// for(iterador;condición;aumento del iterador)

// let suma = 0;

// for(let i = 0; i <= 10; i++){
//     suma += i;// suma = suma + i
// }

// console.log(suma);


//3. ESTRUCTURA DO WHILE
//Muy parecida, pero se ejecuta siempre, al menos 1 vez

let i = 0;
let suma = 0;

do {
    suma += i;
    i++;
}while (i <= 1000);

console.log(suma);
