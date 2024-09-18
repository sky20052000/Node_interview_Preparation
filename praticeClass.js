
/// class syntax introduces in es-6 featuress
// in javascrict  we can define  class with two ways   === class statement
// class with  expression 

class BankAcount {
    customerName;
    accountName;
    balance;

   constructor(customerName, balance=0){
    this.customerName = customerName;
    this.accountName = Date.now();
    this.balance = balance
   }

   deposit(amount){
    this.balance +=amount;
   }

   withdraw(amount){
    this.balance -=amount;
   }

}

// let shashikantAcount = new BankAcount("ssddcsc", 1000);
// // shashikantAcount.deposit(10000);
// // shashikantAcount.withdraw(1000)
// console.log(shashikantAcount,"shasssa")

// Inheritance 

// class savingAccount extends BankAcount {
//     transcationLimit = 100
//     constructor(customerName, balance = 0){
//         super(customerName, balance)
//     }
// }


// let shashikantAcount = new savingAccount("ssddcsc", 1000);
//  shashikantAcount.deposit(10000);
// // shashikantAcount.withdraw(1000)
// console.log(shashikantAcount,"shasssa")