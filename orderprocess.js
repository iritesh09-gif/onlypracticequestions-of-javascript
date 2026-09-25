const processOrder = function(productname="unknownname",price=10000,quantity=1){
    let total  = price * quantity;
    
    if (total>=50000){
        return ("Producut: " + productname + ",Quantity: " + quantity + ",Total: " + total + ",Status: Available");
    }else{
        return ("Producut: " + productname + ",Quantity: " + quantity + ",Total: " + total + ",Status: Not Available")
    }
 
}

console.log(processOrder("Laptop",80000,10))
console.log(processOrder("Mouse",2000,10));
console.log(processOrder())





/*Question 10 — Order Processing Function

Write a function named processOrder that:

Accepts a product name, price, and quantity.

Uses suitable default values.

Calculates the total price.

Returns different messages based on the total.

Calls the function three times.*/