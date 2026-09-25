const processOrder = function(productname="unknownname",price=1000,quantity=1){
    let total  = price * quantity;
  return "Product: " + productname + ", Price: "+ price + ", Quantity: " + quantity +",Total: " + total;
}

console.log(processOrder("Laptop",80000,200))
console.log(processOrder("Mouse",2000,30))
console.log(processOrder())