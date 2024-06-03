function calcularDiscountedPrice (price,discountPercentage){
    const discount = (price* discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}
const originalPrice = 100
const discountPercentage = 20
const finalPrice = calcularDiscountedPrice(originalPrice,discountPercentage)

console.log('originalPrice: $' + originalPrice);
console.log('discount: ' + discountPercentage  + '%');
console.log('price whith discount: $' + finalPrice);
