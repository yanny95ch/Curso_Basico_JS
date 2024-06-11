//methods that iterate over an array
//methods that DO NOT modify the original array(immutability)


//Method Map()
const numbers = [ 1, 2, 3, 4, 5];
const aquaredNumbers = numbers.map(num => num *num)

console.log(numbers);
console.log(aquaredNumbers);

//Method forEach()

const colors = ['red', 'pink', 'blue'];
const iteratedColors = colors.forEach(color => console.log(color));

console.log(colors);
console.log(iteratedColors);

const numbers2 = [2, 4, 8, 5, 10];
const iteratedNumbers = numbers2.forEach(number => console.log(number));

console.log(numbers2);
console.log(iteratedNumbers);


