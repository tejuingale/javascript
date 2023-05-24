function factorialOfNum(number) {
    if (number == 0) {
        console.log(`Factorial of ${number} is : 1`);
    }
    if (number == null || number == undefined) {
        console.log(`invalid input : ${number} `);
      
    }
    else {
        var factorial = 1;
        for (let index = 1; index <= number; index++) {

            factorial = factorial * index;
        }
        return factorial;
    }

}
var fact = factorialOfNum(5)
console.log(`Factorial of 5 is : ${fact}`);

factorialOfNum(5)
var fact = factorialOfNum(3)
factorialOfNum(3)
console.log(`Factorial of 3 is : ${fact}`);

factorialOfNum(null)
var fact = factorialOfNum(8)
factorialOfNum(8)
console.log(`Factorial of 8 is : ${fact}`);

factorialOfNum(undefined)
var fact = factorialOfNum(9)
factorialOfNum(9)
console.log(`Factorial of 9 is : ${fact}`);

// var f = factorialOfNum(0)
factorialOfNum(0)
// console.log(`Factorial of 0 is = ${f}`);
