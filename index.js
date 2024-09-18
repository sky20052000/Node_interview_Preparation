

// //  1. hositing in javascript 
// // hoisting is a default behaviour of javascript 
// //  for example 
// // a  = 10;
// // console.log(a)
// // var a ;                // hoisting supports only var because it has global scope where let and const has function
 // block scope

// // 2. closure in javascript 

// // function fun1(){   // Every time when we create function in javascript its possible to access value with closure
// //     const a =10;
// //     function fun2(){
// //         console.log(a);
// //     }
// //     fun2();
// // }
// // fun1();

// //3. callback function in js
// //A callback function is a function passed into another function as an argument, 
// // which is then invoked inside the outer function to complete some kind of routine or action.

// // const fun3 = function myName(name, callback){
// //     console.log(`Hello ${name}`)
// //     callback();
// // }
// // const fun2 = function myName1(){
// //     console.log("Ha bolo")
// // }
// // fun3("shashikant",fun2);

// // map , reduce and filter function 
// // map function transform new array
// arr = [1,3,5,6,7,8]

// // const output = arr.map((x)=>(x*3));
// // const output = arr.filter((x)=>(x%2));
// // console.log(output)


// // promise in javascript 
// // const pro = new Promise((resolve,reject)=>{
// //         let sum = 1+2 ;
// //         if(sum ==2){
// //             resolve("success");
// //         }else{
// //             reject("failed");
// //         }
// // });
// // pro.then(()=>{
// //     console.log("This is in then")
// // }).catch((error)=>{
// //     console.log("this is catch")
// // })


// // const wait = (async(a,b)=>{
// //     let sum = await a+b;
// //     console.log("the total sum:",sum)
// // })
// // wait(2,3);

// //Rest operator
// // function sum(...inputs){
// //     let total = 0;
// //     for(let i=0; i<inputs.length; i++){
// //         total += inputs[i];
// //         console.log("Total",total)
// //     }
// // }
// // sum(1,23,43,54,6)

// // Coercion
// // var x = "3";
// // var y =3;
// // console.log("sumaaa",x+y)

// /// iife function 
// // (((a,b)=>{
// //    let c = a+b;
// //    console.log(c)
// // }))(2,4);

// // call method apply method and bind method
// // call method takes referecne which object properites that is shows
// // let obj = {
// //     name:"shashikant",
// //     getName:function(message){
// //         return this.getName + " "+ message
// //     }
// // }


// // let person = {getName:"yadav"}

// // console.log(obj.getName.call(person,"ddfg"))


// /// Apply method  - same as call method only diffrence is that
// // it takes arrays of list

// // const person1 = {
// //        name:"shashikant",
// //        getAge: function(message){
// //         return this.getAge + " " + message
// //        }
// // }

// // const person2 = {getAge:"23"}
// // person1.getAge.apply(person2)
// // console.log(person1.getAge.apply(person2,["mast"]))

// // Event in Node js 
// // const EventEmitter = require('events');
   
// // // Initializing event emitter instances 
// // var eventEmitter = new EventEmitter();
  
// // // Registering to myEvent 
// // eventEmitter.on('myEvent', (msg) => {
// //    console.log("Hellpo world",msg);
// // });

// // eventEmitter.on('myEvent1', (msg) => {
// //     console.log(msg);
// //  });
  
// // // Triggering myEvent
// // eventEmitter.emit('myEvent', "First event");
// // eventEmitter.emit('myEvent1', "Firstss event");

// // this - example


// // object destructuring 
// // let personal_info = {
// //     name:"Shashikant",
// //     last_name:"Yadav",
// //     profession:"Software Engineer",
// //     age:23
// // }

// // // without es6 
// // console.log(`Hello ${personal_info.name}`)
// ///use with destructuring 


// //setTimeout and clearTimeout both delays code execution
// // function sum(a,b){
// //     setTimeout(()=>{
// //         let c = a+b;
// //         console.log(c)
// //     },1000)
// // }
// // sum(10,10);

// // setImediate and setInveral both delays on block code execution

// // function fun1(){
// //     setImmediate(()=>{
// //         let a = 2+2;
// //         if(a===4){
// //             console.log("success")
// //         }else
// //         {
// //             console.log("fialird")
// //         }
// //     },5000)
// //     console.log("Helllo")
// // }
// // fun1();


// // class in javascript 
// // class Students {
// //     constructor(namse,age,clss){
// //         this.myName = namse;
// //         this.myAge = age;
// //         this.myClass = clss;
// //     }
// //     Student_Info(){
// //         console.log(`I my self ${this.myName} and my age is arround ${this.myAge}and 
// //         I read in class ${this.myClass} and i play ${this.myGame} very well `)
// //     }
// // }

