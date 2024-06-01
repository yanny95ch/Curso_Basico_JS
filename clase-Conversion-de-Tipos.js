//Explicit type casting

const string ='42';
const integer = parseInt(string);
console.log(integer);
console.log(typeof integer);

const stringDecimal =  '3.14';
const float = parseFloat(stringDecimal);
console.log(float);
console.log(typeof float);

const binary = '1111'
const decimal = parseInt(binary, 2);
console.log(decimal);
console.log(typeof decimal);

//Implicit type casting



const sum = '5' + 3;
console.log(sum);

const sumboolean = '3' + true
console.log(sumboolean);

const sumNumber = 2 + true;
console.log(sumNumber);

const stringValue = '10';
const numberValue = 10;
const booleanValue = true;
console.log('----------------------'); //Concatena
console.log(stringValue + stringValue ); //Concatena
console.log(stringValue + numberValue);  //Concatena
console.log(stringValue + booleanValue); //Concatena
console.log('----------------------');
console.log(numberValue + numberValue ); //Suma
console.log(numberValue + stringValue); //Concatena
console.log(numberValue + booleanValue); //Suma
console.log('----------------------');
console.log(booleanValue + booleanValue); //Suma
console.log(booleanValue + numberValue); //Suma
console.log(booleanValue + stringValue);  //Concatena

const numero = '596'
const numeroConvertido = parseInt(numero)

console.log(typeof numero);
console.log(typeof numeroConvertido);
