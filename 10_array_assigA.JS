 const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
 let arrayLength = arrayFruits.length;
 //console.log(arrayLength);
  let firstIndexElementArrayFruits= arrayFruits[0];
  console.log(/--------------- First Element of given array-----------------/);
  console.log(`1.1) First element of given array is : ${firstIndexElementArrayFruits}`);

  let LastIndexElementArrayFruits= arrayFruits[4];
  console.log(/--------------- Last Element of given array-----------------/);
  console.log(`1.2) Last element of given array is : ${LastIndexElementArrayFruits}`);
  console.log(/--------------- Add Element Papaya before banana-----------------/);

  let arrayAddPapayaBeforeBanana = arrayFruits.unshift("Papaya");
  console.log(`2.1) given array : ${arrayFruits}`);
  
  console.log(/--------------- Remove Mango from the array-----------------/);
let arraySpiceOfThree = arrayFruits.splice(4,1);
console.log(`3.1) remove element : ${arraySpiceOfThree}`);
console.log(`3.2) given array : ${arrayFruits}`);
console.log(/--------------- insert Element pianeapple at the last Position-----------------/);

arrayFruits.push("Pineapple");
console.log(`4.1) given array : ${arrayFruits}`);
console.log(/---------------insert Element Dragoan Fruit Before "Water Melon"-----------------/);


arrayFruits.splice(4,0,"Dragon Fruit");
console.log(`5) ${arrayFruits}`);
console.log(/--------------- Replace Element Orange with Kiwi-----------------/);

arrayFruits.splice(2,1,"Kiwi");
console.log(`6) ${arrayFruits}`);


console.log(/--------------- Element from index 1 to 4-----------------/);
let arraySubArray = arrayFruits.slice(1,5);
console.log(`7) Element Starts from index 1 to 4: ${arraySubArray}`);
console.log(/--------------- Last Element-----------------/);
let arraySubArrayLastElement = arrayFruits.slice(4, 8);

console.log( `8) Array Last 3 Element: ${arraySubArrayLastElement}`);



