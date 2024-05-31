//Tipo String Primitivo:

const stringPrimitivo = 'Soy un string primitivo';
console.log(typeof stringPrimitivo);

const stringPrimitivoTambien = String('Soy un string primitivo tambien')
console.log(typeof stringPrimitivoTambien);

//Tipo String Objeto:

const stringObjeto = new String('soy un string Objeto');
console.log(typeof stringObjeto);

//Acceder a caracteres:

const saludo = 'Hola. Como estas?';
console.log(saludo[2])
console.log(saludo.charAt(2));
console.log(saludo.indexOf('o'));
console.log(saludo.indexOf('Como'));
console.log(saludo.lastIndexOf('o'));
console.log(saludo.slice(3,5));
console.log(saludo.length);
console.log(saludo.toLocaleUpperCase());
console.log(saludo.toLocaleLowerCase());

const saludoDividido = saludo.split(' ')
console.log(saludoDividido);
console.log(saludoDividido[1]);

const saludosConEspacios = ' Hola Mundo '
const saludosSinEspacio = saludosConEspacios.trim()
console.log(saludosSinEspacio);
console.log(saludosConEspacios);
const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', '❤️');
console.log(nuevoSaludo);