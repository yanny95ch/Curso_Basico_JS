const numeroSecreto  = Math.floor(Math.random()*10 + 1);

const numeroDelJugador = parseInt (prompt('Adivina el numero Secreto entre 1 al 10'));

console.log(`Este es el numero con el que juegas ${numeroDelJugador}`);

if (numeroDelJugador === numeroSecreto){
    console.log('Felicidades!! adivinaste el numero secreto');
}else if (numeroDelJugador < numeroSecreto){
    console.log('El numero esta por debajo del numero secreto, Intenta otra vez!');
}else{
    console.log('El numero es muy alto, Intenta otra vez!');
}