

function kgToLbs (weight: number | string): number {// oarameter can be of type number or string
    // narrowing
    if(typeof weight === 'number' ){
        return weight * 2.2
    }else{
        return parseInt(weight) * 2.2
    }
}



kgToLbs(10)
kgToLbs('10kgs')