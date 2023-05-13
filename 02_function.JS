
console.log("---------------Functions------------------------");
function first(){
    console.log("first function with no argument and no return type");
}
first();
function second(){
    console.log("second function with no argument and no return type");
}
second();
console.log("--------------------myPersonalDetails--------------------");
function personalDetails(){
    var firstName = "Tejashvini";
    var lastName = "Ingale";
   var collegeName = "DBF Dayanand College,Solapur";
   console.log("My firstName:",firstName);
   console.log("My LastName:",lastName);
   console.log("My CollegeName:",collegeName);
}


personalDetails();
console.log("/-----------------------function Name---swapValuesDude-----------------------------/");
var name1 = "Virat";
var name2 = "Anushka";
var num1 = 1000;
var num2 = 2000;

function swapValuesDude(value1, value1){
    console.log("Before Swip:"," a: = ",    name1, "    b: = ",   name2);
    var temp = name1;
    name1 = name2;
    name2 = temp;
   
    
    console.log("After Swip:"," a: = ",name1, "  b: = " ,name2);
   
    console.log("Before Swip:"," c: = ",    num1, " d: = ", num2  );
    var temp = num1;
    num1 = num2;
    num2 = temp;
 
   
     console.log("After Swip:"," c: = ",num1, "  d: = " ,num2);

}
swapValuesDude();
console.log("/-----------------function Name---addThreeNumber-------------------------------/");


var num1 = 10.23;
var num2 = 600;
var num3 = 40;
var first = "Hello";
var second = "Good";
var third = "Morning";
function addThreeValues(value1, value2, value3){
    console.log(" Addition is:  ",num1+num2+num3);
    console.log(" Addition is:  ",first+second+third);



}
addThreeValues(num1, num2,num3);

