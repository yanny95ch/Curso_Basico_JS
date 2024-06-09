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

/*Mutabulity
Si los array son objetos ese objeto puede tener doferentes metodos, que nos van a permitir mutar o transformar el array o crear uno nuevo */

frutas.push('watermelon');
console.log(frutas);

number.push(9,8);
console.log(number);

//Immutability

const newfrutas = frutas.concat(['uva','kiwi'])
console.log(frutas);
console.log(newfrutas);

const newnumber = number.concat([100,58,23]);
console.log(number);
console.log(newnumber);

//Cheking arrays with Array.isArray()

const isArray = Array.isArray(number);
console.log(isArray);

const isArray2 = Array.isArray(frutas);
console.log(isArray2);


//Practical exercise: sum all elements of an array

    const numbersArray = [1,2,3,4,5]
    let suma=0
    let n = numbersArray.length
    for (let i=0 ; i < n ; i++){
        suma += numbersArray[i]
    }
    console.log(suma);
