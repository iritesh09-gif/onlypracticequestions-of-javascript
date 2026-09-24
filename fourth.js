// Create a function named getGrade that accepts a student's maarks and return a grade according to the following rules //

const getGrade = function(marks){
    if(marks>=90){
        return "A"
    }else if(marks>=75){
        return "B"
    }else if(marks>=60) {
        return "C"
    }else if (marks>=40) {
        return "D"
    }else{
        return "Fail"
    }
};


const result = getGrade(82);
console.log(result)