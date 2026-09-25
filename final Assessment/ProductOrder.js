const processProductOrder = function(Productname="Unknown name",Productprice=1000,Quantity=1){
      let totalprice = Productprice*Quantity;
      let Orderstatus;
      if(totalprice>=10000){
        Orderstatus ="Premium Order";
      }else if(totalprice>=5000){
        Orderstatus="Standard Order";
      }else{
        Orderstatus="Basic Order";
      }

      return "Product name: "+Productname+", Product price: "+Productprice+", Quantity: "+Quantity+", Total price: "+totalprice+", Order status: "+ Orderstatus;
}


console.log(processProductOrder("Macbook",80000,5))
console.log(processProductOrder("Earbuds",500,11));
console.log(processProductOrder())