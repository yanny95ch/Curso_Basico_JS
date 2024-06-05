//Create powerpuffGirl objets

function PowerpuffGirl (name , color , superPower){
    this.name = name
    this.color = color
    this.superPower = superPower
    this.isLeader = false
    
    this.displayInfo = function (){
        console.log( `powerpuff Girl Information:
            Name: ${this.name}
            Color: ${this.color}
            superPower: ${this.superPower}
            ${this.isLeader ? 'Leader: yes': 'Leader:No'}
            `
        );
    }

    this.becomeLeader = function (){
        this.isLeader = true
        console.log(`${this.name} has become the leader of the PowerpuffGirl `);
    }
}

const blossom = new PowerpuffGirl('Blossom', 'pink', 'Ice Breath');
const buttercut = new PowerpuffGirl('Buttercut', 'Green', 'Super Strengt');
const bubbles = new PowerpuffGirl('Bubbles', 'Blue', 'Fligth');

blossom.displayInfo()
bubbles.displayInfo()
bubbles.displayInfo()

blossom.becomeLeader()

blossom.displayInfo()
bubbles.displayInfo()
bubbles.displayInfo()