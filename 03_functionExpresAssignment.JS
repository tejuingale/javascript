var num1 = 5;
var num2 = 6;
var num3 = 25;
var num4 = 100;


var square = function(num1,num2, num3, num4){
  var result1 = num1*num1;
  console.log(`Square of 5 is: ${result1}`)
  var result2 = num2*num2;
  console.log(`Square of 6 is: ${result2}`)
  var result3 = num3*num3;
  console.log(`Square of 25 is: ${result3}`)
  var result4 = num4*num4;
  console.log(`Square of 100 is: ${result4}`)
  var typeOfSquare = typeof square;
  console.log(`Type of Function is: ${typeOfSquare}`);

}

square(5, 6, 25, 100);
var length = 499;
var width = 917;
var area = function(value1, value2){
    var result = value1*value2;
    console.log(`Area of rectangle plot: ${result}`);

}
area(length, width);
var first = "Virat";
var second = "Anushka";
var num1 = 1000;
var num2 = 2000;


var swapValues = function(value1, value2){
    
    
     console.log(`Before swap:"First Name:" ${first},"Second Name:" ${second} `);
     var temp = first;
     first = second;
     second = temp;
     console.log(`After swap:"First Name:" ${first},"Second Name:" ${second} `);
     console.log(`Before swap:"First Number:" ${num1},"Second Number:" ${num2} `);
     var temp = num1;
     num1 = num2;
     num2 = temp;
     console.log(`After swap:"First Number:" ${num1},"Second Number:" ${num2} `);
}
var stsplitlength = 7;
swapValues(first,second);
var st = "JS the most popular language of internet";
var method = function(num){
    var stLength = st.length;
    var stchatAtSixIndex = st.charAt(6);
    var stchatAtElevenIndex = st.charAt(11);
    var stLastChar = st.charAt(stLength-1);
    var stFirstChar = st.charAt("0");
    
    console.log(`A. Total Character Avaliable in the String: ${stLength}`);
    console.log(`B. Character at index 6: ${stchatAtSixIndex}`);
    console.log(`C. Character at index 11: ${stchatAtElevenIndex}`);
    console.log(`D. Last Character using Length Property: ${stLastChar}`);
    console.log(`E. First Character From The given String : ${stFirstChar}`);
    var stSplit = st.split(" ");


  
    console.log(`F a). Total number of Words in the given string : ${stSplit.length}`);
    var result = num*num;
    
    console.log( `F b). Square of Total number of words in given string : ${result}`);


}
 method(stsplitlength);


