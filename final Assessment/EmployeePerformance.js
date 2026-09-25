const calculateEmployeePerformance=function(EmployeeName="Unknown",MonthlySalary=15000,WorkingDays=26,PresentDays=24){
    let Attendance = (PresentDays/WorkingDays)*100;
    let AnnualSalary = MonthlySalary*12;
    let AttendanceStatus;
    if(Attendance>=90){
         AttendanceStatus = "Excellent Attendance";
    }else if(Attendance>=75){
        AttendanceStatus = "Good Attendance";
    }else{
        AttendanceStatus = "Poor Attendance";
    }

    return "Employee name: "+EmployeeName+", Monthly salary: "+MonthlySalary+", Annual salary: "+AnnualSalary+", Attendance percentage: "+Attendance+",Attendance status: "+AttendanceStatus;
}


 console.log(calculateEmployeePerformance("Raunk",20000,30,28));
 console.log(calculateEmployeePerformance("Ramanujan",24000,26,22));
 console.log(calculateEmployeePerformance());