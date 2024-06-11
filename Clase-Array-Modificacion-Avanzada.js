//Methods that modify the original Array (Mutability)

//1.Method Splice()
const vegetables = ['carrot', 'broccoli','spinach', 'tomato'];
const removeVegetables = vegetables.splice(2, 1, 'cucumber', 'onion');

console.log(vegetables);
console.log(removeVegetables);

const sports = ['🏄🏼‍♀️', '🏇🏽', '🚴🏼‍♀️', '💃🏼', '🏌🏼‍♀️'];
const removeSports = sports.splice(1, 2, '🏊🏽‍♀️', '🚣🏽‍♀️','🤸🏽‍♀️');

console.log(sports);
console.log(removeSports);

//Method Reverse()
const numbers =[1, 2, 3, 4, 5];
console.log(numbers);
const reverseNumber = numbers.reverse();
console.log(numbers);
console.log(reverseNumber);

//Method Sort()

const unsortNumbers1 = [4, 18, 1, 62, 34];
const unicodesortedNumbers = unsortNumbers1.sort();

console.log(unsortNumbers1);
console.log(unicodesortedNumbers);

const unsortNumbers2 = [4, 18, 1, 62, 34]
const sortedNumbers = unsortNumbers1.sort((a,b) =>  a-b)
//4-18 = -14 (Si nos )
//18-1 = 17

//Method Sort() Strings  UTF-16

const cities = [ 'New York', 'Paris', 'Tokyo', 'London'];
const sortedCities = cities.sort();

console.log(cities);
console.log(sortedCities);

//Method fill()

const ages = [21, 35, 50, 40 ]
console.log(ages.fill(0, 2 ,4));
console.log(ages.fill(15, 1));
console.log(ages.fill(15));
