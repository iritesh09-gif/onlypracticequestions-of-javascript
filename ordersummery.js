const generateOrderSummary = function(productname="Unknown Product",price=10000,quantity=1,){
     let total = price * quantity;
  
 return "Product: " + productname + ", Price: "+ price + ", Quantity: " + quantity +",Total: " + total;

}


console.log(generateOrderSummary("Laptop",80000,5))
console.log(generateOrderSummary())