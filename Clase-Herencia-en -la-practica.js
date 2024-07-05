/* La propedad prototipo solo existe en Clases y Funciones Constructoras

prototype
*/

class Animal {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirsonido(){
        console.log('El animal emite un sonido');
    }

}
class Perro extends Animal {
    constructor(nombre,tipo,raza){
        super(nombre, tipo)
        this.raza= raza
    }
    emitirsonido(){
        console.log('El perro ladra');
    }
    correr(){
        console.log(`${this.nombre} corre alegremente`);
    }

}

const perro1= new Perro ('Lupi', 'Perro', 'Danes')

console.log(perro1);
perro1.correr();
perro1.emitirsonido();