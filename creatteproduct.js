const createProduct = function(name="Unknown",price=0,category="General"){
    return "Product: " +name +", Price: " + price +",Category: " + category;
    

}

console.log(createProduct("Laptop", 50000, "Electronics"));
console.log(createProduct("Mouse", 500));
console.log(createProduct());