
var age1 = 45;

var age2 = 17;

var age3 = 8;

var age4 = 20;

var age5 = -10;

var age6 = 200;

var age7 = 0;

var age8 = undefined;

var age9 = null;
function voteEligiblity(value1){
    if(age1>=18){
        console.log(`1. Your Age : ${age1} ---> You are eligible for voting `);
    }else{
        console.log(`1. Your Age : ${age1} ---> You are not eligible for voting `);
    }
    if(age2>=18){
        console.log(`2. Your Age : ${age2} ---> You are eligible for voting `);
    }else{
        console.log(`2. Your Age : ${age2} ---> You are not eligible for voting `);
    }
    if(age3>=18){
        console.log(`3. Your Age : ${age3} ---> You are eligible for voting `);
    }else{
        console.log(`3. Your Age : ${age3} ---> You are not eligible for voting `);
    }
    if(age4>=18){
        console.log(`4. Your Age : ${age4} ---> You are eligible for voting `);
    }else{
        console.log(`4. Your Age : ${age4} ---> You are not eligible for voting `);
    }
    if(age5== -10){
        console.log(`5. Your Age : ${age5} ---> This is In Valid Data `);
    }else{
        console.log(`5. Your Age : ${age5} ---> Not Valid Data`);
    }
    if(age6==200){
        console.log(`6.Your Age : ${age6} ---> This is In Valid Data `);
    }else{
        console.log(`6. Your Age : ${age6} ---> Not  Valid Data`);
    }
    if(age7 == 0){
        console.log(`7. Your Age : ${age7} ---> This is In Valid Data `);
    }else{
        console.log(`7. Your Age : ${age7} ---> Not  Valid Data`);
    }
    if(age8 == undefined){
        console.log(`8. Your Age : ${age8} ---> This is In Valid Data `);
    }else{
        console.log(`8. Your Age : ${age8} ---> Not  Valid Data`);
    }
    if(age9 == undefined){
        console.log(`9. Your Age : ${age9} ---> This is In Valid Data `);
    }else{
        console.log(`9. Your Age : ${age9} ---> Not  Valid Data`);
    }
   
    
}
//voteEligiblity(age1);

function gradeCalculation(marks) {
    if (marks<=0 || marks>100) {
        console.log(`Please provide the valid marks`);
        
    } else {
        if (marks>=35 && marks<50) {
              console.log(`Mark is: ${marks}, your grade is C,Need Improvement`);
        } else {
            if (marks>=50 && marks<75) {
                console.log(`Good Marks: ${marks}, your grade is B`);
            } else {
                if (marks>=75 && marks<90) {
                    console.log(`Excellent Marks: ${marks}, your grade is A`);
                } else {
                    if (marks>=90) {
                        console.log(`Funtastic Marks: ${marks}, Your grade is A+`);
                        
                    } else {
                        console.log(`Please provide the valid marks`);
                    }
                    
                }

            }
                
                
            }
            
        }

     
    }
    

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);
