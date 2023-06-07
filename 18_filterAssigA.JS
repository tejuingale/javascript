const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
let elementGreaterThanFifty = arrayNumbers.filter((element) => {
    return element>50;
});
console.log(`1) all the number which is greater than 50 : [${elementGreaterThanFifty}]`);
console.log(`-------------------------------`);
let elementIsEven = arrayNumbers.filter((element) => {
    return element%2 == 0;
});
console.log(`2) all even number : [${elementIsEven}]`);
console.log(`-------------------------------`);
let elementIsOdd = arrayNumbers.filter((element) => {
    return element%2 != 0;
});
console.log(`3) all odd number : [${elementIsOdd}]`);
console.log(`-------------------------------`);
let elementIsMultipleOfFive = arrayNumbers.filter((element) => {
    return element%5 == 0;
});
console.log(`4) all numbers which is multiple of 5 : [${elementIsMultipleOfFive}]`);
console.log(`-------------------------------`);
let elementIsBetweenTwentyAndFifty = arrayNumbers.filter((element) => {
    return element>20 && element<50;
});
console.log(`5) all numbers which are between 20 & 50 : [${elementIsBetweenTwentyAndFifty}]`);