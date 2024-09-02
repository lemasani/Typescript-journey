type Customer =  {
    birthdate?: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthdate: new Date() }
}

let customer = getCustomer(0)

// optioan property access operator
console.log(customer?.birthdate?.getFullYear())


//optiona element access operator used on arrays mostly
// customers?.[0]

// optional call
let log: any = null
log?.('a')