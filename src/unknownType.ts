// use unknown type instead of the any type

function render (document: unknown){

    // Narrowing
    if(typeof document === 'string')
        document.toLowerCase()

    // thses bring error without narrowing
    document.move()
    document.fly()
}