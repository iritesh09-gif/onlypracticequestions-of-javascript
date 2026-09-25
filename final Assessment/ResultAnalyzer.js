const analyzeStudentResult = function(Studentname="UnknownName",subject1marks=60,subject2marks=60,subject3marks=60,Attendancepercentage=75){
    let totalmarks = subject1marks+subject2marks+subject3marks;
    let averagemarks = totalmarks/3;
    let pass;
    if(averagemarks>=60 && Attendancepercentage>=75){
        pass = "Eligible for Final Exam"
    }else{
        pass = "Not Eligible for Final Exam";
    }
return "Student Name: "+Studentname+",Total Marks: "+ totalmarks+",Average Marks: "+averagemarks+",Attendance: "+Attendancepercentage+",Result Status: "+pass;

}


console.log(analyzeStudentResult("Rohit",80,70,75,98));
console.log(analyzeStudentResult("Ramesh",40,38,46,60));
console.log(analyzeStudentResult())
