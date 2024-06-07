/*
switch (experesion){
    case valor1:
        //codigo a ejecutar
        break;
    case valor2:
        //codigo a ejecutar
        break;
    case valor3:
        //codigo a ejecutar
        break;
    case valor4:
        //codigo a ejecutar
        break;
    default:
        //codigo a ejecutar
}
*/

let expr = 'Uvas'

switch (expr) {//=== Comparador estricto
    case 'Naranjas':
        console.log('Las naranjas cuestan $20 * Kilo');
        break;
    case 'Manzanas':
        console.log('Las Manzanas  cuestan $43 * Kilo');
        break;
    case 'Platanos':
        console.log('Las Platanos  cuestan $30 * Kilo');
        break;
    case 'Mangos':
    case 'Papayas':
        console.log('Los mangos y las papayas cuestan 25');
        break;
    default:
        console.log(`Lo siento no contamos con ${expr}`);

}

console.log('Hay algo mas que desees?');