var first_name ; //variale declaration
// first_name = "Tejashvini";  //variable Initilization
 var first_name = "Tejashvini";  //variable declaration and Initilization
// console.log(first_name);//before Initilization
console.log(first_name);//after Initilization
console.log(/---------------------------------/);
var num1 = 20;
var num2 = 30;
var marks = "84%";
var st = "teju";
var te;
var tr = null;
console.log("First Number:",num1, "    Second Number:",num2);
 var typeOfNum1 = typeof num1;
 console.log("Type is:",typeOfNum1);
 console.log(/---------------------------------/);
 var typeOfSt = typeof(st);
 console.log("Type is:",typeOfSt);
 console.log(/---------------------------------/);
 var typeOfmarks = typeof(marks);
 console.log("Type is:",typeOfmarks);
 console.log(/---------------------------------/);
 var typeOfte = typeof(te);
 console.log("Type is:",typeOfte); // only declared variable not assign any value then its data type is undefined
 console.log(/---------------------------------/);
 var typeOftr = typeof(tr);
 console.log("Type is:",typeOftr); //value of variable assigned as null then its type is object
 console.log(/---------------------------------/);
 var firstName = "Tejashvini";
 var lastName = "Ingale";
 function fullName() {
    console.log(firstName, lastName); //call function without any argument
    
 } 
 fullName();
 console.log(/---------------------------------/);
 function myName(value1, value2) {
    console.log(value1, value2); //call function with argument
    
 } 
 myName(firstName, lastName);
 console.log(/---------------------------------/);
 var name1 = "teju";
 var name2 = "ganesh";
 console.log("before swap First Name:",name1, "    before swap Second Name:",name2);  //before swap
 console.log(/---------------------------------/);
 var temp = name1;
 name1 = name2;
 name2 = temp;
 console.log("After swap First Name:",name1, "    After swap Second Name:",name2);
 console.log(/---------------------------------/);
 function myName(value1, value2, value3) {
    console.log(value1, value2, value3); //call function with argument but value3 variable is not declared thats why its value is undefined
    
 }
 function addition(num1, num2) {
    var result  = num1 + num2;// result = 300
    return result;
}
var returnValue = addition(100, 200);
console.log("Addition of number is: ", returnValue);
var returnResult = addition(890.400, 600.3456);
console.log("Addition of number is: ", returnResult);