// // class Player extends Students{
// //     constructor(game){
// //         super(namse,age,clss);
// //          this.myGame = game;
// //     }
// //     Student_Info(){
// //         console.log(`I my self ${this.myName} and my age is arround ${this.myAge}and 
// //         I read in class ${this.myClass} and i play ${this.myGame} very well `)
// //     }
// // }

// // const obj1 = new Player("Shashikant Yadav",24,16, "Football")
// // obj1.Student_Info();


// /// Array destructuring 
// // let arrList = ["1","2","3","4","5"]
// // // without use of es6
// // // let top1 = arrList[0];
// // // console.log(top1)

// // // by using es6
// // let [one,,,,five] = arrList;
// // console.log(`hey this is ${one} and this is ${five}`)


// // spread operator
// // let arr1 = ["1","2","3","4"]
// // let arr2  = ["5","6","7"]
// // let arr3 = [...arr1 , ...arr2]
// // console.log(arr3,"aasdfg")

// // Rest operator -convert indefinite number of argrument as an array
// // function sum(...input){
// // console.log(input,"zzz")
// // }
// // sum(1,2,34,5,4,5,6,7,8,8)

// // const pro1 = new Promise((resolve,reject)=>{
// //     let a =1+1; 
// //     if(a===3){
// //         resolve("Success");
// //     }
// //     else{
// //         reject("Failed");
// //     }
// // });
// // pro1.then(()=>{
// //     console.log("resovle")
// // }).catch(()=>{
// //     console.log("Reject")
// // });

// // use of this keyword 
// //  when it comes with alone shows windows object 
// // function fun2(){
// //     let a= 10;
// //     console.log(a)
// //     console.log(this,"keyword")
// // }



// // const fun22 = function f1(name, callback){
// //         console.log(`Hello ${name}`)
// //         callback();
// // }
// // const fun2  = function f2 (){
// //     console.log("heyy!!!")
// // }

// // fun22("sky", fun2);

// // rajesh.kumar@technogetic.com

// // high order  function 
// // const radius = ['4','3','2','1']
// // // calculate area 
// //  const area = function(radius){
// //     return Math.PI * radius * radius;
// //  }

// //  // calculate diameter of circule 
// //  const diameter  = function(radius){
// //     return 2 * radius 
// //  }

// //  // calculate circumstances 
// //  const circumfirence = function(radius){
// //     return 2 * Math.PI * radius
// //  }

// //  const calculate = function(radius, logic){
// //     let output = [];
// //     for(let i =0; i< radius.length; i++){
// //         output.push(logic(radius[i]));
// //     }
// //     return output;
// //  }
// //  console.log(calculate(radius,area));
// //  console.log(calculate(radius,diameter));
// //  console.log(calculate(radius,circumfirence));


// /// Arrays in javascipt 
//  let arr1 = ["shashikant","satish","umakant","enginner"];
// //  let name1 = arr1[0];
// //  let name2 = arr1[1];
// //  let name3 = arr1[2];
// //  let name4 = arr1[3];
//  // methods of array 
//  // array destructuring 
// //  let [name1, name2,name3, name4] = arr1;

// //  console.log(`Hello ${name1} ${name2} ${name3} ${name4}`)
// // console.log(arr1.length)
// // filter method 
// // const result = arr1.filter(word=> word.length <6);
// // console.log(result,"aaa")
// //. map method.

// // let arr2 = ["16","18","20","22"];
// //  map method always given new array from the given array 
// // const result = arr2.map(x=> x * 2 );
// // console.log(result,"AAA")
 
// // const result  = arr2.reverse();
// // console.log("Reversed Array", result)

// // var a= 2;
// // var b= "2";
// // var c= "2";
// // console.log(c==b)


// /// pass by  value - in Javascript primitive datatypes are passed by value 
// // var x = 2;
// // var y =22;
// // var z = y;
// // console.log(z)

// // pass by reference - In Javascript non primitive((Array, objects)) datatypes are passed by resference
// // var obj = { name: "Vivek", surname: "Bisht" };
// // var obj2 = obj; // /  here obj passed as reference in obj2
// // console.log(obj2)

// function fun1(fun2){
//     fun2();
// }

// fun1(()=>{
//     console.log("hello world")
// })

// hoisting in js - only var keywords support hoisitng 
// hoisting is by default behaviour of javascript where function and
// variable come top of the execution context
// example 
// a = 10;
// console.log(a);
// var a ;

// closure in js - where inner function has capable to access the 
// value of outer function 

 // EXAMPLE 
//  function fun1(){
//     let a = 10+10 ;
//     function fun2(){
//       console.log(a,"aaa")
//     }
//     fun2();
//  }
//  fun1();


 /// node js function 
 // setImediate, setTimeout, setInveral, clearTimeout
 //setTimeout and clearTimeout both delays code execution

//  function Time(){
//     setInterval(()=>{
//         let b  = 20+20 ; 
//         console.log(b)
//     }, 2000)
//  }
//  Time();

 //setImediate and clearImedia both delays code execution

