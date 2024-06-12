//Exersice: Fahrenheit to  Celcius conversion

const tempFahrenheit = [ 32, 68, 95, 104, 212];
const tempCelcius = tempFahrenheit.map(fahrenheit => (5/9)*(fahrenheit-32));

console.log('Temperature in Fahrenheit:', tempFahrenheit);
console.log('Temperature in Celcius:', tempCelcius);



//Exersice: sum of element in an Array

const numbers = [1, 2, 3, 4, 5];
let sum = 0

numbers.forEach(number => {
    sum +=  number
})

console.log('Array of numbers', numbers);
console.log('Sum of numbers', sum);