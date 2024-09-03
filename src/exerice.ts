
// qn 1 Define a class called Logger that takes the name of a le in its constructor and provides a method for writing messages to that le. Don’t worry about the actual le I/O operations. Just de ne the class with the right members.

class Logger {
    constructor(public name: string){}

    writeMessage(message: string): void {
        console.log(`[${this.name}] ${message}`);
    }
}


// qn2 create a getter for getting fullname of a person
class Persons {
    constructor(
        public firstName: string,
        public lastName: string,
    ){}

    //getter for getting fullname of persons
    get fullname(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// qn 3 create employee class extending from person and add a salary property

class Employee extends Persons{
    constructor(public salary: number, firstName: string, lastName: string){ 
        super(firstName, lastName)
    }
}

// qn 4 difference btn private and protected

// private property or method can not be inherited by another class but protected can


// qn 5 create inteface for Employee object
interface Address{
    street: string,
    city: string,
    zipCode: number
}

interface Employees {
    name:string,
    salary:number,
    address: Address
}

let employees: Employees = {
    name: 'John Doe',
    salary: 5000,
    address: {
        street: '123 Main St',
        city: 'New York',
        zipCode: 10001
    }
}

console.log(employees)

