/* How to  create an Array

1.new Array() or Array()

*/

const frutas = Array('Manzana','pera','Mango');
console.log(frutas);

const justOneNumber = Array(1)
console.log(justOneNumber); // NO se puede crear con un solo elemento 

const number = Array(1 ,2,3,4)
console.log(number);

//2. Array literal syntax

const oneNumber = [4];
console.log(oneNumber);


const emtyArray = []
    console.log(emtyArray);

const sport = [ 'soccer','tennis', 'rugby'];
console.log(sport);

const recipeIngredients = [
    'Fluor',
    true,
    100,
    {
      ingredient : 'Milk',  quantity: '1 cup'
    }, 
    false
]
console.log(recipeIngredients);

//Accessing array elements

const primeraFruta = frutas[0]
console.log(primeraFruta);
 
//length property

const numberoffrutas = frutas.length;
console.log(numberoffrutas);