//  function Time(){
//     setImmediate(()=>{
//         let b  = 20+20 ; 
//         if(b == 50){
//             console.log("yess")
//         }
//         else{
//             console.log("no")
//         }
//     }, 2000)
//  }
//  Time();


// callback function 
// in javascript if we pass a function inside a function as an agrument that 
// function is known as callback function.

// const fun11 = function MyName(name, myname){
//     console.log(`Hello ${name} how are you.`)
//     myname();
// }

// const fun2 = function myname1(){
//     console.log("I am good bro ")
// }

// fun11("shashikant", fun2)

// highorder function 
// if we pass a function inside a function as an input and we can received from 
// it known as high order function

// function highOrder(fun1){
//     fun1();
// }
// highOrder(()=>{
//   a = 10 ; 
//   console.log(a)
// })

/// call by value 
// in javascript primitive data types pass as a call by value 
// primitive data types - number , string , undefined , boolean , null

// let aa = 2;
// let b= aa ;
// console.log(aa);
// console.log(b)

// call by referecne - all non- primitive datatypes passed as referecne

// let str = [ "1", "2", "3"];
// const str1 = str;
// const str2 = str;
// const str3 = str;
// const str4 = str;
// console.log(str1, str2,str3,str4)

//  ifee function 
// a function thats is always ready to execution when we defined 
// 
// ((()=>{
//     let bbb =22 ;
//     if(bbb =22){
//         console.log("true")
//     }else{
//         console.log("false")
//     }
// }))();

///   promise in javascript 
// an promise in an onject which represent the eventaul compliciation of asynchronus operation

// const pro = new Promise((resolve,reject )=>{
//     // it has three state like pending , resolve , reject 
//     // by default it is in pending state
//     let bbbbbb = 2+2 ;
//     if(bbbbbb = 5){
//         resolve("success")
//     }else{
//         reject("false")
//     }
// });

// pro.then((data)=>{
//     console.log("resolve", data)
// }).catch((e)=>{
//     console.log("sometihng went wrong")
// })

///  call method , apply method   , bind method 
// call method show referecne with its own object 
// const obj1 = {
//     name:"shashikant", 
//     lastName:"yadav",
//     getAge: function(msg){
//         return this.getAge +" " + msg
//     }

// }

// const obj2 = {getAge:23}
// obj1.getAge.call(obj2);
// console.log(obj1.getAge.call(obj2,"hello"))

/// event in node js 
// in node js one envent can fire multiple time
// const EventEmitter = require("events");
// const eventEmitter = new EventEmitter() ;
// eventEmitter.on("event1",()=>{
//     console.log("fire")
// });
// eventEmitter.on("event1",()=>{
//     console.log("fir1e")
// });
// eventEmitter.on("event1",()=>{
//     console.log("fire2")
// });
// eventEmitter.emit("event1")

// const arr = ["20","30","40"];
// let rever = arr.reverse();
// console.log(rever,"aaa")


 /// reverse a number in javascript 
//  function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(Number(reverse_a_number(12)));
// const num = () => {
// 	let count = 0;
// 	return () => count += 1;
// 	}
// 	const num1 = num();
// 	const num2 = num();
	
// 	console.log(num2(), num1());

// if (false && true) {
// 	console.log("Hello World!");
// 	}

// const fn = ( ) => ({ x: 1, y: 2, a: 3, b: 4 })
// const { x: a, y: b } = fn()

// console.log( x, y )

//   array  destctrucing in node js 
// let arr1 = ["shashikant", "satish", "umakant"];
// // its es-6 features 
// // without  es6 
// // let top1 = arr1[0];
// // let top2 = arr1[1];
// // let top3 = arr1[2];
// // with es-6 
// [top1 , , top3] = arr1
// console.log(top1  , top3)


///  spread operator -  bascially used to conacatinate two arrays
// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];
// const arr3 = [...arr1 , ...arr2]
// console.log(arr3)

// REst operator is vica of spread operator is converts indefinite number arugment as a array 
// function sum (...inputs){
//     console.log(inputs)
//     let  total  = 0;
//     for (const arr of inputs ){
//         total  +=  arr;
//          //console.log(total,"aaa")
//     }
//     return total;
// }

// console.log(sum(1,2,3,5,4,6));

//  high order function in javascript 
// if we pass   a function inside the  another function as an input and we  can received from it

//     function highOrder(fun1){
//     fun1()
// }

// highOrder(()=>{
//    let a= 2+2;
//    console.log(a, "bb")
// })

// arrow function 


// function sum(a,b){
//     let sum = a+b;
//     console.log(sum, "aaaa")
// }

// sum(10,20)
// // 
//  sum = (a,b)=> a+b;
//  console.log(sum(2,3))

// / highorder function 
   
// function high(fu1){
//     fu1();
// } 
// high(()=>{
//     console.log("hello world")
// })

