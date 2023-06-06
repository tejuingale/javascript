console.log(`1) log array element with its index`);
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((Element, index) => {
    console.log(`Element : ${Element} its index : ${index}`);
});
console.log(`2) positive numbers in the array`);
arrayNumbers.forEach((Element, index) => {
    
    if (Element>0) {
        console.log(Element);
    }
});
let array = [];
arrayNumbers.forEach((Element, index) => {
    
    if (Element<0) {
        array = array + Element; 
       
    }
});
console.log(`3) New Array :[ ${array}]`);
console.log(`4) Even numbers in the given array`);
arrayNumbers.forEach((Element, index) => {
    
    if (Element%2 ==0) {
        console.log(Element);
    }
});
console.log(`--------------------------------------------`);
let sum = 0;
arrayNumbers.forEach((Element, index) => {
 sum = sum + Element; 
});
console.log(`5) Sum of all elements from given array : ${sum}`);
console.log(`-----------6) Even indexed array value ---------------------------------`);
arrayNumbers.forEach((Element, index) => {
    
    if (index%2 ==0) {
        console.log(`index: ${index} & Element: ${Element}`);
    }
});

