const isEligible = function(marks,attendance){
    if(marks>=40 && attendance>=75){
        return true
    }else{
        return false
    }
} 
const getFinalResult = function(marks,attendance,assignmentSubmitted){
    const eligible = isEligible(marks,attendance);
    if(eligible === false){
        return "Not Eligible"
    }else if(!assignmentSubmitted){
        return "Assignment Pending"
    
    }   else{
        return "Eligible"
    }
 }
