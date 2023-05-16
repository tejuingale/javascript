

var num1 = 10;
var num2 = -10;
var num3 = 800;
var num4 = 899;
var greaterNumberIs = function greaterNumber(value1, value2){
 //var result =(num1>num2) ? 10: -10;
 var result = num1>=num2 ?`${num1} is greater than -10`: `${num2} is greater than 10`;
 var result1 = num3>=num4 ?`${num3} is greater than 899`: `${num4} is greater than 800`;
 
 //var result1 = (num3>num4) ? 800: 899;
 console.log(/-------------find greter number-------------/);
 console.log(`1.1)  ${result}`);
 console.log(`1.2)  ${result1}`);
}
greaterNumberIs(num1,num2);
console.log(/-------------check even or odd number-------------/);
var num1 = 29;
var num2 = 44;
var num3 = 0;
var num4 = 101;
var isEvenOrOddNum = function isEvenOrOddNum(value1){
    var result = (num1%2==0) ? "29 is Even" : " 29 is Odd";
  
    console.log(`2.2.1) ${result}`);
    var result1 = (num2%2==0) ? "44 is Even" : " 44 is Odd";
  
    console.log(`1.2.2) ${result1}`);
    var result2 = (num3%2==0) ? "0 is Even" : " 0 is Odd";
  
    console.log(`1.2.2) ${result2}`);
    var result3 = (num4%2==0) ? "101 is Even" : " 101 is Odd";
  
    console.log(`1.2.2) ${result3}`);
}
isEvenOrOddNum(num1);

console.log(/-----------------check which word has even or odd length--------------------/);
var first = "JavaScript";
var second = "developer";
var third = "Google";
var wordLength = function wordLength(value1){
    var firstLength = first.length;
    //console.log(firstLength);
    var st1 =(firstLength%2 == 0) ?" Even WordLength" : "Odd WordLength" ;
console.log(`1.3.1) ${first} is ${st1}`);
var secondLength = second.length;
//console.log(secondLength);
var st2 =(secondLength%2 == 0) ?" Even WordLength" : "Odd WordLength" ;
console.log(`1.3.2) ${second} is ${st2}`);
var thirdLength = third.length;
//console.log(thirdLength);
var st3 =(thirdLength%2 == 0) ?" Even WordLength" : "Odd WordLength" ;
console.log(`1.3.3) ${third} is ${st3}`);

}
wordLength(first);

