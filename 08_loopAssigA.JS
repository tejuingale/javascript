console.log(/--------------- 1. Count the total number of vowel in given string--------------------/);
var word = "I am very good IT Developer";
console.log(`Given String : ${word}`);
var count = 0;
for (let index = 0; index < word.length; index++) {
  var char = word.charAt(index);
  if (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    //console.log(char);
    count++;
  }
}
console.log(`1.2) Count Total Number of Vowels in the given String: ${count}`);
console.log(/------------------------------------------/);
console.log(/--------------- 2. Sum of cube of number from 1 to 5--------------------/);
var sum = 0; 

 function sumOfCube(value1) {
    
    for(let index = 1; index<=5; index++){
       if (index == 1) {
        var result1 =index*index*index;
        console.log(`Cube of 1 : ${result1}`); 
        
       } else {
        if (index == 2) {
            var result2 =index*index*index;
            console.log(`Cube of 2 : ${result2}`); 
            
           }else{
            if (index == 3) {
                var result3 =index*index*index;
                console.log(`Cube of 3 : ${result3}`); 
                
               }else{ if (index == 4) {
                var result4 =index*index*index;
                console.log(`Cube of 4 : ${result4}`); 
                
               }else{
                if (index == 5) {
                    var result5 =index*index*index;
                    console.log(`Cube of 5 : ${result5}`); 
                    
                   }
               }
             }
              
           }
        
       }
           
       
    }
    var   sum =result1+result2+result3+result4+result5;
    console.log(`Sum of Cube of numbers from 1 to 5 : ${sum}`);
   
  
 }

 sumOfCube(1,1,1);
 console.log(/--------------- 3. odd position Character and not consider empty spaces--------------------/);

 function oddPositionedChars(givenString) {
  var str = "";
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

