//Methods : Exercise, Transaction Analysis

const  transactions =[
    {id: 1 , description:'Grocery Shippong', amount:-50 },
    {id: 2 , description:'Salary Deposit', amount:2000 },
    {id: 3 , description:'Utility Bill Payment', amount:-100 },
    {id: 4 , description:'Online Purshase', amount:-30 }
]

//1. Calculate Total Balance

const totalBalance = transactions.reduce((acc,transaction) => acc + transaction.amount, 0);
console.log('Total Balance:', totalBalance);

//2.Find the Largest Transaction (Income or expense)

const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0] )
console.log('Largest Transaction:', largestTransaction);

//3.filter () Purchase Transaction

const purchaseTransaction = transactions.filter(transaction => transaction.amount < 0)
console.log(' Purchase Transaction', purchaseTransaction);

//4. find a Transaction by Description

const specificTransaction = transactions.find(transaction => transaction.description === 'Online Purshase' )
console.log( 'Specific Transaction:', specificTransaction);

//5. find the index of a transaction by Amoun 

const indexTransactiomwithAmoun =  transactions.findIndex(transaction => transaction.amount === -30);
console.log('Index Transaction with Amoun -30 is : ', indexTransactiomwithAmoun);

//6. Update Transaction Description 

transactions.forEach(transaction => { 
    if (transaction.amount < 0 ){
        transaction.description = `Expense: ${transaction.description}`
    }else {
        transaction.description = `Income: ${transaction.description}`
    }
})
console.log( 'Update Transactions:', transactions);