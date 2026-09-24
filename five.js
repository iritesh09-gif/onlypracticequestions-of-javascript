/*Write a function named getDayName that accepts a number representing a day of the week.

The function should return the corresponding day name for numbers 1 through 7.

Call the function with 5 and print the result.*/

const getDayName =  function(day){
   
   switch(day){
         case 1:
        return "Monday"
        case 2 :
        return "Tuesday"
        case 3 :
            return "Wednesday"
            case 4 :
                return "thursday"
                case 5 :
                    return "Friday"
                     case 6 :
                        return "Saturday"
                        case 7 :
                            return "Sunday"
                    default :
                    return 'Invalid Day'
   }
  


};


const result = getDayName(5)
console.log(result)
 