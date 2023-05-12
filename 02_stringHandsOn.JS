var st = "  Hey you are doing good, keep it up    ";
function stringHandsOn(){
    console.log("1. Given String is:", st);
   
    var stLength = st.length;
    console.log("2. Length of String is:",stLength);
  
    var stTrimLeadingSpace = st.trimStart();
    
    // console.log("Trim Start:",stTrimLeadingSpace);

    var stTrimTrailingSpace = st.trimEnd();
    // console.log("Trim End:",stTrimTrailingSpace);
     var stTrim = st.trim();
     var stTrim = st.trim();
    //  console.log(stTrim);
    
     var stTrimLength = stTrim.length;
    
     console.log("3. After remove leading and Trailing Extra Spaces Length is:  ", stTrimLength);

     console.log("4. Total Number of Removed Extra Spaces Count:  ",stLength-stTrimLength);
     var stTrimCharFirst = stTrim.charAt(0);
     var stTrimCharlast = stTrim.charAt(33);
     console.log("5. First and Last char of given string after remove extra spaces :  ",stTrimCharFirst,   stTrimCharlast);
     
    
   
}

stringHandsOn();