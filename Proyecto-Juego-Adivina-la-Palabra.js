/* 
Juguemos adivinar la palabra.
EL usuario tiene 3  intentos para adivinar la palabra oculta.

Requerimientos:
-El juego debe tener una palabra oculta.
-El juego debe dar una pista de la palabra.
-El usuario debe ingresar una suposicion.
-El juego debe verificar si la suposicion del usuario es correcta.
-El juego debe tener un numero limitado de intentos.
-El juego debe terminar cuando el usuario adevine la palabra o se quede sin intentos.
*/

let palabraOculta = 'javascript';
let intentos = 3;

function verificarPalabraO(suposicion , palabraOculta){
    if (suposicion.toLowerCase() === palabraOculta){
        return true;
    }
    return false;
}

function adivinaPalabra (){
    alert('Bienvenidoal juego Palabra Oculta');
    alert('Tienes 3 ntentos para adivinar la palabra');
    alert('Pista: La palabra oculta es un lenguaje de programacion');

    while (intentos>0){
        let suposicion = prompt('Adivina la palabra');

        if (verificarPalabraO(suposicion,palabraOculta)){
            alert('!Correcto : Adivinaste');
            break;
        }else{
            intentos-- ;
            if(intentos > 0){
                alert(`Incorrecto, Aun tienes ${intentos} oportunidades`);
            }else{
                alert(`Agotaste tus intentos, la palabra Oculta era ${palabraOculta}`);
            }

        }
    }
}
    

adivinaPalabra()