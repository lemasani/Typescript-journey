interface Vehicle {
    make: string;
    model: string;
    year: number;
}

class Car implements Vehicle {
    constructor(public make: string, public model: string, public year: number) {}

    // method that returns the car's make and model
    getCarInfo(): string{
        return `${this.make} ${this.model}`;
    }
}

const car = new Car('Toyota', 'Corolla', 2020);
console.log(car.getCarInfo()); // Toyota Corolla


// generics  -- reverse the order of the elements in an array

function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
}
const numberArray = [1, 2, 3, 4];
const stringArray = ['a', 'b', 'c', 'd'];

console.log('Reverse Array',reverseArray(stringArray)); // [4, 3, 2, 1]


//union types 

function logMessage(message: string | number){
    if(typeof message === 'string'){
        return `String ${message}`
    }else{
        return `Number ${message}`
    }
}

console.log(logMessage(245));


// Enums

enum Status {
    Active,
    Inactive,
    Suspended
}

function getStatusMessage(status: Status){
    console.log(status);
    if(status === Status.Active){
        return 'Account is active';
    } else if(status === Status.Inactive){
        return 'Account is inactive';
    } else if(status === Status.Suspended){
        return 'Account is suspended';
    }
}

console.log(getStatusMessage(Status.Active));


// optional and defauls parameters

function greet(name: string, age?: number): string{
    return `Hello ${name}! ${age ? `You are ${age} years old` : ''}`;
}

console.log(greet('John')); // Hello John! You are 25 years old

// tuples

let coordinates: [number, number] = [23, 45];
function getCordinates(){
  let Latitudes =  coordinates[0]
    let Longitudes = coordinates[1]

    return `the coordinates: ${Latitudes}  ${Longitudes}`
}

console.log(getCordinates());