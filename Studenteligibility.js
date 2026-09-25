const checkStudentEligibility = function(marks=50,attendance=75,hasCertificate=false){
     if(marks>=60 && attendance>=75){
        return "Eligible"
     }else if(hasCertificate===true && marks>=50){
        return "Conditionally Eligible"
        
     }else{
            return "Not Eligible"
     }
}



console.log(checkStudentEligibility(70,80,false));
console.log(checkStudentEligibility(55,60,true));
console.log(checkStudentEligibility());