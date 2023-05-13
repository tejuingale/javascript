var firstName = "Tejashvini";
var firstNameLength = firstName.length;
console.log("Total number of character in the string:",firstNameLength);
console.log(/------------------------------------/);

var chatAtZeroIndex = firstName.charAt(0);
console.log("zero index character:", chatAtZeroIndex);
console.log(/------------------------------------/);

var greet = "Good Morning";
var greetLength = greet.length;
console.log("Total numer of character in given string is:",greetLength);
console.log(/------------------------------------/);

var chatAtZeroIndex = greet.charAt(0);
console.log("character at 0 index:",chatAtZeroIndex)
console.log(/------------------------------------/);;

var charAtLastIndex = greet.charAt(greet.length-1);
console.log("char at last index:",charAtLastIndex);
console.log(/------------------------------------/);

var charAtIndexTwenty = greet.charAt(20);
console.log("char at index 20 is:",charAtIndexTwenty);
console.log(/------------------------------------/);

var firstName = "Tejashvini";
var  lastName = "  Ingale";
var concatString = firstName.concat(lastName);
console.log("Concat String is:",concatString);
console.log(/------------------------------------/);

var indexOfM = greet.indexOf("M");
console.log("Index of M is:", indexOfM);
console.log(/------------------------------------/);

var indexOfo = greet.lastIndexOf("0");
console.log("Last index of o is:",indexOfo);
console.log(/------------------------------------/);

var replaceValue = greet.replace("Morning", "Afternoon");
console.log("After replace:", replaceValue);
console.log(/------------------------------------/);

var firstName = "  Tejashvini   ";
var firstNameLength = firstName.length;
console.log("Before trim is:",firstNameLength);
console.log(/------------------------------------/);

var trimmedFirstName = firstName.trim();
var lengthAfterTrim = trimmedFirstName.length;
console.log("After trim first name is:",lengthAfterTrim);
console.log(/------------------------------------/);

console.log("Trimmed total spaces is:",firstNameLength-lengthAfterTrim);
console.log(/------------------------------------/);

var lastName ="   Ingale "
var lastNameTrimEnd = lastName.trimEnd();
console.log("Trim at end:",lastNameTrimEnd);

var greet = "Good Morning";
var includeResult = greet.includes("ing");
console.log("Is ing string available inside : ", includeResult);

var searchResult = greet.search("Mor");
console.log("Search result : ", searchResult);

var sliceResult = greet.slice(4, 6);
console.log("Slice Result is: ", sliceResult);

var subStringResult = greet.substring(4, 6);
console.log("Substring result is: ", subStringResult);

var greet = "Good Morning mate, How are you";
var resultSplit = greet.split(" ");
console.log(resultSplit);
console.log("Total number of words: ",resultSplit.length);

var resultSplit = greet.split(",");
console.log(resultSplit);
console.log("Total number parts: ",resultSplit.length);

var resultSplit = greet.split("");
console.log(resultSplit);
console.log("Total number of words: ",resultSplit.length);

console.log(`Total number parts ${resultSplit} Total number of words ${resultSplit} `);

