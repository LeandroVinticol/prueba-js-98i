class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Agenda {
  constructor(tamañoMaximo = 10) {
    this.tamañoMaximo = tamañoMaximo;
    this.contactos = [];
  }

  añadirContacto(contacto) {
    if (this.contactos.length >= this.tamañoMaximo) {
      console.error("Cantidad maxima de contactos alcanzada");
      return;
    }
    this.contactos.push(contacto);
  }

  listarContactos() {
    console.log("Listando los contactos: ");
    let mensaje = "";
    this.contactos.forEach((contacto, index) => {
      mensaje += `${index + 1}: ${contacto.nombre} - ${contacto.telefono} \n`;
    });
    console.log(mensaje);
  }

  buscarContacto(nombre, mostrarNumero = true) {
    this.contactos.find((contactoActual) => {
      return contactoActual.nombre.trim().toLowerCase() === nombre.trim().toLowerCase();
    });

    if(mostrarNumero){
        if(contactoEncontrado){
            console.log(contactoEncontrado.telefono);
        }else {
            console.log("No se encontro el contacto");
        }
    }

    return contactoEncontrado;
  }

  existeContacto(nombre) {
    return Boolean(this.buscarContacto(nombre, false));
  }
}

const persona1 = new Contacto("Juan", 123456);
const persona2 = new Contacto("Maria", 987654);
const agenda = new Agenda(10);

agenda.añadirContacto(persona1);
agenda.añadirContacto(persona2);

agenda.listarContactos();
agenda.buscarContacto("juan");

