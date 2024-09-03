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
class Teacher extends Person {
    // method overriding
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
class Principle extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
const teacher = new Teacher('Max', 'wendsoffs');
console.log(teacher.fullName);
printNames([
    new Student('Max', 'smith', '123'),
    new Teacher('Mosh', 'Doe'),
    new Principle('Somethn', 'Wendsoffs')
]);
function printNames(people) {
    console.log('Printing Names....');
    people.forEach(person => console.log(person.fullName));
}
//# sourceMappingURL=inheritance.js.map