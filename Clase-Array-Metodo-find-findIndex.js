//Methods that iterate over an array
//Methods that DO NOT modify the original array (Inmutability)

//find()

const multiple0f5 = [5, 10, 15, 20];
const firstNumberGreaterThann10 = multiple0f5.find(number => number > 10);

console.log(multiple0f5);
console.log(firstNumberGreaterThann10);

//finIndex()

const randomNumber = [6, 14, 27, 56, 40];
const indexNumber = randomNumber.findIndex(number => number > 50)

console.log(randomNumber);
console.log(indexNumber);
