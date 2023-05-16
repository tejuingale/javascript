console.log(/----------------Male Marriage Eligiblity------------------/);
var gender1 ="Male" ;
var age1 = 25;
var boyName1 = "Billgates";
var gender2 ="Male" ;
var age2 = 17;
var boyName2 = "Stew Jobs";
function maleMarriageEligibility(value1, value2, value3){
   var result1 = (gender1 = "Male" && age1>=21) ?`Hey ${boyName1} you are eligible for Marriage` :`Hey ${boyName1} you are Not eligible for Marriage`;
   console.log(`1.3.1) ${result1}`);  
   var result2 = (gender2 = "Male" && age2>=21) ?`Hey ${boyName2} you are eligible for Marriage` :`Hey ${boyName2} you are Not eligible for Marriage`;
   console.log(`1.3.2) ${result2}`); 

}

maleMarriageEligibility(gender1, age1, boyName1);
console.log(/----------------Female Marriage Eligiblity------------------/);
var gender1 ="Female" ;
var age1 = 16;
var girlName1 = "Jenifer";
var gender2 ="Female" ;
var age2 = 27;
var girlName2 = "Malinda Gates";
function femaleMarriageEligibility(value1, value2, value3){
    var result1 = (gender1 = "Female" && age1>=18) ?`Hey ${girlName1}  you are eligible for Marriage` :`Hey ${girlName1}  you are Not eligible for Marriage`;
    console.log(`2.3.1) ${result1}`);  
    var result2 = (gender2 = "Female" && age2>=18) ?`Hey${girlName2}  you are eligible for Marriage` :`Hey${girlName2} you are Not eligible for Marriage`;
    console.log(`2.3.2) ${result2}`); 
 
 }
 femaleMarriageEligibility(gender1, age1, boyName1);