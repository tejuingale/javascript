professor = {
    name : " Junsin Yi",
    education : " PHD ",
    gender : "Male",
    age : "50",
    subject : "Physics",
    city : "Soul",
    
    degrees: {
        engineering : "CSC",
        PHD : "Adv Computing",
        masters : "Computer Science",
        graduation : "Statistics",
   
     certificates : ["Hacker Rank Participation","Certificate in IFF course", "Certificate in Adv Programming"],
     
    addDegrees : function (totalDegree) {
       // `Person Details: Name ${this.name}, City: ${this.city} Age: ${this.age}`
        console.log(
            `1) Teacher Degrees  &  Total Degrees are :--> Engineering: ${this.engineering}, PHD: ${this.PHD}, Masters: ${this.masters}, Graduation: ${this.graduation}`
            );
    
        
    }
},

   
}
professor.degrees.addDegrees();
console.log(/------------------add new property like totalExprience---------------/);
 professor.totalExprience = "14 years";
console.log(`2)Total Exprience is :${ professor.totalExprience }`);
professor.totalExprience = "14 years";
console.log(/------------before modifing -------------------/);
console.log(professor);
professor.age = "55";
console.log(/------------after modifing age of professor is-------------------/);
console.log(professor);
console.log(/------------after adding new property-------------------/);
professor.degrees.certificates.push("Oracle Certificate");
console.log(professor.degrees.certificates);
let arrayLength = professor.degrees.certificates.length;
// console.log(`Length of array is : ${arrayLength}`);
console.log(/------------Accessing Last element of array-------------------/);
let lastElement = professor.degrees.certificates[3];
console.log(`5) Last Element of array : ${lastElement}`);













