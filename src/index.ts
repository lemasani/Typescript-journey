// functions in typescript

function calculateTax(income: number, taxYear: number): number {// here returns number // if return type is not defined it returns void type 
    
    if (taxYear < 2022)
        return income * 0.05;
    return income * 1
}

calculateTax(10_000, 2022)


// if am to make a parameter optional
function calculateTax2(income: number, taxYear?: number): number {// the ? makes it optional
    
    if (( taxYear || 2022) < 2022)
        return income * 0.05;
    return income * 1
}

calculateTax2(10_000)
