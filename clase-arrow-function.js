const greeting = function (name){
    return `Hi,  ${name}`
}

const newGreeting =  (name) =>{
    return `Hi,  ${name}`
}

//Arrow Function - Implicit Return

const newGreetingImplicit = name => `Hi,  ${name}`
const newGreetingImplicitParamerters = (name, lasName) => `Hi,  ${name} ${lasName}`

//Lexical Bindid

const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function(message){
        console.log(`${this.name} says ${message}`);
    },

    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says ${message}`);
    },

}

fictionalCharacter.messageWithArrowFunction('with great power comes great  responsability')
fictionalCharacter.messageWithTraditionalFunction('with reat power comes great  responsability')

