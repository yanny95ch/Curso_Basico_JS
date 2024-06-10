//Ejercise: Managing a Stack

let bookCart = []
const add_To_Cart_Action = 'addToCart';
const remove_From_Cart_Action = 'removeFromCart';
const view_Cart_Action = 'viewCart';

function viewCart (){
    console.log('current cart of Books', bookCart);
}

function performCartActions (action, newBook){
    switch (action) {
        case add_To_Cart_Action:
            bookCart.push(newBook)
            break;
        case remove_From_Cart_Action:
            if (bookCart.length===0){
                console.log('car is empty.No books to remove');
            }else{
                const removeBook = bookCart.pop()
                console.log(`Remove book from the cart: ${removeBook}`);
            }
        break;
        case view_Cart_Action:
            viewCart();
        break;
    
        default:
            console.log('Invalid action, Please choose a vaid option');
            
    }
}
performCartActions(add_To_Cart_Action,'cat');
performCartActions(view_Cart_Action);




//corre en ispector de codigo

