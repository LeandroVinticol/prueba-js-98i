let nombreInicial = "Lucila";
let nombres = ["Eze", "Jose", "Anabela", nombreInicial];
let edades = [26, 28, null];

console.log(nombres);
//console.log(edades);

console.log(nombres.length);
console.log(nombres[1]);


//agregar elemento al final
nombres.push("Nahuel");
//elimina ultimo elemento
nombres.pop();
//agregar elemento al inicio
nombres.unshift("Nahuel");
//elimino primer elemento
nombres.shift();

console.log(nombres);

//devuelve el numero de la posicion
let index = nombres.indexOf("Jose");
console.log(index);

//elimina o cambia elementos pasando (posicion, cantidad, reemplazo)

//let nombresEliminados = nombres.splice(1, 2);
//console.log(nombresEliminados);
nombres.splice(1, 2,"Paula", "Nahuel")
console.log(nombres);

//verificar si un elemento se encuentra en el arreglo
console.log(nombres.includes("Paula"));

//cambia el sentido del arreglo
console.log(nombres.reverse());

//une dos arreglos
console.log(nombres.concat(edades));