type Employee = { // defines the shape of the object
    readonly id: number, // this make the property not editable
    name: string,
    retire: (date: Date)=> void
}

let employee: Employee = {
    id: 1,
    name: 'Max',
    retire: (date: Date) => {console.log(date)}
}


 