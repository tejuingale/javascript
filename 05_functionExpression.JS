var checkLeapYear = function checkLeapYear(year) {
   
   
    
        if (year == "Twenty Twenty" || year == undefined  || year == null || isNaN(year)) {
         console.log(`"${year}" is invalid input`);
        } else{ 
            if (year %4 ==0 && year %100 !=0 ||year %400 ==0) {
            console.log(`"${year}" is a leap year`);
        } else  {
               
                    console.log(`"${year}" is not a leap year`);
                
                
               }}
   
        }
        
    

checkLeapYear(2020);
 checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
 checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);
