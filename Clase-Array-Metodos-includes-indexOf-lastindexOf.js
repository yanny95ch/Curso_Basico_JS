//includes() : saber si hay un emelento que se inclute en el array ; si lo incluye da true y si no nos da flase

const number = [ 1,2,3,4,5];
const result = number.includes(3)
const result1 = number.includes(8)

console.log(number);
console.log(result);
console.log(result1);


//indexOf() indice(Posicion) de valor determinado; primer indice y retorna -1 si no lo encuentra

const fruits = [ 'apple', 'cherry', 'grape', 'mango'];
const index1 = fruits.indexOf('grape')
const index2 = fruits.indexOf('banano')

console.log(index1);
console.log(index2);

//lastindexOf()

const numberAgain = [2, 4, 6, 8, 10, 8]
const lastIndex1 = numberAgain.lastIndexOf(8);

console.log(lastIndex1);

const lastIndex2 = numberAgain.lastIndexOf(3);
console.log(lastIndex2);
