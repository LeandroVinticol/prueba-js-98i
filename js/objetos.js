const persona = {
  //Propiedades
  nombre: "Pepe",
  edad: 22,
  estaCasado: true,
  idiomas: ["Español", "Inglés"],
  direccion: {
    calle: "Av. Aconquija",
    numero: 123,
    ciudad: "Yerba Buena",
    pais: "Argentina",
  },

  //Metodos
  presentarse: function () {
    console.log(`Hola! Soy ${this.nombre}, tengo ${this.edad} años`);
  },
  crecer: function () {
    this.edad++;
    console.log(`Crecí! Tengo ${this.edad} años`);
  },
};

console.log(persona);
persona.presentarse();
persona.crecer();
persona.apellido = "Juarez";

console.log(persona);

const nombrePropiedad = "nombre";
console.log(persona[nombrePropiedad]);
