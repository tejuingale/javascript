// console.log(`----------closure----------`);
// const global = "teju";
// function show() {
//     const local = "Ingale";
//     function display() {
//         let own = "Good Morning";
//         console.log(`Global variable :${global}`);
//         console.log(`Local Variable : ${local}`);
//         console.log(`Own Variable : ${own}`);
//     }
//     return display;
// };
// let displayFun = show();
// displayFun();
// console.log(`--------callbacks---------`);
// function outer(innerCallBacks) {
//     console.log("hii");
//     innerCallBacks();
// }
//     function inner() {
//         console.log("Good Morning");
//     }

// outer(inner);
console.log(`-----------SetTimeOut---------`);
// setTimeout(display, 3000);
// function display() {
//     console.log("Showing display....");
// }
// const display = function () {
//     console.log("Showing display....");
// };
// setTimeout(display, 3000);
// console.log(`----------promise-------`);
// let isNotesFullfill = true;
// const PromisefullFill = new Promise (function (resolve, rejected){
//     if (isNotesFullfill) {
//         resolve("Guys, take this notes...")
//     } else {
//         rejected("Sorry guys... I cant share notes today...")
//     }
// });
// PromisefullFill.then(function(success){
// console.log(success);
// }).catch(function(rejected){
//     console.log(rejected);
// }).finally(function(){
//     console.log(`I have own notes`);
// });
console.log(`----------promise with array function-------`);
// let isNotesFullfill = true;
// const PromisefullFill = new Promise ((resolve, rejected) => {
//     if (isNotesFullfill) {
//         resolve("Guys, take this notes...")
//     } else {
//         rejected("Sorry guys... I cant share notes today...")
//     }
// });
// PromisefullFill.then((success) =>{
// console.log(success);
// }).catch((rejected) =>{
//     console.log(rejected);
// }).finally(() => {
//     console.log(`I have own notes`);
// });
// console.log(`------------call method--------`);
// const person = {
//     firstName : "Teju",
//     lastName : "Ingale",
// }
// function display(massege) {
//     console.log(` hii ${this.firstName} ${massege}`);
// }
// display.call(person, "Good Morning");
// console.log(`------------apply method--------`);
// const person = {
//     firstName : "Teju",
//     lastName : "Ingale",
// }
// function display(massege) {
//     console.log(` hii ${this.firstName} ${massege}`);
// }
// display.apply(person, ["Good Morning"]);
// console.log(`------------call method--------`);
// const person = {
//     firstName : "Teju",
//     lastName : "Ingale",
// }
// function display(massege) {
//     console.log(` hii ${this.firstName} ${massege}`);
// }
// const Bind = display.bind(person);
// Bind("Good Morning");
// console.log(`------------remove duplicate element from array---------`);
// const array = [23,45,68,89,23,56,58,68,89];
// const removeDuplicateElement = [...new Set(array)];
// console.log(removeDuplicateElement);
// console.log(`-----------shallow clone -----------`);
// const shallowClone = array;
// console.log(shallowClone);
// console.log(`-------------deep clone----------`);

//  const deepClone = [...array] ;
//  console.log(array);

//  deepClone.splice(3,0,10,25,36);
//  console.log(deepClone);
// const nameMap = new Map();
// nameMap.set(1,"teju");
// nameMap.set(2,"Sonu");
// nameMap.set(3,"Puja");
// nameMap.set(4,"Sangita");
// nameMap.set(5,"santa");
// nameMap.set(5,"sandhya");
// nameMap.set(6,"santa");

// console.log(nameMap);
// let key = nameMap.keys();
// let keyValue = nameMap.values();
// console.log(`------getting all keys ---------`);
// console.log(key);
// console.log(`------getting all values ---------`);
// console.log(keyValue);
// console.log(`------getting total element inside map ---------`);
// console.log(nameMap.size);
// console.log(`---------check wether key avaliale or not----------`);
// console.log(nameMap.has(7));
// console.log(nameMap.delete(5));
// console.log(nameMap);
// console.log(`----------travers or iterate map---------`);
// const traversMap = nameMap.keys();
// for (const keys of traversMap) {
//     console.log(nameMap.get(keys));
// }
// console.log(`---------how to get any particuler element from map--------`);
// const traversMapEle = nameMap.keys();
// for (const keys of traversMapEle) {
//     console.log(nameMap.get(6));
// }
// const setArray = new Set();
// setArray.add("Teju");
// setArray.add("rani");
// setArray.add("manju");
// setArray.add("geeta");
// setArray.add("rutu");
// console.log(setArray);
// console.log(`------total element in set --------`);
// console.log(setArray.size);
// console.log(`------delet element from set --------`);
// console.log(setArray.delete("rani"));
// console.log(`------check lement is present in set or not  --------`);
// console.log(setArray.has("geeta"));
// console.log(`----------travers or iterate set---------`);
// const traverseSet = setArray.keys();
// for (const keys of traverseSet) {
//     console.log(keys);
// }
// console.log(`---------how to get any particuler element from set--------`);
// const traverseSetParticuler = setArray.keys();
// for (const keys of traverseSetParticuler) {
//     console.log(setArray.keys(2));
// }
// function ispalindrome(str) {
//     const strSplit = str.split('');
//     const strRevers = strSplit.reverse();
//     const strJoin = strRevers.join("");
//     if (str == strJoin) {
//         console.log(`Given string is  "${str}" is palindrom`);
//     } else {
//           console.log(`Given string is ${str} is not palindrom`);

