const personalizedMessage = () => 'Adios y buena suerte'

function Rocket (name, ownMessage){
    this.name = name
    this.launchMessage = () =>ownMessage
    
}
const falcon9Rocket = new Rocket('Falcon 9', personalizedMessage())
const falconHeavyRocket = new Rocket('Falcon Heavy', personalizedMessage())

console.log(falcon9Rocket.name);
console.log(falcon9Rocket.launchMessage());

const RocketWithArrowFunction = (name, ownMessage)=> ({
    name:name,
    launchMessage: ownMessage
})

const personalizedMessageWithArrowFunction= () => '🧑🏻‍🚀🧑🏻‍🚀🧑🏻‍🚀🧑🏻‍🚀'
const falcon9Rocket1 = RocketWithArrowFunction('falcon 9 ', personalizedMessageWithArrowFunction)
console.group(falcon9Rocket1.name);
console.group(falcon9Rocket1.launchMessage());