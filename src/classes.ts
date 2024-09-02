
// creating a class

class Account {
    id: number
    owner: string
    balance: number

    constructor(id: number, owner: string, balance: number){
        this.id = id
        this.owner = owner
        this.balance = balance
    }

    deposit(amount:number): void{
        if(amount <= 0){
            throw new Error('Invalid amount')
        }
        this.balance += amount
    }


}

// creating object
let account = new Account(1, 'John doe', 0)
account.deposit(100)

console.log(account.balance) // 100