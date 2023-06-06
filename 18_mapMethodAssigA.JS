console.log(`1) Add 10 into each element of array`);

const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
const arrayAdd = arrayNumbers.map((element) => {
    return element + 10;
});
console.log(arrayAdd);
console.log(`2) square each array element`);

const arrayNumbers1 = [20,11,40,25,23,11,9,31,60,2,19];
const arraySquare = arrayNumbers.map((element) => {
    return element * element;
});
console.log(arraySquare);
console.log(`3) add index value into its corresponding each array element`);

const arrayNumbers2 = [20,11,40,25,23,11,9,31,60,2,19];
const arrayAddIndexValue = arrayNumbers.map((element, index) => {
    return element + index;
});
console.log(arrayAddIndexValue);