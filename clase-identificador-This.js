//Enlace Implicito o Implicit binding
const house = {
    dogName: 'Fido',
    dogGreeting: function(){
        console.log(`Hi, i'm ${this.dogName}`);
    }
}
house.dogGreeting()

//Enlace Explicito o Explicit binding
function dogGreeting(){
    console.log(`Hi, i'm ${this.dogName}`);
}
const newHouse = {
    dogName: 'Coconut',
}

dogGreeting.call(newHouse)

function newDogGreeting(owner,address){
    console.log(`Hi, i'm ${this.dogName} and I live with ${owner} on ${address}`);
}

const owner = 'Lucy'
const  address = 'Avenue 123'
newDogGreeting.call(newHouse, owner, address)


