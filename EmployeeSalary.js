const calculateSalary = function(basicSalary=15000,bonus=2000,deduction=1000){
    let grossSalary = basicSalary + bonus;
    let finalSalary = grossSalary - deduction;
    if(finalSalary>=15000){
       return "Eligible Salary: "+ finalSalary;
    }else{
        return "Low Salary: " + finalSalary;
    }
}

console.log(calculateSalary(20000,3000,2000));
console.log(calculateSalary(10000,1000,500));
console.log(calculateSalary())