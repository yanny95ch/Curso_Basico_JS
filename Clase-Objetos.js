/*
estructura de datos que me ayuda a guardar valores de manera particular

key/value

objeto {
propiedad: valor,
propiedad: valor,
propiedad: valor 
}

*/

const persona = {
    nombre: 'Jhon',
    edad: 30,
    direccion: {
        calle: 'Avenida Insurgente 45',
        cuidad: 'CDMX'
    },
    saludar() {
        console.log(`Hola mi nombre es ${persona.nombre}`);
    }
}

console.log(persona);
console.log(persona.edad);
persona.saludar()

persona.telefono = '555-888-5600';

console.log(persona.telefono);
console.log(persona);

persona.despedir = () => {
    console.log('Adios');
}

persona.despedir();
console.log(persona);

console.log(persona.direccion.calle);

delete persona.telefono;
console.log(persona);

delete persona.despedir();
console.log(persona);

