
// creating a class

class Account {
    readonly id: number
    owner: string
    private _balance: number
    nickname?: string // makes this property optional and no need to add it on the constructor

    constructor(id: number, owner: string, balance: number){
        this.id = id
        this.owner = owner
        this._balance = balance
    }

    deposit(amount:number): void{
        if(amount <= 0){
            throw new Error('Invalid amount')
        }
        this._balance += amount
    }

    getBalance(): number {
        return this._balance
    }
}

// creating object
let account = new Account(1, 'John doe', 0)
account.deposit(100)

console.log(account.getBalance()) // 100