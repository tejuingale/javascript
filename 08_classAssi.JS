var str = "Hello how are you doing";
var sum = 0
var reverseword = "";
for(index = str.length-1;index>=0;index--){
  var char = str.charAt(index);
  reverseword = reverseword.concat(char);
  //console.log(char);
 
  

}
console.log(reverseword);

var str = "";

function oddPositionedChars(givenString) {
  for(index= 0; index<givenString.length;index++){
   var char = givenString.charAt(index);
   if(index%2 !=0 && char!= " "){
    str = str + char;
    
   }
  
  }
 
  console.log(str);
  
}

oddPositionedChars("Soon I will be Angular IT Champ");
oddPositionedChars("Hard work always pays back");

 





