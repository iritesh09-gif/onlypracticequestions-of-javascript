const calculateEmployeeBonus = function(EmployeeName="Unknown",MonthlySalary=20000,PerformanceRating=3,WorkingYears=1){
   let  AnnualSalary = MonthlySalary*12;
   let BonusAmount;
   if(PerformanceRating>=4 && WorkingYears>=3){
    BonusAmount = (AnnualSalary*20)/100
   }else if(PerformanceRating>=3 || WorkingYears>=2){
    BonusAmount = (AnnualSalary*10)/100;
   }else{
    BonusAmount=(AnnualSalary*5)/100;
   }
   let FinalSalary = AnnualSalary+BonusAmount;
   return "Employee name: "+EmployeeName + ", Monthly salary: "+ MonthlySalary + ", Performance rating: "+ PerformanceRating+", Working years: "+ WorkingYears+", Bonus amount: "+BonusAmount+", Final salary: "+ FinalSalary;
}

console.log(calculateEmployeeBonus("Gandhi",25000,4,4));
console.log(calculateEmployeeBonus("Mayawati",21000,3,3));
console.log(calculateEmployeeBonus());