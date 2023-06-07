const array_numerbs = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`----------by using reduced method --------------`);
const sumOfNumbers = array_numerbs.reduce((runningTotal, value) =>{
return runningTotal+value;
});
console.log(`1) sum of all numbers : ${sumOfNumbers}`);
const multipleOfFive = array_numerbs.filter((element) => {
    return element%5 == 0;
});
// console.log(multipleOfFive);
const sumOfMultipleOfFiveNumbers = multipleOfFive.reduce((runningTotal,  value)=> {
    return runningTotal+value; 
});
console.log(`2) Sum of all numbers which is multiple of 5 is : ${sumOfMultipleOfFiveNumbers}`);
