const calculateLoanEligibility = function(salary=15000,creditScore=650,existingLoan=false){
            let annualSalary = salary*12;
            if(salary>=20000 && creditScore>=700 && existingLoan===false){
                return "Loan Eligible: " + annualSalary;
            }else if(salary>=15000 && creditScore>=650 ){
                return "Review Required: " + annualSalary;  
            }else {
                     return "Loan Not Eligible: " + annualSalary;
            }
}
console.log(calculateLoanEligibility(25000, 750, false));
console.log(calculateLoanEligibility(18000, 680, true));
console.log(calculateLoanEligibility());