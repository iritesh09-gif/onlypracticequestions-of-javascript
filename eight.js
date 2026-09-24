const calculateGrade = function(marks,attendance,assignmentSubmitted){
    if(marks<40){
        return "Fail due to marks";
    }else if(attendance<75){
        return "Fail due to attendance"
    }else if(!assignmentSubmitted){
        return "Assignment Pending"
    } else if(marks>=80 && attendance>=90 && assignmentSubmitted) {
        return "A Grade"
    }else{
        return "Pass"
    }
};

