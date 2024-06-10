//Methods that modify the original array (mutability)

//SHIFT()
const colors = ['yellow', 'blue', 'red'];
const removeColors = colors.shift()
console.log(colors);
console.log(removeColors);


//UNSHIFT()

const newColors = colors.unshift('pink','purple')

console.log(newColors);
console.log(colors);