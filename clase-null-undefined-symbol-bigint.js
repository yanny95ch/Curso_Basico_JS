//Null
const snoopy = null;
console.log(snoopy);
console.log(typeof snoopy);

//Undefined
let name 
console.log(name);

//Symbol
const uniqueId = Symbol('id');
const symbol1 = Symbol(1);
const symbol2 = Symbol(1);
console.log(symbol1 === symbol2);

const ID = Symbol('id');
let user = {}
user[ID]='1234'
console.log(user);

//Bigint

const bigNumber = 32165465136554325154n
console.log(bigNumber);

const  numberParticlesInTheUniverse = 100000000000000n 
console.log(numberParticlesInTheUniverse);

