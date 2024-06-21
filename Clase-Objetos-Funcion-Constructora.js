/*
let persona = {
    nombre: 'Yani',
    apellido: 'Chantre',
    edad: 29
}
    */
// Nombre del Objeto inicia con Mayuscula 

function Persona (nombre, apellido,  edad) {
    this.nombre  = nombre;
    this.apellido = apellido;
    this.edad = edad

}

const persona1 = new Persona ('Juna', 'Perez', 20)
console.log(persona1);
persona1.nacionalidad = 'Coreano';
console.log(persona1);

const persona2 = new Persona ('Lulito', 'El Pachoncito', 3)
console.log(persona2);


Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

persona1.saludar();
persona2.saludar();
 

