


function countCharA(givenString) {
    var count = 0;
    for (let index = 0; index < givenString.length; index++) {
      
        if (givenString.charAt(index) == 'a' || givenString.charAt(index)  == 'A') {
            // console.log(char);
            count++;
         
           
            
        }
        
    }
    return count;
  
    
}
var result = countCharA("I AM Learing JavaScript, The Language of internet")
console.log(`Given String :"I AM Learing JavaScript, The Language of internet" `);
console.log(`Total Number of Char 'a' & 'A' in given String : ${result}`);
console.log(/------------------------------------/);
var result1 = countCharA("My Favourite movie is LAggAn");
console.log(`Given String :"My Favourite movie is LAggAn" `);
console.log(`Total Number of Char 'a' & 'A' in given String : ${result1}`);


