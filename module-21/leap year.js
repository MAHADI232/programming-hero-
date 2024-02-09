function isLeapYear1( year){
    /***
     * 1. those year that is not divisible by 100 and if the year is divisible by.
     * 2. then it will be a leap year .
     * 3. if that year is divisible by 400, then it is leap year.
     * 4. else it is not leap year .
     */
      if(year % 100 !== 0 && year % 4 === 0) {
        return true
      }
     else if ( year%100 == 0 && year%400 === 0 ) {
             return true
      } else {
         return false
      }
  
   }
   const year = isLeapYear1(2100)
   const year1 = isLeapYear1(4000)
   const year2 = isLeapYear1(2400)
    console.log(year, year1, year2)