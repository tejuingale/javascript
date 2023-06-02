
console.log(`---------Original and cloned array on console-----------`);
const arrayNums = [20,3,4,56,90,400,49];
const cloneArrayNums = arrayNums;

console.log(`1.1) Original Array : ${arrayNums}`);
console.log(`1.2) Cloned Array : ${cloneArrayNums}`);
console.log(`------update cloned array with value 55 & 66 --------`);
cloneArrayNums.push(55,66);
console.log(cloneArrayNums);



// console.log(deepCloneArrayNums);


const deepCloneArrayNums = [...arrayNums];
arrayNums.push(10,25);
console.log(`2.1) Original Array : ${arrayNums}`);

console.log(`2.2) Cloned Array : ${deepCloneArrayNums}`);

const arrayEven = [2,30,14,8];
const arrayMerge = [...arrayEven, ...arrayNums];
console.log(`2) Merge two array : ${arrayMerge}`);
console.log(`--------Create the employee info ------------`);
const employee_info = {
    emp_id : 27,
    emp_name : "John Doe",
    Salary : {
        july_month : " 40,0000INR",
        aug_month : " 50,0000INR",
        jun_month : " 60,0000INR",

    },
    address : {
        locality : {
            colony : "OM Vrindavan Society",
            Street : " Kanch Pokli, 431202",
        },
        city : "Mumbai",
        State : "Maharastra",
        Country : "India"
    },
   mobiles : ["+91 8600 3456 88", " 1800-4567 32", "+91- 9096 5678 77"]
}
console.log(`----- 5. a)  log locality---------`);
console.table(employee_info.address.locality)
console.log(`----- 5. b)  log mobile number---------`);
console.log(employee_info.mobiles);
console.log(`------6 perform deep copy using JSON.stringfy-------------`);
const deepCloneEmployee = JSON.parse(JSON.stringify(employee_info));
console.log(`a.1) Original salary :${employee_info.Salary.july_month}`);

employee_info.Salary.july_month = "80,0000INR";
console.log(`a.2) Updated Salary :${employee_info.Salary.july_month}`);

console.log(`b.1) Original Country : ${employee_info.address.Country}`);

employee_info.address.Country = "United Kingdom";
console.log(`b.2) Updated Country : ${employee_info.address.Country}`);
// console.log(employee_info.address.Country)



