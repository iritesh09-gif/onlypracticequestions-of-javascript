const calculateLoanDecision = function(Applicantname="Unknown name",Monthlysalary=14000,Creditscore=700,Exisitingloanstatus=false){
    let annualsalary = Monthlysalary*12;
    let LoanStatus;
    if(Monthlysalary>=20000 && Creditscore>=700 && Exisitingloanstatus===false){
        LoanStatus="Loan Eligible: " 
    }else if(Monthlysalary>=15000 && Creditscore>=650){
        LoanStatus="Review Required: " 
    }else{
                LoanStatus="Loan Not Eligible:"
    }
// return the complete salary after the condition//
         return "Applicant name: "+ Applicantname + ",Annual salary: " + annualsalary+ ",Credit score: "+Creditscore +", Loan Status: "+LoanStatus;

}

// function calls//

 console.log(calculateLoanDecision("Rohan",25000,750,false));
 console.log(calculateLoanDecision("Ramesh",16000,650,true));
 console.log(calculateLoanDecision())