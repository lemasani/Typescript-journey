// represents the list of related constants

const small =1 
const medium = 2
const large = 3

 const enum Size { // if defined as const it make the complier shortify the size of the javascript
    small = 1,  // default value is 0, but we can change it and the rest are incremented by 1
    medium,
    large
}

// Usage
let mySize: Size = Size.small

console.log(mySize) // 1
