console.log(`---------------1) Vehicle Class -------------`);

class Vehicle {
    constructor(name, color, model, type, price,) {
        this.name = name;
        this.color = color;
        this.model = model;
        this.type = type;
        this.price = price;

    }
    showDetails() {
        console.log(`Details od the Vehicle : Name=> ${this.name}, Color=> ${this.color}, Model=> ${this.model}, Type=> ${this.type}, Price=> ${this.price}  `);


    }
}
const Thar = new Vehicle("Mahindra", "Marun", "BMW Z4", "SUV", " Rs. 17lack");
const Nexon = new Vehicle("Tata", "White", "Breza", "SUV", "Rs. 11lack");
const Punch = new Vehicle("Tata", "Black", "Punch", "SUV", "Rs. 13lack");
const Scorpio = new Vehicle("Maruti", "Gray", "Nexon", "SUV", "Rs. 10lack");
const BMW = new Vehicle("BMW", "Graphite Gray", "Thar", "SUV", "Rs. 60.30lack")

Thar.showDetails();
Nexon.showDetails();
Punch.showDetails();
Scorpio.showDetails();
BMW.showDetails();



console.log(`-----------------2) All college Details------------------- `);

class College {
    constructor(collegeName, city, department, Contact) {
        this.collegeName = collegeName;
        this.city = city;
        this.department = department;
        this.Contact = Contact;

    }
}
const C1 = new College("Dayanand College", "Pandharpur", "Mathematics", "21895673");

const C2 = new College("KBP College", "Solapur", "Earth Science", "8765339256");

const C3 = new College("Valchand College", "Solapur", "Social Science", "8675465329");

const C4 = new College("Sangmeshwar College", "Solapur", "Arts, Science,& Commerce", "2477624393");

traverse(C1);
console.log(`----------------------`);

traverse(C2);
console.log(`---------------------`);

traverse(C3);
console.log(`--------------------`);

traverse(C4);
console.log(`--------------------------`);



function traverse(collegeObject) {

    for (const key in collegeObject) {

        if (Object.hasOwnProperty.call(collegeObject, key)) {
            const element = collegeObject[key];
            console.log(`${key} : ${element}`);

        }


    }
}
