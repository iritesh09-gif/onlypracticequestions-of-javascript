const calculateDiscountedBill = function(price=1000,discount=0){
    const discountAmount = price*discount/100;
    const finalPrice = price-discountAmount;
    return finalPrice;
}

console.log(calculateDiscountedBill(1000,20));
console.log(calculateDiscountedBill(500));
console.log(calculateDiscountedBill());