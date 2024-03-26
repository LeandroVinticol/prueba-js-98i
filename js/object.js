//OBJETO Math
const redondeado = Math.round(5.5);
console.log(redondeado);

const minimo = Math.floor(5.999999);
console.log(minimo);

const maximo = Math.ceil(5.000001);
console.log(maximo);


//numero aleatorio entre 0 y 1
const miNumero = Math.random();
console.log(miNumero);

//exponente
const resultado = Math.pow(2,5);
console.log(resultado);

//raiz cuadrada
const resultado1 = Math.sqrt(64);
console.log(resultado1);

//valor absoluto
const resultado2 = Math.abs(-81.5);
console.log(resultado2);

//minimo
const min = Math.min(1,2,3,4,5);
console.log(min);

//maximo
const max = Math.max(1,2,3,4,5);
console.log(max);

//OBJETO String
const cadena = '       Este es un texto lol xd'

console.log(cadena.length);
console.log(cadena.toUpperCase(cadena));
console.log(cadena.toLowerCase(cadena));
console.log(cadena.slice(5,-5));
console.log(cadena.concat('hola'));
console.log(cadena.trim());
console.log(cadena.charAt(7));
console.log(cadena.at(-1));
console.log(cadena.split(' '));
console.log(cadena.replace('un','el'));
console.log(cadena.startsWith('este'));