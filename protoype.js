function BankAcount(customerName, balance = 0){
    this.customerName = customerName ;
    this.accountNumber = Date.now();
    this.balance = balance ;
//    // desposit something 
//    this.deposit = (amount)=>{
//     this.balance += amount;
//    }

//    // withdrwal something 
//    this.withdra = (amount)=>{
//     this.balance -= amount;
//    }

 }
 let shashikantAccount = new BankAcount("shashikant", 1000);
//  shashikantAccount.deposit(5000);
//  shashikantAccount.withdra(5000);
BankAcount.prototype.deposit = function(amount ){
    this.balance += amount;
} // ===prototype method does not support arrow function
    
// same as for  withdraw Amount
      shashikantAccount.deposit(5000);
//   console.log(shashikantAccount,"shashikant");