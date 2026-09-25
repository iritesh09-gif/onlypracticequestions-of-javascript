const calculateDiscount = function(price=1000,discount=0){

    if(discount>100 || discount<0){
        return "Invalid Discount"
      
    }else{
                const discountAmount = price*discount/100;
                const finalPrice = price-discountAmount;

        return finalPrice;
    }

}

console.log(calculateDiscount(1000, 20));
console.log(calculateDiscount(500));
console.log(calculateDiscount(1000,150));
console.log(calculateDiscount(1000,-10));
console.log(calculateDiscount());