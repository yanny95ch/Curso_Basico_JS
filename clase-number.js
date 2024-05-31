//1. Tipo entero y decimal
const entero = 10
const decimal = 3.14
console.log(typeof entero, typeof decimal);

//2. Notacion cientifica 
const cientifico = 5e3

//3.Infinitos y  NaN
const infinito = Infinity
const noESUnNumero = NaN

//OPERACIONES ARITMETICAS

//1.Suma, Resta, Multip[licaion, Division
const suma =  3 + 4 ;
const resta = 5 - 3;
const multiplicaion = 4 * 2 ;
const division = 8 / 2;

//2.Modulo y Exponenciacion
const modulo = 15 % 8;
const exponenciacion = 2 ** 3;

//Precision
const resultado = 0.1 + 0.2
console.log(resultado);
console.log(resultado.toFixed(1));
console.log(resultado === 0.3)

//Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-7);
const aleatorio = Math.random();
console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(aleatorio);