const calculateProductDiscount = function(ProductName="Unknown Product",ProductPrice=1000,Quantity=1){
     let TotalAmount = ProductPrice*Quantity;
     let discountAmount;
     if(TotalAmount>=10000){
        discountAmount = (TotalAmount*20)/100;
     }else if(TotalAmount>=5000){
        discountAmount = (TotalAmount*10)/100;
     }else{
        discountAmount = (TotalAmount*5)/100;
     }
       let FinalPrice = TotalAmount-discountAmount;
     return "Product name: "+ProductName+", Product price: "+ProductPrice+", Quantity: "+Quantity+", Total amount: "+TotalAmount+", Discount amount : "+discountAmount +", Final amount: " + FinalPrice;
}

 console.log(calculateProductDiscount("Macbook",75000,5));
 console.log(calculateProductDiscount("Mouse",1500,4));
 console.log(calculateProductDiscount());