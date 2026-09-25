const calculateShoppingBill = function(Customername="Unknown name",Productprice=1000,Quantity=1){
    let Totalbill = Productprice*Quantity
    let discountAmount;

        if(Totalbill>=5000){
        discountAmount= (Totalbill*10)/100;
    }else{
         discountAmount=0;
    }
        let Finalbill = Totalbill-discountAmount;
    return "Customer name:  "+Customername+",Total bill before discount: "+ Totalbill +",Discount amount: " + discountAmount +",Final bill: " + Finalbill;

}


console.log(calculateShoppingBill("Rahul",1000,10))
console.log(calculateShoppingBill("Rohan",2000,2))
console.log(calculateShoppingBill())