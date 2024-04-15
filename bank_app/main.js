class BankAccount {
    constructor(accountNumber, ownerName, balance = 0) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount < 0) {
        console.log("Invalid deposit amount");
        return;
      }
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  
    withdraw(amount) {
      if (amount < 0) {
        console.log("Invalid withdrawal amount");
        return;
      }
      if (amount > this.balance) {
        console.log("Insufficient funds");
        return;
      }
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    }
  
    getBalance() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      console.log(`Balance: $${this.balance}\n`);
    }
  
    displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      console.log(`Balance: $${this.balance}\n`);
    }
  }
  
  
  const account1 = new BankAccount(1001, "Rafi Mushfic Fahim");
  const account2 = new BankAccount(1002, "Mimuna Akter Mim", 1000);
  

  account1.deposit(500);
  account1.withdraw(200);
  account1.getBalance();
  account1.displayAccountInfo();
  
  account2.deposit(200);
  account2.withdraw(1200);
  account2.getBalance();
  account2.displayAccountInfo();