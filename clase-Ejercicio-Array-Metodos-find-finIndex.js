//Encontrar al fanador de una rifa

const winningParticipants = [
    {id: 1, name:'Lulito', ticketNumber: '001' },
    {id: 2, name:'La Vanne', ticketNumber: '002' },
    {id: 15, name:'Azrieta', ticketNumber: '015' },
    {id: 78, name:'FeaAriel', ticketNumber: '078' },
    {id: 12, name:'Pancho', ticketNumber: '012' },
    {id: 89, name:'Pepe', ticketNumber: '089' },

]

function findWinnerByName (name){
    const winner = winningParticipants.find(participants => participants.name === name);
    return winner || 'No winner found with that  name.'
}

function findWinnerByTicket (ticketNumber){
    const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticketNumber);
return index !== -1 ? index : 'No winner found with that  ticketNUmber.'
}

function dlisplayWinnerInformation(winner) {
    if (winner !== undefined && winner  != null && winner != 'No winner found with that  name.' ){
        console.log('Winner Informarion: ', winner);
    }else{
        console.log('No Winner Found');
    }
}

const WinnerByName = findWinnerByName ('FeaAriel')
const indexWinnerByTicket = findWinnerByTicket('005')

dlisplayWinnerInformation(WinnerByName)
console.log('Index of winner by ticketNumber:', indexWinnerByTicket);