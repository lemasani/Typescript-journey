"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // method that returns the car's make and model
    getCarInfo() {
        return `${this.make} ${this.model}`;
    }
}
const car = new Car('Toyota', 'Corolla', 2020);
console.log(car.getCarInfo()); // Toyota Corolla
// generics  -- reverse the order of the elements in an array
function reverseArray(array) {
    return array.reverse();
}
const numberArray = [1, 2, 3, 4];
const stringArray = ['a', 'b', 'c', 'd'];
console.log('Reverse Array', reverseArray(stringArray)); // [4, 3, 2, 1]
//union types 
function logMessage(message) {
    if (typeof message === 'string') {
        return `String ${message}`;
    }
    else {
        return `Number ${message}`;
    }
}
console.log(logMessage(245));
// Enums
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
    Status[Status["Suspended"] = 2] = "Suspended";
})(Status || (Status = {}));
function getStatusMessage(status) {
    console.log(status);
    if (status === Status.Active) {
        return 'Account is active';
    }
    else if (status === Status.Inactive) {
        return 'Account is inactive';
    }
    else if (status === Status.Suspended) {
        return 'Account is suspended';
    }
}
console.log(getStatusMessage(Status.Active));
// optional and defauls parameters
function greet(name, age) {
    return `Hello ${name}! ${age ? `You are ${age} years old` : ''}`;
}
console.log(greet('John')); // Hello John! You are 25 years old
// tuples
let coordinates = [23, 45];
function getCordinates() {
    let Latitudes = coordinates[0];
    let Longitudes = coordinates[1];
    return `the coordinates: ${Latitudes}  ${Longitudes}`;
}
console.log(getCordinates());
//# sourceMappingURL=index.js.map