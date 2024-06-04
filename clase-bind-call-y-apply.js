const owner = 'Juan'
const address = 'Avenue 1234'

function dogGreeting (owner, address){
    console.log(`Hi I'm ${this.dogName} and I live with ${owner} on ${address}`);
}
const newHouse = {
    dogName: 'Azrieta'
}

dogGreeting.call(newHouse, owner, address)

const necessaryValues = [owner, address]
dogGreeting.apply(newHouse, necessaryValues)

const bindinWithBind =  dogGreeting.bind(newHouse, owner, address)
bindinWithBind()


//Ejercicio

const caricatura = { nombre:'vaca y pollito'}

function recuerdo(personaje){
    console.log(`${this.nombre} era mi caricatura favorita. Me encantaba ver las aventuras de ${personaje}`);
}

recuerdo.call(caricatura, 'vaca')
recuerdo.bind(caricatura, 'pollito')