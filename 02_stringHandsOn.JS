var st = "  Hey you are doing good, keep it up    ";
function stringHandsOn(){
    // console.log("1. Given String is:", st);
    console.log(`1. Given String is: ${st}`);
   
    var stLength = st.length;
    // console.log("2. Length of String is:",stLength);
    console.log(`2. Total Length of String is: ${stLength}`);
  
    var stTrimLeadingSpace = st.trimStart();
    
    // console.log("Trim Start:",stTrimLeadingSpace);

    var stTrimTrailingSpace = st.trimEnd();
    // console.log("Trim End:",stTrimTrailingSpace);
     var stTrim = st.trim();
     var stTrim = st.trim();
    //  console.log(stTrim);
    
     var stTrimLength = stTrim.length;
    
    //  console.log("3. After remove leading and Trailing Extra Spaces Length is:  ", stTrimLength);
    console.log(`3. After remove leading and Trailing Extra Spaces Length is: ${stTrimLength} `);
var stLenstTrimLengthgth = stLength-stTrimLength;
      console.log("4. Total Number of Removed Extra Spaces Count:  ",stLenstTrimLengthgth);
    // console.log(`4. Total Number of Removed Extra Spaces Count: ${stLenstTrimLengthgth}`);
     var stTrimCharFirst = stTrim.charAt(0);
     var stTrimCharlast = stTrim.charAt(33);
      console.log("5. First and Last char of given string after remove extra spaces :  ",stTrimCharFirst,   stTrimCharlast);
     //console.log(`5. First and Last char of given string after remove extra spaces : ${stTrimCharFirst,  stTrimCharlast}`);
    
     var stTrimSplit = stTrim.split(" ");
     // console.log(stTrimSplit);
     console.log(`6. Total Number of words avaliable in the string: ${stTrimSplit.length}`);
     var stTrimIndexOf = stTrim.indexOf("good");
     console.log(`7. Index of Word Good is: ${stTrimIndexOf}`);

     var stTrimSubstring = stTrim.substring("22");
     var stTrimslice = stTrim.slice("22");
     var stTrimEndWith = stTrim.endsWith("up");
     var stTrimStartWith = stTrim.startsWith("Hey");

     //console.log(stTrimSubstring);
     console.log(`8 a).Substring strating from index 22 by using substring Method: ${stTrimSubstring}`);
     console.log(`8 b).Substring strating from index 22 using slice Method: ${stTrimslice}`);
     console.log(`9. String is ends with the word "up": ${stTrimEndWith}`);
     console.log(`10. String is Starts with the word "Hey": ${stTrimStartWith}`);

}

stringHandsOn();