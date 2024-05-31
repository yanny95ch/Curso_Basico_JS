//Creacion de String

const primeraOpcion = 'comillas simples';
const segundaOpcion = "comillas dobles";
const terceraOpcion =  `comillas simples`;

//1.Concatenacion: opcion +
const direccion = 'calle falsa 123'
const cuidad = 'Esperanza'
const direccionCompleta= 'Mi direccion completa es ' + direccion +cuidad;
console.log(direccionCompleta)

const direccionCompletaConEspacio= 'Mi direccion completa es ' +  ' ' +direccion + ' ' +cuidad;
console.log(direccionCompletaConEspacio)

//2.Concatenacion: Template Literal
const nombre = 'Azrieta'
const pais = '🇰🇷'

const presentasion  = `Hola soy ${nombre} de ${pais}`
console.log(presentasion);

//3.Concatenacion: join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de '
const terceraParte = '🇦🇷'

const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' 🐼 '));

//4. Concatenacion : contat()
const hobbie1 = '🚴‍♀️'
const hobbie2 = '🧘‍♀️'
const hobbie3 = '🏃‍♀️'
const hobbies = 'Mis hobbies son:' .concat(hobbie1, ', ', hobbie2, ', ', hobbie3)
console.log(hobbie1);
console.log(hobbie2);
console.log(hobbie3);
console.log(hobbies);

//Caracteres de Escape
// const whatDoIDo = 'I'm software Engineer'

//1. Escape alternativo
const escapeAlternativo = "I'm software Engineer"

//2.Barra invertida
const barraInvertida = ' I\'m software Engineer'

//3. Template Literals
const espaceComillaInvertida = `I'm software Engineer`

//Escritura de String largos

/*Cada vez que pienso en ti,
mis ojos rompen en llanto;
y muy triste me pregunto,
¿por qué te quiero tanto? */

const poema = 'Cada vez que pienso en ti,\n'+
              'mis ojos rompen en llanto;\n' +
              'y muy triste me pregunto,\n' +
              '¿por qué te quiero tanto? '
console.log(poema)

const poema2 = 'Cada vez que pienso en ti,\n\
 mis ojos rompen en llanto;\n\
y muy triste me pregunto,\n\
¿por qué te quiero tanto? '
console.log(poema)

const poema3 = `Cada vez que pienso en ti,
 mis ojos rompen en llanto;
y muy triste me pregunto,
¿por qué te quiero tanto? `
console.log(poema3)
