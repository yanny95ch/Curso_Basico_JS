//Methods that DO NOT modify the origina array (Inmutability)

// Method concat()

const morseCode1 = ['....', '---'] //H O 
const morseCode2 = ['.-..','.-'] // L A
// Combite with concat() . way 1

const moreCodeMessage = morseCode1.concat(morseCode2)
console.log(morseCode1);
console.log(morseCode2);
console.log(moreCodeMessage);

// Combite with concat() . way 2

const moreCodeMessage2 = [].concat( morseCode1,morseCode2)

console.log(moreCodeMessage2);

//Combite with Spread Operator 

function combiteMorseMessages (morseCode1, morseCode2) {
    console.log([...morseCode1, ...morseCode2]);

}
combiteMorseMessages(morseCode1,morseCode2)

const numbers = [1, 2, 3, 4]
const string = 'string' 

combiteMorseMessages(numbers, string)

// Method Join()

 const moreCodeMessageString = moreCodeMessage.join('')

 
 console.log(moreCodeMessageString);