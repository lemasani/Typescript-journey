
// creating a class

class Account {
   
    nickname?: string // makes this property optional and no need to add it on the constructor

    constructor(
        public readonly id: number,
        public owner: string, 
        private _balance: number
    ){}

    deposit(amount:number): void{
        if(amount <= 0){
            throw new Error('Invalid amount')
        }
        this._balance += amount
    }


    // getter
    get balance(): number {
        return this._balance
    }

    // setter
    // set balance(value: number){
    //     if(value < 0){
    //         throw new Error('Invalid balance')
    //     }
    //     this._balance = value
    // }
}

// creating object
let account = new Account(1, 'John doe', 0)
account.deposit(100)

console.log(account.balance) // 100