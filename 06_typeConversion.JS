

console.log(/-----------------Implicit conversion to string----------/);
var st1 = '3';
var st2 = 2;
var result = ( '3' + 2);// + used for concatination
console.log(`1. ${result}`);
var st1 = '3';
var st2 = true;
var result1 = ( '3' + true);// + used for concatination
console.log(`2. ${result1}`);
var st1 = '3';
var st2 = undefined;
var result2 = ( '3' + undefined);// + used for concatination
console.log(`3. ${result2}`);
var st1 = '3';
var st2 = null;
var result3 = ( '3' + null);// + used for concatination
console.log(`4. ${result3}`);
console.log(/-----------------------------------------------------/);

console.log(/-----------------Implicit Boolean conversion to Number----------/);
var sr1 = '4' - true;//In Boolean true = 1 & false = 0
console.log(`5.   ${sr1}`);
var sr1 = '9' - true;
console.log(`6.   ${sr1}`);
var sr1 = '3' - true;
console.log(`7.   ${sr1}`);
var a = '4';
var b = false;
console.log(`4.1.1) ${typeof a}`);
console.log(`4.1.1) ${typeof b}`);
var sr1 = '4' - false;
console.log(`8.   ${sr1}`);
console.log(`4.1) ${typeof sr1}`);
console.log(/-----------------Implicit string conversion to Number----------/);
var a = '4';
var b = '2';
console.log(`5.1.1) ${typeof a}`);
console.log(`5.1.1) ${typeof b}`);
var sr1 = '4' - '2';
console.log(`5.   ${sr1}`);
console.log(`5.1) ${typeof sr1}`);
console.log(/-----------------undefined used with number,boolean or null given NaN ----------/);
var a = 4;
var b = undefined;
var c = null;
var rt2 = (null == undefined);
var rt3 = (null === undefined);
console.log(`*** ${rt2}`);
console.log(`### ${rt3}`);
console.log(`6.1.1) ${typeof a}`);
console.log(`6.1.1) ${typeof b}`);
var sr1 = 4 - undefined;
console.log(`6.   ${sr1}`);
console.log(`6.1) ${typeof sr1}`);
console.log(/-----------------Convert number string valur to Number ----------/);
var s = '324';
var result = Number('324');
console.log(`7.1.1) ${typeof s}`);
console.log(`7.1) ${result}`);
var s = '324e-1';
var result1 = Number('324e-1');
console.log(`7.2) ${result1}`);
console.log(/-----------------Convert number string valur to Number ----------/);
var s = true;
var result = Number(true);
console.log(`8.1.1) ${typeof s}`);
console.log(`8.1) ${result}`);
console.log(`8.1.1) ${typeof result}`);
console.log(/-----------------Invalid string to Number ----------/);
var tr = "Hello";
var tr1 = Number("Hello");
console.log(`9.1 ${tr1}`);

