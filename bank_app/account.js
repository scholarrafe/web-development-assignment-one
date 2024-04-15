class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount} into account number ${this.accountNumber}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount} from account number ${this.accountNumber}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}


const account1 = new BankAccount(1001, "John Doe", 1000);
const account2 = new BankAccount(1002, "Jane Smith", 500);


account1.deposit(200);
account1.withdraw(300);
console.log("Account 1 Balance:", account1.getBalance());
account1.displayAccountInfo();

account2.withdraw(600);
console.log("Account 2 Balance:", account2.getBalance());
account2.displayAccountInfo();
