//14. Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

const cadena = 'hola que tal';
let resultado = '';

for(let i = 0; i < cadena.length; i++ ){
    const caracter = cadena.at(i);
    if(i === cadena.length - 1){
        resultado += caracter;
    }else{
        resultado += caracter + '-';
    }
}

console.log(resultado);