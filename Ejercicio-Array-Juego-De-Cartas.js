//Exercise: card game Implementation

const deck = ['♠️','♣️','♥️','♦️','♠️','♣️','♥️','♦️','♠️','♣️','♥️','♦️'];

//fisher- Yates Algorithm
function shuffleDeck(){
    for(let i= deck.length-1 ; i > 0 ; i--){
        // [0,i] -> i+1
        //[0,i)
        const j = Math.floor(Math.random()*(i+1));
        [deck[i], deck[j]] = [deck[j], deck[i]];

    }
}

function dealCards (numcard){
    const dealCards = deck.splice(0,numcard)
    return dealCards
}

shuffleDeck()
const player1Hand = dealCards(3)
const player2Hand = dealCards(3)
const player3Hand = dealCards(3)

console.log('Player 1:' , player1Hand);
console.log('Player 2:' , player1Hand);
console.log('Player 3:' , player1Hand);




