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
const hobbies = 'Mis hibbies son:' .concat(hobbie1, ',',hobbie2, ',',hobbie3)
console.log(hobbies);