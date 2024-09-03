"use strict";
// qn 1 Define a class called Logger that takes the name of a le in its constructor and provides a method for writing messages to that le. Don’t worry about the actual le I/O operations. Just de ne the class with the right members.
class Logger {
    constructor(name) {
        this.name = name;
    }
    writeMessage(message) {
        console.log(`[${this.name}] ${message}`);
    }
}
// qn2 create a getter for getting fullname of a person
class Persons {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //getter for getting fullname of persons
    get fullname() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// qn 3 create employee class extending from person and add a salary property
class Employee extends Persons {
    constructor(salary, firstName, lastName) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
let employees = {
    name: 'John Doe',
    salary: 5000,
    address: {
        street: '123 Main St',
        city: 'New York',
        zipCode: '10001'
    }
};
console.log(employees);
//# sourceMappingURL=exerice.js.map