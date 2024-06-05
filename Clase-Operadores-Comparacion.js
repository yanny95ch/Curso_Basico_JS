/*  Operadores de Comparacion */ 

// == : En vez de asignarle valor a una variable nos ayudan a comparar si algo es igual a otra cosa, dependiendo de esto  poder continuar con el codigo.


/* === : Este operador lo que hace es que si algo es igual a otra cosa va a generar la verificacion en 2 temas:
    -Que la igualdad sea en el valor 
    -Tipo de dato
Si el valor es el mismo al igual que el tipo de dato nos va a dar el true o sino  un  false ; com lo que de igual manera podremos contnuar con el codigo*/


/* != :  Comparar si el objeto es  diferente de otro 
        Si es diferente dara true o si no nos dara un  false */


/* !== : Este valor es diferente de otro al ser diferente en en valor y el tipo de dato */ 


/* 
> Mayor
< Menor 
>=  Mayor o igual
<= Menor o igual */


const a = 10 ;
const b = 20 ; 
const c = '10';

console.log(a == b );
console.log(a ===c);
console.log(a == c);
console.log(a != b);
console.log(a !== c);
console.log(a < c);
console.log(a <= c);