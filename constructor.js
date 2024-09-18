

 function BankAcount(customerName, balance = 0){
    this.customerName = customerName ;
    this.accountNumber = Date.now();
    this.balance = balance ;
   // desposit something 
   this.deposit = (amount)=>{
    this.balance += amount;
   }

   // withdrwal something 
   this.withdra = (amount)=>{
    this.balance -= amount;
   }

 }
 let shashikantAccount = new BankAcount("shashikant", 1000);
 shashikantAccount.deposit(5000);
 shashikantAccount.withdra(5000);
//  console.log(shashikantAccount,"shashikant");

 // here is the problem with constructor function suppose if 100  of user can depsoit and 
 // withdraw amount show we have to written the method for 100 user 
 // this sharing method problem is solved Prototype