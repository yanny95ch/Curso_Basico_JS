//Paso por valor

let x = 1
let y = 'Hola'
let z = null

let a = x
let b = y
let c = z
 console.log(x,y,z ,a,b,c)

 a = 12
 b = 'platzi'
 c = undefined

 //Paso por referencia  en Arrays

 let frutas = ['manzana']
 frutas.push('pera')
 console.log(frutas);

 let panes =['🥐']
 let copiandePanes = panes
 panes.push('🥖')
 console.log(panes, copiandePanes);