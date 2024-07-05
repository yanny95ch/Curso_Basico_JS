/* clase: Es como un molde que vamos a construir para poder crear nuevos objetos;  es como una funcion constructora pero con diferente sintaxis

palabra reservada class

*/

class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola mi nombre  es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const persona1 = new Persona ('Mariana', 25);

persona1.saludar();
