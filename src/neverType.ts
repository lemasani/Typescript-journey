
function processEvents(): never{
    while (true){
        // Read message in the queue
    }
}

processEvents()
console.log('hellow') // this wont be executed since processEvents never returnss
