//Methods that iterate over an array
//Methods that DO NOT modify the original array (Inmutability).

//filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers);
console.log(evenNumbers);

//reduce()
let accumulator =0 

const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);

console.log(numbersReduce);
console.log(sum);

//reduce()  .Caso 2

const words = ['apple', 'banana', 'hello', 'bye', 'banana','apple', 'banana', 'banana', 'hello' ];
const wordFrecuency = words.reduce((accumulator,currentvalue) => {
    if (accumulator[currentvalue]){
        accumulator[currentvalue]++  
    }else{
        accumulator[currentvalue]= 1
    }
    return accumulator
}, {})

console.log(wordFrecuency);