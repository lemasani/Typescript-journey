

let speed: number | null = null


let ride = {
    // falsy(undefined, null, '', false, 0)

    // nullish coalescing operator

    speed: speed ?? 30  //if speed is not null or undefined use speed otherwise use the default value 30
}