//Encontar los indices de una subcadena, dado un array de Strin y un String Objetivo; escribir una funcion que determine si ese string objetivo esta presente en el array, si esta presente retornar el indice de la primera y la ultima ocurrencia; en otro caso retornar -1


const  stringArray = [ 'apple', 'banana', 'grape','orange','banana','kiwi'];
const  target = 'banana';

function findStringIndiceArray (array, target){
    const result = {
        includesTargetString: false,
        firstOcurrenceIndex: -1,
        lastOcurrenceIndex: -1
    }
    array.forEach((element, index) => {
        if (element.includes(target)){
            result.includesTargetString= true
            result.firstOcurrenceIndex= array.indexOf(target)
            result.lastOcurrenceIndex = array.lastIndexOf(target)
        }
    })
    return result

}

const result = findStringIndiceArray(stringArray, target);
console.log(result);