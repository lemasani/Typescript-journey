class Person {
    constructor(
        public firstName: string,
        public lastName: string,

    ) {}


    // getter
    get fullName(){
        return this.firstName + ' ' + this.lastName
    }

    walk(){
        console.log('I am walking')
    }
}

class Student extends Person{
    constructor(
        firstName: string,
        lastName: string,
        public studentID: string
    ){
        super(firstName, lastName)
    }

    takeTest(){
        console.log('Taking test')
    }
}

const student = new Student('John', 'Doe', '123')

console.log(student) // John Doe