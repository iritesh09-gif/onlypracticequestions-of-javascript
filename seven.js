const checkStudentResult = function(marks,attendance){
     if(marks>=40 && attendance>=75){
        return "Pass"
     }else{
        return "Fail"
     }
}

 const result =  checkStudentResult(65,80);
 console.log(result)