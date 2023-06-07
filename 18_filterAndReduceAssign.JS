class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
const employeeCompanyWipro = array_employees.filter((Employee) =>{
    return Employee.emp_company == "Wipro";

});
// console.log(employeeCompanyWipro);

let employeeNames = employeeCompanyWipro.map((Employee) =>{
   return Employee.emp_name;
});
console.log(`1) all employee from Wipro : [${employeeNames}]`);
console.log(`---------------------------------------------`);
let employeeDepartment = array_employees.filter((Employee) =>{
    return Employee.emp_dept == "IT" || Employee.emp_dept == "HR";

});
// console.log(employeeDepartment);

let employeeItOrHr = employeeDepartment.map((Employee) =>{
   return Employee.emp_name;
});
console.log(`2) all employee from IT or HR : [${employeeItOrHr}]`);
console.log(`---------------------------------------------`);
let employeeID = array_employees.filter((Employee) =>{
    return Employee.emp_id>50;

});
// console.log(employeeDepartment);

let employeeIdGreaterThanFifty = employeeID.map((Employee) =>{
   return Employee.emp_name;
});
console.log(`3) all employee name whose id greater than 50 : [${employeeIdGreaterThanFifty}]`);
console.log(`---------------------------------------------`);
let employeeNameStartsWith = array_employees.filter((Employee) =>{
    return Employee.emp_name.startsWith("A") || Employee.emp_name.startsWith("V") ||Employee.emp_name.startsWith("M");

});
// console.log(employeeNameStartsWith);

let employeeNameStartAVM = employeeNameStartsWith.map((Employee) =>{
   return Employee.emp_name;
});
console.log(`4) all employee name starts with letter A,V,M is : [${employeeNameStartAVM}]`);
console.log(`---------------------------------------------`);
let employeeAvarageSalary = array_employees.filter((Employee) =>{
    return Employee.emp_salary;

});
// console.log(employeeAvarageSalary);
let averageSalary = 0;
employeeAvarageSalary.forEach((Employee) =>{
    averageSalary = averageSalary + Employee.emp_salary; 
});
let averageSalarySum = averageSalary/employeeAvarageSalary.length;
console.log(`5) average salary of the employee for all department is : ${averageSalarySum}`);
console.log(`---------------------------------------------`);
let employeeFromIt = array_employees.filter((Employee) =>{
    return Employee.emp_dept == "IT";

});
let averitAverageSalaryageSalary = 0;
employeeFromIt.forEach((Employee) =>{
    averitAverageSalaryageSalary = averitAverageSalaryageSalary + Employee.emp_salary; 
});
let itdepatrmentAverageSalary = averitAverageSalaryageSalary/employeeFromIt.length;
console.log(`6) average salary of the employee from IT department is : ${itdepatrmentAverageSalary}`);