//     }

// };
// ispalindrome("madam");
// console.log(`-------filter()method-----------`);
// const arrayNumers = [20,11,40,25,37,49,9,90,60,2,19];
// const arrayGreaterThanFifty = arrayNumers.filter((element) => {
//     return element>50;
// }) ;
// console.log(arrayGreaterThanFifty);
// const arrayEvenNumber = arrayNumers.filter((element) => {
//     return element%2 == 0;
// }) ;
// console.log(arrayEvenNumber);
// const arrayOddElement = arrayNumers.filter((element) => {
//     return element%2 != 0;
// }) ;
// console.log(arrayOddElement);
// const array = arrayNumers.filter((element) => {
//     return element%5 == 0;
// }) ;
// console.log(arrayMultipleOfFive);
// let n1 = 0;
// let n2 = 1;
// let num = 13;
// let temp;
// for (let index = 0; index < num; index++) {
//    console.log(n1);

//    temp = n1 + n2;
//    n1 = n2;
//    n2 = temp;

// };
// 'use strict';

// full_name = "Teju Ingale";
// console.log(full_name);
// 'use strict';
// person = {
//    firstName : "teju",
//    lastName : "Ingale",

// }
// console.log(person.firstName);
// function display(...num) {
//    console.log(num);
// };
// display(11,12,13);
// display(100);
// console.log(`---remove duplicate element fron array----`);

// const arrayNum = [11,42,56,11,33,89,33,42];
// const array = [...new Set(arrayNum)];
// console.log(array);
// console.log(`-----self invoking function ----`);
// (function() {
//    console.log("My Name Is Tejashvini");
// }());
// console.log(`----arrow function ---- `);
// let show = () => {
//    console.log(" Good Morning, Today is Friday");
// };
// show();
// let show1 = (num1,num2,num3 =1) => {
//    let num = num1*num2*num3;
//    console.log(num);
// };
// show1(5,5,2);
// show1(10,4);
// let show2 = (num1,num2,num3,num4,num5) => {
//    let num = num1+num2+num3+num4+num5;
//    console.log(num);
// };
// show2(100,100,200,349,756);
// show2("Good", " Morning"," I", " am", " Teju");
// console.log(`----clone object-------`);
// const emp = {
//    firstName : "Teju",
//    lastName : " Ingale",
// }
// const empClone = Object.assign({},emp);
// console.log(empClone);
// console.log(`----merge object-------`);
// const employee = {
//    firstName : "Teju",
//    lastName : " Ingale",
// }
// const empAddress = {
//    city : "Pune",
//    pincode : 413208,
// }
// const mergeObject = Object.assign({}, employee, empAddress);
// console.log(mergeObject);
console.log(`-------for each loop using an object------------`);
class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
const array_employee = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];
// array_employee.forEach((Employee) =>{
//    if (Employee.emp_company == "TCS") {
//       console.log(`${Employee.emp_name}, ${Employee.emp_company}`);
//    }
// })
// console.log(`-----log finance department ---`);
// array_employee.forEach((Employee) =>{
//    if (Employee.emp_dept == "Finance") {
//       console.log(`${Employee.emp_name}, ${Employee.emp_dept}`);
//    }
// })
// console.log(`-----log emp name strarswith r ---`)
// array_employee.forEach((Employee) =>{
//    if (Employee.emp_name.startsWith("R")) {
//       console.log(`${Employee.emp_name}`);
//    }
// })
// console.log(`-------------------------------`);
// array_employee.forEach((Employee) =>{
//    if (Employee.emp_salary>75000) {
//       console.log(`${Employee.emp_name}`);
//    }
// })
// console.log(`-------------------------------`);
// array_employee.forEach((Employee) =>{
//    if ((Employee.emp_salary>=50000) && (Employee.emp_dept == "IT")) {
//       console.log(Employee);
//    }
// })
// let sum = 0;
// array_employee.forEach((Employee) =>{
//    sum = sum + Employee.emp_salary;

