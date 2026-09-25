const createUser = function(name="Guest",country = "India"){
    return "Name: " + name + ", Country: " + country;
}

console.log(createUser("F", "India"));
console.log(createUser("Rahul"));
console.log(createUser());