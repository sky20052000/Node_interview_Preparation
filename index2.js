console.log("Running");

// hoisting in javascript 
/// hoisting is a bydefault behaviour of javascript where function and variables comes top 
// of the excecution context only var support hoisting that have global scope where let and const has a block scope
// hoisting is supported by javascript tradistional function not supported by any modern function or arrow function

// b= 10
// console.log(b)
// var b;

// hosted();
// function hosted(){
//     let hostt = "shashikant.sy126@gmail.com"
//     console.log(hostt)
// }

// closure in javascript 
// in javascript inner function has capablity to access the value of outer function that is knowns as closure 

// function ab(){
//     let a =20;
//     function bc(){
//          console.log(a)
//     }
//     bc()
// }
// ab()


//////////// callback function

// in javascript when we pass a function inside another function as an argument known as call back function 

// let fun1 = function sayHi(name,callback){
//          console.log(`Hello ${name} how are you `)   ;
//          callback();  
// }

// let fun2 = function sayHello(){
//               console.log("I am good man!") 
// }

// fun1("Satish",fun2)

// // map , reduce and filter function 
// // map function transform new array
arr = [1,3,5,6,7,8]

let mapdata = arr.map(e=>e*2)
let filterData = arr.filter(e=>e%2 !==0)
console.log(mapdata,"mapdata")
console.log(filterData,"filterData")

//////// Promise In Javascript 

// const createPromise = new Promise((resolve,reject)=>{
//          let  a =2;
//          if(a===2){
//             resolve("Fulfiled")
//          }else{
//             reject("Reject")
//          }
// });
// console.log(createPromise,"ConsumedPromise")
// createPromise.then((data)=>{
//      console.log(data)
// }).catch((e)=>{
//      console.log(e,"e")
// })


////////////Rest parameter converts indefineds number of arugments into array 

function sub(...values){
       console.log(values)
      let total=0;
       for(let val of values){
           total +=val
       }
       console.log(total,"Sum")
}

sub(1,2,3,4,5,6,7,8,9,10)


/////////////////////// High order function 

// function highOrder(fun1){
//     fun1();
// }
// highOrder(()=>{
//   a = 10 ; 
//   console.log(a)
// })


//   array  destctrucing in node js 
let arr1 = ["shashikant", "satish", "umakant"];
// // its es-6 features 
// without  es6 
let top1 = arr1[0];
let top2 = arr1[1];
let top3 = arr1[2];
// with es-6 
[top1 ,top2 , top3] = arr1
console.log(top1 ,top2 , top3)