class Person {
    constructor(
        public firstName: string,
        public lastName: string,

    ) {}


    // getter
    get fullName(){
        return this.firstName + ' ' + this.lastName
    }

    protected walk(){ // protected makes the function to be inherited 
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
        this.walk() // the protected method is inherited in the student class
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

class Principle extends Person{
    override get fullName(){
        return 'Principal '+ super.fullName
    }
}

const teacher = new Teacher('Max', 'wendsoffs')

console.log(teacher.fullName)


// polymorphism
printNames([
    new Student('Max', 'smith', '123'),
    new Teacher('Mosh', 'Doe'),
    new Principle('Somethn', 'Wendsoffs')
])

function printNames(people: Person[]){
    console.log('Printing Names....')
    people.forEach(person => console.log(person.fullName))
}