// const arr = new Array(10);
// const arr2 = new Array("10");

// console.log(arr.length, arr2.length);
//  coercion comes into pictures when two operands exrpession with different data types


/// closure //////////////////////////////////////////////////////////////////////////
// function fun1(){
//     const a  = 10;
//     function fun2(){
//        const  b = 20;
      
//        console.log(b)
//     }
//     fun2();
//     console.log(a)  
// }


// fun1();

// callback function ////////////////////////////////////////////////////////
// const fun1 = function myfun1(name, mycall){
//     console.log(`Hello ${name} how are you.`)
//     mycall();
// }

// const fun2 = function myfun2(){
//     console.log("I am good bro")
// }

// fun1("Shashikant", fun2)

// arrow function //////////////////////////////////////////
// const sum = ((a,b)=>{
//     const c = a+b;
//     console.log(c)
// });
// sum(2,3);

////////////////////////////////////////promise in js
// a promise is an object which represents the eventaul complication of asnchronous operation

// const pro = new Promise((resolve, reject)=>{
//     let a = 2+2;
//     if(a==4){
//         resolve("fulfilled");
//     }else{
//         reject("REject")
//     }
// });

// pro.then((data)=>{
//     console.log("Success", data)
// }).catch((e)=>{
//     console.log("False", e)
// });


///////////////////////////////////////////////////hoisitng  ////////////////////// 
// hoisting is default behavoiur of javascript where function and varialbe moved on the top.

// a = 10;
// console.log(a);
// var a;

/////////////////////////map and foreach method
  //let sum = 0;
 //let arr = [1,3,5,6 ,9,7,8];
// const result = arr.map(x=> x*4);
// console.log(result)


//  function highOrder(fun1){
//     fun1();
//  } 
//  highOrder(()=>{
//     let a = 20+20;
//     console.log(a)
//  })

/// foreach , filter and map method difference 
// forearch method does not return new array from the given array 
// map method returns new array from the given array or parent array
// filter method just filter data accoding to our need

// let arr = [1, 2,3,4,5,6,7,8];
// // with map method
// const result = arr.map(e=>e*3);
// // filter method 
// const result1  = arr.filter(e=> e>3)
// // with foreach 

// const result2 = arr.forEach(e=>e*3);

// console.log(result, result1, result2)

// function a(p){
//   return p;
//   }
  
//   const b = new Object(a);
  
//   console.log(typeof b);
//   console.log(b===a);

// fs module 
// const fs = require("fs");

// read file synchronous 
// const readfile = fs.readFileSync("demo.txt","utf-8");
// console.log(readfile,"aa");

// read file asnchronous 

// const readfile  = fs.readFile("demo.txt","utf-8",(err,data)=>{
//      console.log(data)
// });
// console.log(readfile)

// const buffer = new ArrayBuffer(8);
// const view = new Int32Array(buffer);
// console.log(view)

// const a = 5;
// const b = 3;

// console.log(a|b + b|a);


// ///

// const obj = {
//       name:"shashikant",
//       lastName:"yadav",
//       getAge:function(message){
//         return `Hello  ${message}`
//       }

// }

// const obj1 = {getAge:23}
// // call method 
// obj.getAge.call(obj1,"shashikant");
// console.log(obj.getAge.call(obj1,["satish", "shashikant","asdfsdf"]));

// 
const arr = [1,2,3,4,5,6,7,8];
const result = arr.splice(5,1,"hello");
// console.log(result)

// what is node js 
// node js is javascript run time which executes javascript code out the browser 
// it is written in c++     

// hoiting in javascript 
// console.log(a);

//  only var support hoisting because it has global scope that is if we defined the var in our code
// we can use var where we want to use in side the code
//  a = 10 
//  console.log(a);
//  var a;

 /// closure in javascript 
 // closure is a property in javascript where inner function has capable to access the value of the
 // outer function 
 // ex 
//  function aa(){
//   var a = 10;
//   function b(){
//     console.log(a);
//   }
//   b();
//  }
//  aa();
 
 // //3. callback function in js   
 // In javascript if the pass functon as a argrument in side a function known as callback function
//  const fun2 = function hey(name, callback){
//           console.log(`Hello ${name}`)
//           callback();
//  }
//  const fun1 = function yes(){
//     console.log("hanjii")
//  }

//  fun2("Shashikant", fun1)

// // map , reduce, foreach method and filter function   
// map function in javascript ==   always gives new array from parent array 
// let Arr = [1,2,3,4,5,6,7,8];
// let resultss = Arr.map((element)=>
//   element*2
// );
// console.log(resultss,"Map");

// foreach function in javascript === always gives undefined `
// let Arr1 = [1,2,3,4,5,6,7,8];
// let resultsss = Arr.forEach((element)=>
//   element*2
// );
// console.log(resultsss,"Foreach");

