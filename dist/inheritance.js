"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // getter
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('I am walking');
    }
}
class Student extends Person {
    constructor(firstName, lastName, studentID) {
        super(firstName, lastName);
        this.studentID = studentID;
    }
    takeTest() {
        console.log('Taking test');
    }
}
const student = new Student('John', 'Doe', '123');
console.log(student); // John Doe
//# sourceMappingURL=inheritance.js.map