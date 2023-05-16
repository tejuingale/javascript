

var str = "My Full Name is Tejashvini Ingale";
//console.log(`Given string :--> ${str}`);
var strlength = 6;
function squareOfWordLength(value1){
 var strSplit = str.split(" ");
// console.log(`Number of Word in given string: ${strSplit}`);
 //console.log(`Length of word in given string: ${strSplit.length} `);
 var result = strlength*strlength;
// console.log(`square of length of word in given string: ${result}`);
 //console.log(`1.2) Length of word in given string: ${strSplit.length} and its length square:  ${result}`);
 var st = "JavaScript";
 var stsplit = st.split(" ");
 var res = stsplit.length*stsplit.length;
 var ts = "Google Chrome";
 var tssplit = ts.split(" ");
 var res1 = tssplit.length*tssplit.length;
 var tr = "Developer Smart";
 var trsplit = tr.split(" ");
 var res2 = trsplit.length*trsplit.length;
 console.log(`1.3.1) word :  ${st}, its square: ${stsplit.length}  `);
 console.log(`1.3.2) word : ${ts},  its square: ${res1} `);
 console.log(`1.3.3) word : ${tr} , its square: ${res2} `);

}
squareOfWordLength(strlength);
console.log(/---------------------------------------/);


var strg = "I am Angular Developer";
function operator(){
    var strgsplit = strg.split(" ");
    var strglength = strg.length;
  
   /* console.log(`Total number of words in given strins: ${strgsplit}`);
    console.log(`length of total number of words in string: ${strgsplit.length}`);*/
    var result = 22/4;
    var result1 = 22*4;
    console.log(`Given string is: ${strg}`);
    console.log(`Length of given string: ${strglength}`);
    console.log(`2.1)  Division of length of string to the total number of word the in given string: ${result}`);
    console.log(`2.2) Multiplication of length of string to the total number of word the in given string: ${result1}`);
}
operator();