//  filter function in javascript === Filter means filter the value

// let Arr11 = [1,2,3,4,5,6,7,8];
// let resultsss = Arr.filter((element)=>
//   element>2
// );
// console.log(resultsss,"Filter");

// // reverse the array 
// let resultArr = Arr11.reverse();
// console.log(resultArr,"resultArr")

///
// // promise in javascript    
// To deal with asycnronous programming in javascript we use promise    
// its introdued in ex-6 feautres
// in intial state promise is in pending state 
// promise has basically three states  pending , resolve and reject 

// const pro = new Promise((resolve, reject)=>{
//   let a = 2;
//   if(a==2){
//     resolve("success")
//   }
//   reject("Failed")
// })
// console.log(pro,"pro")
// pro.then(()=>{
//   console.log("This is then")
// }).catch((err)=>{
//   console.log("This is reject", err)
// })

// //Rest operator  
//  it converts indefintine number of agrument in an array 


// function sum(...inputs){
//      //console.log(inputs,"inputs")
//      let total = 0;
//      for (const arg of inputs) {
//       total += arg;
      
//     }
//     return total;
    
// }
// console.log(sum(1,23,4,5,6,6,7,7,))


///// iife function 
// iife stands for immediately invoked function we can defined it in the the brackets
// ((a,b)=>{
//   let c = a+b;
//   console.log(c,"ccccc")    /// iife function with arrow function 
//   /////  / arrow function is shortway of defining function in javascript
// })(2,3)

// ///  iife function with traditonal javascript function 
// (function sum(a,b){
//   let c = a+b;
//   console.log(c,"ccccc")    /// iife function with arrow function 
//   /////  / arrow function is shortway of defining function in javascript
// })(sum(2,3))


//  // // call method apply method and bind method 

// call method show the property of its own object  
// means call method takes referecne which object properites that is shows
// const obj1 = {
//    name:"Shashikant Yadav",
//    lastname: function(message){
//         return  this.lastname    + " "+ message
//    }
// }         
// // /call method takes argument as individually  
// const person = { lastname:"Yadav"}
// console.log(obj1.lastname.call(person,"fgbgbgfbfgbgf"));

/// Apply method
// const obj11 = {
//   name:"Shashikant Yadav",
//   lastname: function(message){
//        return  this.lastname    + " "+ message
//   }
// }       
// // Apply method takes argument as a array of list    
// const person1 = { lastname:"Yadav"}
// console.log(obj11.lastname.call(person1,["fgbgbgfbfgbgf","aaa","BBBBBBBBBBBBBBBb"]));


///  // // // Initializing event emitter instances   
// events is something like if user perform in any action that reflect on browser
// const EventEmitter = require('events');

// const eventEmitter = new EventEmitter();
// eventEmitter.on('start', () => {
//   console.log('started');
// });
// eventEmitter.emit('start')

// Es- features 
// Arrow function Rest operator, spread operator, promises, async awit template literals
// // object destructuring 
// let obj1 = {
//    firstname:"Shashikant",
//    lastname:"Yadav",
//    age: 23,
//    profession: "Node Js Engineer"
// }
// // without es -features
// console.log(`My name is ${obj1.firstname} and last name is: ${obj1.lastname}, and ${obj1.age}
// and profession is: ${obj1.profession}`)

// /// with es- features 
// let {firstname, lastname, age, profession} = obj1;
// console.log(`My name is ${firstname} and last name is: ${lastname}, and ${age}
// and profession is: ${profession}`)

 //setTimeout and clearTimeout both delays code execution 
 // setTieout === delays in code execution 
 // these are features of node  js and also called ananomys function in javascript
//  function fun1(){
//  setTimeout(()=>{
//   let a = 2;
//   if(a== 2){
//     console.log("true");
//   }
//   else{
//     console.log("False");
//   }

   
//  }, 2000)
//  function fun2(){
//  clearTimeout(()=>{
//   let a = 3;
//   if(a== 3){
//     console.log("true");
//   }
//   else{
//     console.log("False");
//   }

   
//  }, )
// }
// fun2();
// }
// fun1();


// / call by value and call by reference in javascript 

// In javascript primitive datatypes passed as a call by value in  javaascript
// let a = 2;
// let b= a ;
// console.log(a)
// console.log(b)
// /// passed as reference 
// let str  = "Shashikant";
// let str1 = str ;
// console.log(str1)

// const crypto = require("crypto");
// const start = Date.now();
// function logHashTime() {
// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
// console.log("Hash: ", Date.now() - start);
// });
// }
// logHashTime();



// const Stream = require('stream')
// const readableStream = new Stream()
// console.log(readableStream,"readableStream")

// var Stream = require('stream');
 
// var src = new Stream();
// src.readable = true;
 
// var dest = new Stream();
// dest.writable = true;
// let data = "aaaaaaaaaaaaaaaaaaaaaaaa"
// dest.write = function(data) {
//    console.log(data)
// };
 
