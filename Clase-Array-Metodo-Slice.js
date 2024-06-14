//slice:  tomar una porcion del array 

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2)); // Desde la posicion 2 hasta el final
console.log(animals.slice(2 , 4)); // posicion 2 y 3
console.log(animals.slice(1, 5)) //hasta el final
console.log(animals.slice(-2))  // ocntar  desde el final hacia el inicio
console.log(animals.slice(2, -1))
console.log(animals.slice())