 const calculateFinalPrice = function(price=1000,quantity=1,discount=0){
   
   let  subtotal = price*quantity
    let discountAmount = subtotal*discount/100;
    let finalPrice = subtotal - discountAmount
    return finalPrice;
 }

 console.log(calculateFinalPrice(500,2,10))
 console.log(calculateFinalPrice())