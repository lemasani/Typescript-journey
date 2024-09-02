"use strict";
// creating a class
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
}
// creating object
let account = new Account(1, 'John doe', 0);
account.deposit(100);
console.log(account.getBalance()); // 100
//# sourceMappingURL=classes.js.map