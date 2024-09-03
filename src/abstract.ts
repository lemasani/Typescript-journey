

abstract class Shape {// abstract class makes that class not to be able to create instance of objects, but for other class to use its properties and methods
    constructor(
        public color: string
    ) {}

    abstract render(): void // abstract methods can only appear in abstract class
}


class Circle extends Shape {
    constructor(public radius: number, color: string){
        super(color)
    }

    override render(): void {
        console.log(`Drawing a circle with radius ${this.radius}`)
    }
}