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



class Teacher extends  Person{

    // method overriding
    override get fullName(){
        return 'Professor ' + super.fullName
    }

}

const teacher = new Teacher('Max', 'wendsoffs')

console.log(teacher.fullName)
