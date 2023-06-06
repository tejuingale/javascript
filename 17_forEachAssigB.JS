class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
const array_employee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`1) log employee name whose company is TCS`);
array_employee.forEach((Employee) => {
if (Employee.emp_company == "TCS") {
    console.log(`Employee Name : ${Employee.emp_name} and its Company : ${Employee.emp_company}`);
    
}
});
console.log(`-------------------------------------------------------------`);
console.log(`2) log employee whose salary greater than or equle to 50000 `);
array_employee.forEach((Employee) => {
    if (Employee.emp_salary >= 50000) {
        console.log(Employee);
        
    }
    });
    console.log(`-------------------------------------------------------------`);
   
    let sum = 0;
    array_employee.forEach((Employee) => {
       
        sum = sum + Employee.emp_salary;
        });
        console.log(`3) sum of salary of all employee: ${sum}`);
        console.log(`-------------------------------------------------------------`);
        let averageSalary = 0;
        array_employee.forEach((Employee) => {
            averageSalary = averageSalary + Employee.emp_salary;
            });
            let employeeAverageSalary =  averageSalary / array_employee.length;
            console.log(`4) average salary is : ${employeeAverageSalary}`);
            console.log(`-------------------------------------------------------------`);
            console.log(` employee detaile whose department is IT or HR and salary greater than or equle to 75000`);

            array_employee.forEach((Employee) => {
                if ((Employee.emp_dept == "IT" || Employee.emp_dept == "HR") && (Employee.emp_salary >= 75000)) {
                    console.log(Employee);
                    
                }
                });