// })
// console.log(sum);
// console.log(`---------------------`);
// let AverageSalary = 0;
// let sum1 = 0;
// array_employee.forEach((Employee) => {
//    sum1 = sum1 + Employee.emp_salary;
//    AverageSalary = sum1 / array_employee.length
// })
// console.log(AverageSalary);
// const mapEmployees = new Map();
// mapEmployees.set(22,emp_anil);
// mapEmployees.set(33,emp_radha);
// mapEmployees.set(55,emp_rishi);
// mapEmployees.set(66,emp_sonali);
// mapEmployees.set(77,emp_monika);
// mapEmployees.set(88,emp_viny);
// mapEmployees.set(99,emp_mahi);
// console.log(mapEmployees);
// mapEmployees.forEach((key, value) => {
//    console.log(`${key}, ${value}`);
// })

// console.log(`-------for each loop using an Array------------`);
// const arrayNumbers = [1,-7, 0,502,-77,91,0,108,89,-601];
// arrayNumbers.forEach((element,index) => {
//    console.log(`element is ${element} & its index is ${index}`);
// })
// console.log(`--------------------------`);
// arrayNumbers.forEach((element) =>{
//    if (element>0) {
//       console.log(`positive number is : ${element}`);
//    }
// })
// console.log(`--------------------------`);
// let newArray = [];
//  arrayNumbers.forEach((element) =>{
//    if (element<0) {
//       newArray = newArray+element;
//    }
// })
// console.log(`New array is: [${newArray}]`);
// console.log(`--------------------------`);
// let sum = 0;
//  arrayNumbers.forEach((element) =>{
//    sum = sum + element;
// })
// console.log(`sum of all element in given array is : ${sum}`);
// arrayNumbers.forEach((element,index) =>{
//    if (index%2 ==0) {
//      console.log(`Even position element is: ${element}`);
//    }
// })

console.log(`----------reduced method-----------`);
// const arrayNumbers = [12,25,36,455,865,478,23,45,36,25,985];
// const newArray = [...new Set(arrayNumbers)];
// console.log(newArray);
// const reduceMethod = arrayNumbers.reduce((runningTotal , value) => {
//     return runningTotal + value;
// });
// console.log(reduceMethod);
// const multipleOfFive = arrayNumbers.filter((element) => {
//     return element%5 == 0;
// })
// const itsSum = multipleOfFive.reduce((runningTotal, value) => {
//     return runningTotal + value;
// });
// console.log(itsSum);
// console.log(`-----------sort method----------`);
// const arrayNumbers = [12,25,36,455,865,478,23,45,36,25,985];
// const sortMethod = arrayNumbers.sort((n1, n2) => {
//     return n1 > n2 ? 1 : -1;
// });
// console.log(sortMethod);
// const sortMethods = arrayNumbers.sort((n1, n2) => {
//     return n1 > n2 ? -1 : 1;
// });
// console.log(sortMethods);
// let firstElement = sortMethods[0];
// console.log(firstElement);
// console.log(`--------sort mixed array---------`);
// const array = [10,45,36,"Sonu", "Rani","Geetu",85,96,"Tanu"];
// const arrayFilt = array.filter ((element) => {
//     return typeof element == 'number';
// });
// console.log(arrayFilt);
// const sortArrayFilt = arrayFilt.sort((n1,n2) => {
//     return n1> n2 ? 1 : -1;
// });
// console.log(sortArrayFilt);
// const arrayFiltS = array.filter ((element) => {
//     return typeof element == 'string';
// });
// console.log(arrayFiltS);
// const sortArrayFilts = arrayFiltS.sort((n1,n2) => {
//     return n1> n2 ? 1 : -1;
// });
// console.log(sortArrayFilts);
const array = [10, 20, 30, 45, 65, 78, 95];
// const firstElement = array[1];
// console.log(firstElement);
// array[4] = 70;
// console.log(array);
// const arrays = array.includes(45);
// console.log(arrays);
// for (let index =  array.length-1; index >= 0; index--) {
//     const element = array[index];
//     console.log(element);

// }
// const evenArray = array.filter((element,index)=> {
//     return index%2 ==0;
// });
// console.log(evenArray);
//  array.push(56);
// console.log(array);
// array.push(78,89,45);
// console.log(array);
// array.pop();
// console.log(array);
// array.unshift(63,56,98,45);
// console.log(array);
// array.shift();
// console.log(array);
// array.splice(2,0,100);
// console.log(array);
// let sliceArray = array.slice(3);
// console.log(sliceArray);
// array.splice(3,2,200,300,400);
// console.log(array);
// array.sort();
// console.log(array);
// array.reverse();
// console.log(array);
// const arrayString = ["sunday","monday","tuesday","wendesday","thirsday","friday","saturday"];
// for (let index = 0; index < arrayString.length; index++) {
//     const element = arrayString[index];
//     console.log(element);