// src.pipe(dest);
 
// src.emit('data', 'test');

// var a = ['USD', 'EUR', 'INR'];
// var res = {};

// for (var i = 0; i < a.length; i++)
//   res[a[i]] = 0;
//   res[a[i]] = 1;
//   res[a[i]] = 2;

// console.log(res);

// 

// function x(){
// // var i = 1;
// for(let i= 1; i<=5; i++){
//    setTimeout(()=>{
//     console.log(i)
//    },i*1000);
//   //  console.log("Namasate Javascript")
// }
// console.log("Namasate Javascript")
// }
// x();

// same thing with var because it has function scope and global scope also

// function x(){
//   // var i = 1;
//   for(var i= 1; i<=5; i++){
  //    setTimeout(()=>{
  //     console.log(i)
  //    },i*1000);
  //   //  console.log("Namasate Javascript")

  // function close(p){
  //   setTimeout(()=>{
  //     console.log(p)
  //    },p*1000);
  //   //  console.log("Namasate Javascript")
  // }
  // close(i);
  //   }
  
  // console.log("Namasate Javascript")
  // }
  // x();


  /// function statement
  // x();
  // b();
  // function x(){
  //   console.log("Hello world")
  // }

/// main difference in function statement and function expression is hoisting
  // function express in javascript 
  //  let b  = function (){
  //   console.log("B called")
  //  }

   /// Fucntion statement and function expression both are the same
  

   ///  Anonymous function are used when functions used as values 
   /// A function without name is called anonymous function

   // callback function 
   // in  javascript if we pass a function inside as an argument and we can return from it that function known as callback function
  //  let fun1 = function sayHi(name, callback){
  //         console.log(`Hello ${name}`)
  //         callback();
  //  }
//////////////////////////      sayHi and Hi here treat as a name function
//    let fun2 = function Hi(){
//     console.log(`Hello, how are you`)
// }
// fun1("shshikant", fun2)

// function highOrder(fun1){
//   fun1();
// } 
// highOrder(()=>{
//   let a= 2 
//   console.log(a)
// })

// function highOrder(fun1){
//       fun1()
//   }
  
//   highOrder(()=>{
//      let a= 2+2;
//      console.log(a, "bb")
//   })

// const arr1 = [1, 2, 3];
// const arr2 = arr1.map(item => item * 2);
// console.log(arr2);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let reult = fruits.entries();
// console.log(result,"result")

// const ages = [32, 33, 16, 40];

// ages.every(checkAge)
// console.log(ages.every(checkAge),"cccccccccccc")

// function checkAge(age) {
//   return age > 18;
// }

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// valueOf methods returns same original array
// let results = fruits.valueOf();
// console.log(results,"resultss")

//The unshift() method adds new elements to the beginning of an array.
// let resultss = fruits.unshift("PineApple", "Watermaleon");
// console.log(resultss,"resultss")
// console.log(fruits)

///  The toString() method does not change the original array.
// let resultss = fruits.toString();
// console.log(resultss,"resuktss")


//The splice() method adds and/or removes array elements.

//The splice() method overwrites the original array.
// let results = fruits.splice(2,1, "Lemon", "Kiwi");
// //console.log(fruits.splice(2,1, "Lemon", "Kiwi"));
// console.log(fruits)



// The sort() sorts the elements of an array.

// The sort() overwrites the original array.

// The sort() sorts the elements as strings in alphabetical and ascending order.

// fruits.sort();
// console.log(fruits.sort(),"SSSS");

// fruits.reverse();
// console.log(fruits.reverse(),"SSSS");

//// lastIndexOf search the value from right to left 
// if value not found it throw -1 

const fruitss = ["Orange", "Apples", "Mango", "Apple", "Banana", "Apple"];
// let results  = fruitss.lastIndexOf("Apples", )
// console.log(results,"results")

// The isArray() method returns true if an object is an array, otherwise false.

// let resultss = Array.isArray(fruitss);
// console.log(resultss,"resultsss")

// hositing example with function 

// hoisted();

// function hoisted(){
//   console.log("Hello world!");
// }

// Hoisting takes place in the local scope as well
// function doSomething(){
//   x = 33;
//   console.log(x);
//   var x;
// } 
// doSomething();


// let x= {}, y = {name:"Ronny"},z = {name:"John"};
// x[y] = {name:"Vivek"};
// x[z] = {name:"Akki"};
// console.log(x[y]);

