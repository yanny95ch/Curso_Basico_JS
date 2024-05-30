//tipo de dato Primitivo -Inmutable

let numero =23
numero= numero +10
console.log(numero);

let esVerdadero = true
esVerdadero =false
console.log(esVerdadero);

//Tipo de datos complejo-Mutable

let usuario = {nombre:'Lulito', edad:15}
usuario.edad =20;
console.log(usuario);

let frutas = ['manzana', 'pera', 'uva']
frutas[0] = 'sandia'
console.log(frutas);

function cambiarNombre(objeto) {
    objeto.nombre = 'Nuevo nombre'
}
    
    let persona = {nombre: 'Antonio'}
    console.log((persona) );
