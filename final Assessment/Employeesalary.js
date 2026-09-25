const generateEmployeeSalary = function(employeeName="Unknown Employee",basicSalary=15000,bonus=2000,deduction=1000){
    let grossSalary = basicSalary+bonus;
    let finalSalary = grossSalary-deduction;
    if(finalSalary>=15000){
        return "Employee name: " + employeeName +",Gross salary: " + grossSalary +", Final salary: " + finalSalary+", Salary Status: " +"Eligible"
    }else{
        return "Employee name: " + employeeName + ",Gross salary: " + grossSalary +", Final salary: " + finalSalary+", Salary Status: " +"Not Eligible"
    }
    
}


console.log(generateEmployeeSalary("Rohit",20000,2000));
console.log(generateEmployeeSalary("Rohan",14000,1000));
console.log(generateEmployeeSalary())