// const findVowels = str => {
//   let count = 0
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   for(let char of vowels) {
//     if(vowels.includes(char)) {
//       count++
//     }
//   }
//   return count
// }
// console.log(findVowels(),"findsVowels")

// creating oject with constructor 
//  function BankAcount(customerName ,balance = 0){
//   this.customerName = customerName;
//   this.accountNumber =  Date.now();
//   this.balance = balance
 
//  }

//  const ress = new BankAcount("sky",1000)
// console.log(ress,"ress");

// // prototype gives empty object 

// BankAcount.prototype.deposit = function(amount){
//   this.balance += amount;
// }
// BankAcount.prototype.withdraw  = function(amount){
//   this.balance -= amount;
// }
// ress.deposit(1002);
// // ress.withdraw(2);
// // console.log(ress.withdraw(2))
// console.log(ress,"ress")

 

/// class in javaScript 

// function outer()
// {
// var a = 10;
// function inner()
// {
//   console.log(a)
// let b = 'Hello-world'
// console.log(b)
// }
// inner()
// }
// outer()

// const stuInfo = JSON.stringify({name: "james", roll:3});
// console.log(stuInfo.name)

// let x = true;
// let y = {};
// console.log(x, y.x)
// const arr1 =[1,2,3];
// arr1[10] = 10;
// console.log(arr1.length,"arr1");
// let a =-1; ++a && ++a && +a;
// console.log(a,"aaas")

// const x = [1, 2, 3];
// x[-1] = 4;
// console.log(x.length);

// A promise is an object that represent the eventaul completion(Failure) of asychronous operations 
// const x = 2

// console.log(x === x) //falses

/// javascript top interview quetion 

// let const , var 
// let and const has block scope and let can reDelcare where const means constant

// let a =10;
//  //aa =20;   //  it will gives 20 because javascript follow top to down exection ===>> this happen with closure
// console.log(a)

// const b= 10;
//  //b= 10   
// console.log(b)

//var has a function scope and global also
// let aa = function(){
//   var aa = 20;   //// var hace function and global scope also
//   if(aa==20){
//     let bb = 30;
//     console.log(bb,"bb")
//     // console.log(aa,"aa");
//   }
//   console.log(aa,"aa");
  
// }
// aa();


// hoising in javascript 
 // hoisting is a by default behaviour of javascript  only var support hoisting 


//  bb=10;
//  console.log(bb,"bb")
//  var bb ; 
 

// closure in javascript 

// closure ===? where inner function has the power to access the value from the outer function 

//  function a(){
//      let b= 20;
//      function c(){
//       console.log(b);
//      }
//      c();
//  }
//  a();


// callback function ====> in javascript if we pass a function inside another function as a argument called
// callback function

//  promise =+ to deal with asychronous behaviour of javascript we used promises 
// a promise have tree state pending settle reject by default it is in pending state
// to use promise in our code first we have to conjuse promise 
// Example 
 
// const prom = new Promise((resole,reject)=>{
//                let a =2 
//                if(a==3){
//                 resole("Promise fullfile")
//                }else{
//                 reject("Promise reject")
//                }
// });

// prom.then((d)=>{
//       console.log("fullfil",d)
// }).catch((e)=>{
//   console.log("Promise Reject",e)
// })


// sort the array 
//let nums = [10,5,80]
// let sortArray  =nums.sort((a,b)=>a-b)
// console.log(sortArray,"gg")
  // console.log(nums.reverse())
// let reversedArray = [];

// for (let i = nums.length - 1; i >= 0; i--) {
//   reversedArray.push(nums[i]);
// }

// for(let i = 0 ; i<nums.length; i++){
//    reversedArray.push(nums[i]);
// } 

// for(let i =nums.length-1; i>=0;i--){
//   reversedArray.push(nums[i]);
// } 
// console.log(reversedArray,"nn")
// let nums = [10,5,80];
// // nums.push(20);
// // nums.pop(20);
// //nums.unshift(6)
//  nums.append(10,15)
// console.log(nums)


// Find the index of 5 and 80
// let indexOf5 = nums.indexOf(5);
// let indexOf80 = nums.indexOf(80);

// Append values between 5 and 80
// nums.splice(indexOf5 + 1, 0, 68, 78);
// let numsss = nums
// let indexsOf5 = nums.indexOf(5);
// let indexsOf80 = nums.indexOf(80);
// numsss.splice(indexsOf5 +1 , indexsOf80 - indexsOf5 -1);

// console.log(numsss);
// Example of aysnc and await  
// async function sub(){
//       const result =await getSumss(10,10);
//       console.log(result,"result1")
//       const result1 =await getSums1(10,10);
//       console.log(result1,"result2")
//       const result2 =await getSums2(10,10);
//       console.log(result2,"result3")
//       const result3 = await getSums3(10,10);
//       console.log(result3,"result4")
// }
// const  getSumss = ((a,b)=>a*b);
// const  getSums1 = ((a,b)=>a*b);
// const  getSums2 = ((a,b)=>a*b);
// const  getSums3 = ((a,b)=>a*b);
// sub();


// high order function 
// high order function also known as first class  citizen  in javacript if we pass a function inside a function 
// an arguments  or return a new function from it that function known as high order function in javascript

//  function highOrder(fn){
//   fn(2,3)
//  }

//  highOrder ((a,b)=>{
//       let c = a+b;
//        console.log(c,"")
//  })


// callback function in javascript 
// in javascript  if we pass a function inside another function as an agruement that  function known as
// callback function
  // const fun2 = function sayhi(name,callback){
  //                console.log(name)
  //               callback();
  // }

  // const fun1 = function Hello(){
  //             console.log("hello shasikant mai thik hu");
  // }

  // fun2("kaise ho Vinod",fun1);

  // closure  == in closure innner function has capable to access the value of outer function
    
  // function a(){
  //   let a = 10;
  //   function b(){
  //       console.log(a,"a")
  //   }
  //   b();
  // }
  // a();
  //   a =10;
  // console.log(a)
  // var a ; 

  // convert this date in utc 

///  recursive function  ==> a recursive function is a function that calls itself somewhere inside the function body

  // function recursive(n){
  //   console.log(` hello ${n}`)
  //    recursive(n)
  // }
  // recursive("sky")


  // function recursive(n){
  //       if(n==0 ){
  //           console.log("Task is completed")
  //         return 
  //       }
  //        console.log("I am doing task")
  //      recursive(n-1)
  //   }
  //   recursive(10)

   // find factorial with recursive function

  //  function findFactorial(num) {
  //   if (num === 0) return 1
  //   return num * findFactorial(num - 1)
  
  // }
  
  // console.log(findFactorial(5)) // 120

  // // find factorial with for loop 
  
  // function findFactorials(number) {
  //   let factorial =1;
  //   for(let i =number ; i>0; i--){
  //       factorial *=i
  //   }
  //   return factorial
  // }

  // console.log(findFactorials(6)) // 120

  // console.log(+true);
  // console.log(typeof +true,"bb")  // output is 1

// var a = 10;
// {
//     var a = -10;
// }
// let b = a;
// {
//     let b = -20;
//}

// console.log(b)

// let size = [1,2,3,4]
// let  array = []
// for(let i =0 ; i< size.length; i++){
//     array.push(size[i]+1)
// }
// console.log(array)


/// call ,apply and bind method 

// call method 

// let printDetails =  function(say,hu){
//   return `${this.name} ${this.lastname} ${say} and ${hu}`
// }
//    let userDetails = {
//     name:"laura",
//     lastname : "lahen",   /////////////////  call takes indiviual arrugment where apply method takes array of list
//    }
//    console.log(printDetails.call(userDetails,"Hi","ha"));
//    // apply method 
//    console.log(printDetails.apply(userDetails,["Hi","ha"]));


//   let userDetails1 = {
//     name:"laura1", 
//     lastname : "lahen1",
//    }

//    console.log(printDetails.call(userDetails1, "Hi", "hey"))
//    console.log(printDetails.apply(userDetails,["Hi","ha"]))

//    /// bins method basically bind that function in new function when we have udse this function 
//    // invoked that function

//    let bindNewFunk = printDetails.bind(userDetails,"Hi", "hey")
//      console.log(bindNewFunk())  /// bind method same works as call method

//  console.log("hello node js");


// let input  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11];  
              

// output = [ [ 1, 2 ], [ 3, 4, 5 ], [ 6, 7 ], [ 8, 9, 0 ],[11]]

// console.log(true)  // true
// console.log(+true)  // 1
// console.log("2"> 1) // true
// console.log("02">1) // true
// console.log(null>0) // false
// console.log(null <0) // false
// console.log(null>=0) // true
// console.log( undefined == 0) // false
// console.log( undefined> 0) // false
// console.log( undefined< 0) // true

// let myDate = new Date()
// console.log(myDate,"m");
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())  /// print date only
// console.log(myDate.toLocaleString()) // print both date and time
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toString())
// console.log(myDate.toTimeString()) // print time
// console.log(myDate.toUTCString())


// 
// function findFact(num){
//           let fact =1;
//            for(let i=num; i>0; i--){
//                  fact *=i
//            }
//            return fact
// }

// console.log(findFact(5))

// console.log("Hello world")
let myArry = [1,2,3,4,5,6]
let myArry1 = [ 7,8,9,10]
//  myArry.push(myArry1)
// console.log(myArry,"nn")
// let myArry2 = myArry.concat(myArry1)

//  console.log(myArry2,'vvv');

 let myArry3  = [...myArry,...myArry1]
 console.log(myArry3)

// let newArry = [1,2,3,[4,5],[6,7,8],[9,10,11]]
// // console.log(newArry.length)
// console.log(newArry.flat(Infinity))

// let score1 = 100
// let score2 = 200
// let score3 = 300
// const convertIntoArray = Array.of(score1, score2,score3);
// console.log(convertIntoArray)
// console.log(Array.from([{name:"Shashikant"}]))  // gives us arry in key and value