// }
// let string = "good morning";
// for (const i in string) {
//    console.log(string[i]);
// };
// function squareOfWordLength(str) {
//    let stringLength=  str.length;
//    console.log(stringLength);

// }
// squareOfWordLength("JavaScript");
// squareOfWordLength("Google Chrome");
// squareOfWordLength("Developer Smart");

// function find() {
//     const str = "I am Angular Developer"
// console.log(str.length);
// const stringSplit = str.split(" ");
// console.log(stringSplit.length);
// const divide = str.length/stringSplit.length;
// console.log(divide);
// const multiplication = str.length*stringSplit.length;
// console.log(multiplication);

// }
// find();

// var num1 = 10;
// var num2 = -10;
// var num3 = 800;
// var num4 = 899;
// const greaterNumber = function cleckNum(value1, value2) {
//     var result = num1 > num2 ? `${num1} greater than ${num2}`: `${num2} greater than ${num1}`
//     var result1 = num3 > num4 ? `${num3} greater than ${num4}`: `${num4} greater than ${num3}`
//     console.log(result);
//     console.log(result1);
// };
// greaterNumber(num1,num2);
// let num1 = 29;
// let num2 = 44;
// const isEvenOrOddNum = function chechNum(value1) {
//     var result1 = (num1%2 == 0) ? `${num1} is even number` : `${num1} is odd number`
//     console.log(result1);

// }
// isEvenOrOddNum(num1)
// var gender1 = "Male";
// var age1 = 25;
// var boyName1 = "Billgates";

// function maleMarriageEligiblity(gender,age,boyName) {
//     var result = (gender1 == "Male" && age1>=20) ? `Hey ${boyName1} you are eligible for Marrige` :`Hey S{boyName1} you are not eligible for Marrige`
//     console.log(result);
// }
// maleMarriageEligiblity("Male", 25, "Billgates");

// const checkEligiblity = function tcsEligiblity(gradScore,hscScore,sscScore,candidateName) {

//     var result = (gradScore>=70 || hscScore>=80 || sscScore>90) ? `Congrates ${candidateName} you are eligible.` : `Congrates ${candidateName} you are not eligible.`
//     console.log(result);

// };
// checkEligiblity(80,86,90,"Teju");
// checkEligiblity(70,65,55,"Tanu");

// function show(num) {
//   switch (num) {
//     case 1:
//       console.log(` day is monday & day num is ${num}`);
//       break;
//     case 2:
//       console.log(` day is tuesday & day num is ${num}`);
//       break;
//     case 3:
//       console.log(` day is wenesday & day num is ${num}`);
//       break;
//     case 4:
//       console.log(` day is thirsday & day num is ${num}`);
//       break;
//     case 5:
//       console.log(` day is friday & day num is ${num}`);
//       break;
//     case 6:
//       console.log(` day is saturday & day num is ${num}`);
//       break;
//     case 7:
//       console.log(` day is sunday & day num is ${num}`);
//       break;
//       default :
//       console.log(`This is not a week day`);
//   }
// };
// show(8);
// console.log(`---------factorial of number-----------`);
// let factorial = 1;
// for (let index = 4; index >=1; index--) {
//     factorial = factorial* index;
    
// }
// console.log(factorial);
// console.log(`----------is palindrom or not --------`);
// function isPalindrom(str) {
//     let strSplit = str.split('');
//     let strReverse = strSplit.reverse();
//     let strJoin = strReverse.join('');
//     if (str == strJoin) {
//         console.log(` Given String "${str}" is Palindrom`);
//     } else {
//         console.log(` Given String "${str}" is not Palindrom`);
//     }
   
    
// }
// isPalindrom("MoM");
// isPalindrom("Light");
// isPalindrom("141");


// function isPrimeNumber(num) {
//     let isPrime = true;
//    for(index = 2; index< num; index++){
//     if (num % index == 0) {
//         isPrime = false;
//         console.log( `it is not prime coz given number is divisible of ${index}`);
//         break;
//     };
//    }
//    if (isPrime) {
//     console.log(`given numer is "${num}" is prime`);
// } else {
//     console.log(`given numer is "${num}" is not prime`);
// }
// };
// isPrimeNumber(9);
// let n1 = 0;
// let n2 = 1;
// let temp;
// function fibonacissSeries(num) {
//     for(index = 0; index<=12;index++){
//         console.log(n1);
//         temp = n1 + n2;
//         n1 = n2;
//         n2 = temp;
       
//     }
    
// }
// fibonacissSeries(12);

