var eligibilityCheckForTCS = function eligibilityCheckForTCS(gradScore, hscScore, sscScore, candidateName) {
 if (gradScore>=70 || hscScore>=80 || sscScore>90) {
    console.log(`Congrates "${candidateName}"---> You are eligible for TCS interview`);
    
 } else {
    console.log(`"${candidateName}"---> You are not eligible for TCS interview`);
 }
    
}
eligibilityCheckForTCS(80, 86, 90, "Tejashvini");
eligibilityCheckForTCS(70, 65, 55, "Snehal");
eligibilityCheckForTCS(60, 79, 88,"Sandhya");