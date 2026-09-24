 /*Write a JavaScript function named checkEligibility.

The function should accept age and hasId and determine whether a person is eligible based on both requirements:

The person must be at least 18 years old.

The person must have a valid ID.

Test the function with 20 and true, then print the result.*/



// CODE//


const checkEligibility = function(age,hasId){
    if(age>=18 && hasId){
        return "Eligible"
    }else {
        return "Not Eligible"
    }
}


const result = checkEligibility(20,true)
console.log(result)