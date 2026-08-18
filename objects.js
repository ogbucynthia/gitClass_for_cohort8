const obj = {
    name: `OGBU UZOMA ESTER`,
    gender:`non-binary`,
    age: 30,
    complextion: `dark`,
};

//adding props to the object
let phone = {
    brand: "samsung",
    model: "Galaxy S22",
    price: 350000
};

phone.color = "Black";
console.log(phone);

let student = {
    name: "Godwin",
    regNo : "C8/001",
    course: "JavaScript",
    year: 2024,
    friends: ["John", "Jane", "Doe"]
}
console.log(student);
student.gender = "male"
console.log(student);
student.course = "Node.js"
console.log(student);
delete student.year
console.log(student);

let employee = {
    name: "tunde Balogun",
    role: "Frontend Developer",
    salary: 450000,
    city: "Lagos",
};

let hisName = employee.name;
let hisRole = employee.role;
let hisSalary = employee.salary;
let hisCity = employee.city;

const {name, role, salary, city} = employee;
console.log(employee);

const { name:useName, role:useRole, salary:useSalary, city:useCity } = employee;

let DNA = {
    gender : "XY",
    complextion : "Dark"
}

let offSpring = {
    ...DNA,
    name : "OGBU UZOMA ESTHER",
    age : 30
}    
console.log(offSpring);

console.log(Object.keys(offSpring));
console.log(Object.values(offSpring))
console.log(Object.entries(offSpring))

