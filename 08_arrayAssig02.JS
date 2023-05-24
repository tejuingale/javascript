const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
var arrayNumbersLength = arrayNumbers.length;
console.log(`1) total element avaliable in given array ia : ${arrayNumbersLength}`);
console.log(/-------------------------------------------------------/);


let firstIndexElement = arrayNumbers[0];
let lastIndexElement = arrayNumbers[arrayNumbersLength-1];
console.log(`2) first Element in given array is: ${firstIndexElement}, Last Element in given array is : ${lastIndexElement}`);
console.log(/-------------------------------------------------------/);

let thirdLastElement = arrayNumbers[arrayNumbersLength-3];
console.log(`3) Third Last Element in given array is : ${thirdLastElement}`);
console.log(/-----------------Even Number Element in Given array is--------------------------------------/);

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    var elespace = "";
    if (element%2 ==0) {
        let addElement = element + elespace;
        console.log(` Even Number Element in Given array is : ${addElement}`);
        
    }
}
console.log(/-----------------Odd Number Element in Given array is--------------------------------------/);
    
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    var elespace1 = "";
    if (element%2 !=0) {
        let addElement = element + elespace1;
        console.log(` Odd Number Element in Given array is : ${addElement}`);
        
    }

        
    }
    console.log(/-----------------Even Position Element in Given array is--------------------------------------/);
    for (let index = 0; index < arrayNumbers.length; index++) {
        const element = arrayNumbers[index];
        var elespace1 = "";
        if (index%2 ==0) {
            let addElement = element + elespace1;
            console.log(` Even Position Element in Given array is : ${addElement}`);
            
        }
            
        }
        console.log(/-----------------Odd Position Element in Given array is--------------------------------------/);
        for (let index = 0; index < arrayNumbers.length; index++) {
            const element = arrayNumbers[index];
            var elespace1 = "";
            if (index%2 !=0) {
                let addElement = element + elespace1;
                console.log(`Odd Position Element in Given array is : ${addElement}`);
                
            }
                
            }
           
            var sum = 0;
            for (let index = 0; index < arrayNumbers.length; index++) {
              
                const element = arrayNumbers[index];
                sum = element + sum;
                
               
                }
                console.log(`8)The sum of all element from given array : ${sum}`);
                console.log(/-------------------------------------------------------/);
                for (let index = 0; index < arrayNumbers.length; index++) {
                    const element = arrayNumbers[index];
                    var elespace1 = "";
                    if (element%5 ==0) {
                        let addElement = element + elespace1;
                        console.log(`9) The Number which is multiple of 5 is : ${addElement}`);
                        
                    }
                        
                    }
                    console.log(/-------------------------------------------------------/);
                    let arrayIncludes = arrayNumbers.includes(115);
                    console.log(`10) Is number 115 avaliable in given array :${arrayIncludes}`);
                    console.log(/-------------------------------------------------------/);
                    let arrayIncludesIn = arrayNumbers.includes(23);
                    console.log(`11) Is number 23 avaliable in given array :${arrayIncludesIn}`);
                    console.log(/-------------------------------------------------------/);

                  arrayNumbers.splice(3,0,55,66);
                    console.log(`12) Insert number 55 & 66 before index 3 : ${arrayNumbers}`);
                    console.log(/-------------------------------------------------------/);
                    arrayNumbers.splice(4,3);
                    console.log(`13) Delete 3 Element Staring from index  4 : ${arrayNumbers}`);

        
    
    
    
