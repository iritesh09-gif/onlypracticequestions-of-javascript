const calculateBill = function(price=100,quantity=1){
    return price*quantity
}

console.log(calculateBill(500, 3));
console.log(calculateBill(200));
console.log(calculateBill());