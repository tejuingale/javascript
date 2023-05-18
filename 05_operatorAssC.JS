 var gradScore1 = 80;
 var hscScore1 = 86;
 var sscScore1 = 90;
 var name1 = "Tejashvini";
 var gradScore2 = 70;
 var hscScore2 = 65;
 var sscScore2 = 55;
 var name2 = "Sandhya";
 var gradScore3 = 60;
 var hscScore3 = 79;
 var sscScore3 = 88;
 var name3 = "Sakshi";
 console.log(/-----------------TCS Interview Eligiblity---------------------/);

function checkEligibilityForTcs(value1, value2, value3, value4){
    var result1 = (gradScore1>=70 || hscScore1>= 80 || sscScore1>90)? `Congrates ${name1} you are eligile for TCS interview` : `Unfortunately ${name1} you are not eligible for TCS interview`;
    console.log(`1.3.1) ${result1}`);
    console.log(/---------------------------------/);
    var result2 = (gradScore2>=70 || hscScore2>= 80 || sscScore2>90)? `Congrates ${name2} you are eligile for TCS interview` : `Unfortunately ${name2} you are not eligible for TCS interview`;
    console.log(`1.3.2) ${result2}`);
    console.log(/---------------------------------/);
    var result3 = (gradScore3>=70 || hscScore3>= 80 || sscScore3>90)? `Congrates ${name3} you are eligile for TCS interview` : `Unfortunately ${name3} you are not eligible for TCS interview`;
    console.log(`1.3.3) ${result3}`);
}
checkEligibilityForTcs(gradScore1,hscScore1, sscScore1, name1);