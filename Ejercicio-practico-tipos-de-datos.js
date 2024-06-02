//Social Media Profile

//1.User information 
const username = 'codigAdventirer'
const fullname = 'Lulo Feo'
const age = 25
const isstudent = true

//2. Adress
const address = {
    street: '123 Main street',
    city: 'Techville',
    atate: 'codingland',
    zipCode: 54321

}

//3.Hobbies
 const hobbies = ['📖', '🖥️','👩‍🏫']

 //4.Generating personalized bio
 const personalizeBio = `Hi, I'm ${fullname}.
 I'm ${age} yeara old.
 I live in ${address.city}
 I love ${hobbies.join(', ')}.
 Follow me for coding adventures!`

 //5.print the user profile and bio
 console.log(personalizeBio);