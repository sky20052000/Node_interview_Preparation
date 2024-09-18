// hoisting  in javascript 
// hoisting is  by default behaviour of javascript ,only var supports hoisting
// where function and variable comes top of the execution context
// in ecama es6 2015 let and const are hoisted for the being of temporal deadzone

// // example 
// a= 10
// console.log(a);
// var a;
// ///   function are also hoisted in javascript
// getName()
// function getName(){
//      let a = 10;
//      console.log(a)
// }


//////////////// closure in javascript 
// in javascript if we  talk about closure the inner function has capable to access the
// value of the outter function or his parents function

// function funck1(){
//       let a = 10;
//       const gfg = () => {
//         console.log( "Hi Geek!" ,a);
//     }
//     gfg()
// }

// funck1()


///////////////////    callback function in javascript ////////////////
// in javascript if we pass a fucntion inside another function as an argument that function
// knowns as call function

//    const funk1 = function myname(sayHi,callback){
//                       console.log(sayHi)
//             callback()
//    }

//    const funk2 = function nmyname1(){
//     setInterval(() => {
//         console.log("I am good what about you!")
//   }, 1000);
  
// }

// funk1("hello shashikant how are you!", funk2);


///////////////////  promise in jabvascript 
// to deal with asynchronous programming in javascript we uses promises 
//  by default promise is pending 
/// it has four state pending resolve reject and settle 
// settle state that means a promise nor reject nor resolve
// to use promise first we have to consume promise 

// const pro = new Promise((reolve,reject)=>{
//         let a = 3
//           b = a
//         if(a ===b){
//             reolve(true)
//         }else{
//             reject(false)
//         }
// });
// pro.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error,"Promise failure")
// })


/////////////////////////////////          high order function in javascript  
// high order function known as first class citizen function in javacript 
// if we pass a function inside another function as an parameter input or return  a 
// new function from it that function is known as high order function in javascript  /////////////////

// function highOrder(fn1){
//     fn1(2,3);
// }

// highOrder((a,b)=>{
//        c = a*b
//        console.log(c)
// })

/////////////////////         map filter and reducer are the high order function in javascript ////////////


/////////////////////////   call , apply and bind method  in javascript ////////




//// to check number is odd or even program 

//  function evenOdd(number){
//             if(number % 2===0){
//                  console.log("Even number")
//             }else{
//                 console.log("Odd number")
//             }
//  }
//  evenOdd(2)

 ////////////////////  reverse the array and remove even number /////////
//  let arr= [35,45,12,24,25,35,78,1];
//  const  checkEvenNumber = arr.filter((number)=>number% 2!==0);
// //    const number  = arr.filter((x)=>x>=2);
// //reverse the array 
//   let reverseArray = checkEvenNumber.reverse();
//     console.log(reverseArray,"bb")

//   let sortData  = checkEvenNumber.sort((a,b)=>a-b);
//   console.log(sortData,"nn")

//   /// slice  method takes argument 
//     let result = arr.slice(1,6)
//     console.log(result,"bb")

    // splice method its bacially remove 24 and 25 ko
    // let result1 = arr.splice(3,4)
    // console.log(result1,"bb")

  //// to create a js program to return the reverse string
  let num = "create a function to check given objet  is array or not";
//   let reversedString = num.split('').reverse().join('');
  
//   console.log(reversedString);
// c

///////////////////   create a function to check given objet  is array or not

// function checkArray(obj){
//         if(typeof obj === "string"){
//             console.log("String");
//         }else{
//             console.log("Array")
//         }
// }
// checkArray(["array","String"])


/// find factorial of 5 with recursive fucntion and for loop

//   function factorialRecursive(num){
//               if(num === 0 || num ===1){ return 1
//               }else{
//                    return num*factorialRecursive(num-1);
//               }
             
//   }
//  console.log(factorialRecursive(5))
//  //// find factorial with for loop

//  function factorialWithFor(number){
//           let fact =1
//           for(let i=number;i>1;i--){
//                  fact*=i
//           }
//           return fact
//  }

//  console.log(factorialWithFor(5))

///write a program How to check two numbers are approximately equal in JavaScript?

// function checkValue(num1,num2){
//           if( num1 === num2){
//             console.log("Equal value");
//           }else{
//             console.log("Value is not equal ")
//           }
// }
// checkValue(2,"2");

///////////////  how to add float value in javascript 

//  function addFloatValue(value1, value2){
//                let c = parseFloat(value1+value2).toFixed(2)
//                 console.log(c,"nn")
//  }
//  addFloatValue(3.1433,3.1433)

//////////// write a program How to get median of an array of numbers in JavaScript ?
  //  let arrayMedian = [ 12,33,45,34,46,47];
  //      const resultss = arrayMedian.splice(0,3) /// splice method 
  //      /////////// Approach: The splice() method is used to add and remove elements from an array.
  //         console.log(resultss,"ss")
  //         const sliceMethod = arrayMedian.slice(1,2);
  //            console.log(sliceMethod,"bbbbb")
    // function 

    ///////////// write a program  get n largest elements from array in JavaScript ? //

    // let largeNumber = [12,]
    // let largeNumber1 = [67,89]
    // const re = [...largeNumber, ...largeNumber1]
    // let obj = {}
    // re.forEach((e)=>{
    //   //  console.log(e,"v")
    //    obj.one = 12;
    //    obj.two = 67;
    //    obj.three = 89
    // })
    // console.log(obj)


    //////////////// write a program  create a string by joining the elements of an array in JavaScript ?

    // function createString(){
    //      let arrrrr  = [ "laudu", "pee","ppepee"];
    //            const str = arrrrr.toString();
    //             console.log(str)
    // }

    // createString();


  /// write a program Swapping two array elements in a single line using JavaScript
      // let arr1 = ["string",2]
      //  const arr2 = arr1
      //  console.log(arr2)

      //convert a string to number with javascript 

      // let str = "123";
      //  // with parseInt
      // const resultt  =  parseInt(str);
      // // without parseInt ==>Number
      //   console.log(typeof(resultt))


      /// write a program  to check whether a passed string is palindrome or not in JavaScript ?

    //   function reverseStr(str){
    //       let reverse_str =''
    //           for(let i = str.length -1;i>=0; i--){
    //                      reverse_str += str[i]
    //           }
    //           return reverse_str
    //   }

    //   // function for check number is palindrom or not
    // function checkPalindrom(str){
    //          let reverse = reverseStr(str);
    //          if(reverse === str){
    //           console.log("Palindrome")
    //          }else{
    //           console.log("Not palindrome")
    //          }
    // }

    // checkPalindrom("hellolleh")


    /////////////  function currying  in javascript ////////////////

  //   function calculateVolume(length) {
  //     return function (breadth) {
  //         return function (height) {
  //             return length + breadth + height;
  //         }
  //     }
  // }
  // console.log(calculateVolume(4)(5)(6));

  // let ar = [1,2,3,4,5]
  //      const a = ar.slice(1,4)
  //     console.log(a)
       








 ///////////////////////////////////////

 //Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
  //For example, given [100, 4, 200, 1, 3, 2], the longest consecutive elements sequence is [1, 2, 3, 4]. 
 // Return its length: 4.
         
// let array1 = [100, 4, 200, 1, 3, 2]
//    let long_value = 0;
//        for(let i =0; i<array1.length; i++){
//                 if(array1[i] >long_value){
//                     long_value = array1[i]
//                 }
//        }
//        console.log(long_value,"vvv")


/////////////////////////  Array questions  for javascript ///////////////////////////////////////////
  // find largest value from the given array 
     let arr = [10,20,3,50,70,100,4]
           let largest_value = [0];
         for(let  i = 0; i<arr.length; i++){
                // console.log(arr[i])
                if(arr[i]>largest_value){
                       largest_value = arr[i]
                }
         }
        //  console.log(largest_value,"Largest_Number")
          //////////// with map function 
              let result = Math.max(...arr);
              // console.log(result,"bb")
              /////////////////  for min value with math function
              let result1 = Math.min(...arr);
              // console.log(result1,"min")

         ///////////  find smallest value from this arrAY
         let smallest_value = [0];
         for(let  i = 1; i<arr.length; i++){
                 //console.log(arr[i])
                if(arr[i]<smallest_value){
                  smallest_value = arr[i]
                }
         }
        //  console.log(smallest_value,"Smallest_Number")

        // let Arr = [1,2,3,4,5,6]  // 8 and 9 to be inversted in between 2 and 3
        // // slice method takes two argument start and end , AND END value does not include....
        //  // if we take both value negative it return empty array([]);
        //    // if we take start value only and passed negative value then its count the value from array reverse direction
        //     // negative value does not include that given index its delete all the value
        // const resultsss = Arr.slice(3);
        //   // console.log(resultsss,"arrrr");
        //   let myArray = [1, 2, 3, 4, 5, 6];
        //   //  myArray.splice(3,0,8,9);  // add value with splice method
        //     myArray.splice(2) // select position indexof array and delete the value using count like (1,2,,3)
        //     console.log(myArray,"nn")

            ///////////////   write a program Convert a negative number to positive in JavaScript
            // let n = -30;
            //     console.log(Math.abs(n),"n")
            //   let m = 15;
            //   console.log(Math.abs(m),"m")

  //////////////////  write a program to check two numbers are approximately equal in JavaScript ?
        // function checkNumber(num1,num2,epsilon){
        // }        //                 console.log(Math.abs(num1-num2)< epsilon)

        // checkNumber(10,10, 1);
        // function equalNumber(num1,num2){
        //       if( num1 ==  num2){
        //           console.log(true,"true")
        //       }else{
        //         console.log(false,"false")
        //       }
        // }

        // equalNumber(20,20)

        //////////////  Write a JavaScript Program to Print Pyramid Pattern by using Numbers

        // function printPyramid(n){
        //           for(let i =1;i<=n; i++)  {
        //                 let str ='';
        //                 let count =1;
        //                 for(j=1;j<=2*n ; ++j){
        //                       // console.log(j,"j")
        //                   if (i + j >= n + 1 && (i >= j - n + 1)){
        //                       str += count.toString() + ' ';
        //                       count++
        //                   }else{
        //                     str += '  '
        //                   }
        //                 }
        //                 console.log(str,"nn")
        //           }
        // }
        // printPyramid(5)

  //       1
  //       1 2 3
  //     1 2 3 4 5
  //   1 2 3 4 5 6 7
  // 1 2 3 4 5 6 7 8 9



  /////////////  write a javascript program for a function currying in javascript 
    // with normal js function 
  // function calculateValue(l,b,h){
  //            console.log(l*b*h)
  // }
  // calculateValue(10,10,10)

  // with function curraying
   // in javascript inside a function if we pass  multiple arguments and retrurn these arguemts to a single function 
   // known as function curraying in javascript 
       
//    function calculateCurry(l){
//                  return function(b){
//                     return function(h){
//                       return l*b*h
//                     }
//                  }
// }

//  console.log(calculateCurry(5)(5)(5))

 /// filter data

//  function checkVowel(str){
//                 let vowels = ['a','e','i','o','u'];
//                 for(let val of str){
//                   if(vowels.includes(val)){
//                     console.log("vowel")
//                   }else{
//                     console.log("Component")
//                   }
//                 }     
//  }
//  checkVowel('i')

//swpping value with third variale
// let a=20;
// let b=30;
// let c=b;
// b=a;
// a=c
// console.log(a,b)

// swap without third variable
    // let  a = 20;
    // let b =30;
  
    // a = a + b;
    // b = a - b;
    // a = a - b;
    
    // console.log(a,b)


    //////
    let arr11 =[1,2,3,4,5,6];
     startIndex = 2;
      const reverseSlice = arr11.slice(startIndex).reverse();
       arr11.splice(startIndex, reverseSlice.length, ...reverseSlice);
      //  console.log(arr11,"qqq")
   


  //   const arr1= [{marks: 30, subject: "hindi"},{marks: 80, subject: "english"}, {marks: 50, subject: "math"}, {marks: 60, subject: "science"} ];
     
  //  const result11 = arr1.sort((a,b)=>a.marks-b.marks)
  //               // console.log(e.marks>30,"nn")
        
  //       console.log(result11,'Bb')




  // let str='sdf34sdsdfs546vb78bvn879';
  // let split = str.split(' ');
  //      let total= 0;
  //   for(let i= 0; i<str.length;i++){
  //           console.log(str[i])

  //   }

/// output: {5:3, 2:5, 9:1, 4:1}
  //const arr11 = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

  // const arr11 =[
  //   {age:40, salary:15000},
  //   {age:30, salary:10000},
  //   {age:45, salary:30000},
  //   {age:25, salary:25000},
  //   ]

    // select age, sum(salary)as Salary, where age =30

   
   // Write a program that prints the numbers from 1 to 100. 
  //  But for multiples of three, print "Fizz" instead of the number, 
  //   for the multiples of five, print "Buzz." For numbers that are 
  //   multiples of both three and five, print "FizzBuzz."

  // function printNum(num){
  //           for(let i =1 ; i<=num;i++){
  //             console.log(i*i,"ii")
  //             // if(num)
  //           }
  // }
  // printNum(100)




  // Mini Project:-

// User functionality:-
// 1. User module: register user, login & social login with facebook, forgotPassword, resendOTP, resetPassword, changePassword. (For OTP services use aws ses)
// 2. getProfile details with JWT auth.
// 3. with features of one to one chat.
// 4. with features of video chat using webrtc server.
// 5. User have right to create post over categories like #Songs, #Jokes, #Sports,
// 6. Users can see the other user created post except their own created post.
// 7. Only those posts should be shown according to user activities over the post.

// Admin functionality:-
// 1. Default admin creation with key role Admin.
// 2. Admin have the right to show all users list using filters by user name, email, fromDate and toDate with asc and desc order.
// 3. Admin have the right to block users and delete users.


// Database:-
// MongoDB  || mySQL
// Mini Project:-


   // find vowel 
    //  function findVowel(str){
    //                  let Vowels = ['a','e','i','o','u'];
    //                   for(let vowel of str){
    //                       if(Vowels.includes(vowel)){
    //                         console.log("vowel")
    //                       }else{
    //                         console.log("not vowel")
    //                       }
    //                   }
    //  }
    //  findVowel('j')

      //const arr1= [{marks: 30, subject: "hindi"},{marks: 80, subject: "english"}, {marks: 50, subject: "math"}, {marks: 60, subject: "science"} ];
     
  //  const result11 = arr1.sort((a,b)=>a.marks-b.marks)
                // console.log(e.marks>30,"nn")
        
        // // console.log(result11,'Bb')
        // let arr111 = [1, 20, 100, 40, 45, 5, 55, 200];

        // // Sort the array in descending order
        // arr111.sort((a, b) => b - a);
        
        // // First largest value is the first element
        // let firstLargest = arr111[0];
        
        // // Second largest value is the second element
        // let secondLargest = arr111[1];
        // let thirdLargest = arr111[2];
        
        // console.log("First largest value:", firstLargest); // Output: 200
        // console.log("Second largest value:", secondLargest); // Output: 100
        // console.log("Third largest value:", thirdLargest); // Output: 100



      //     let a = [1,2,3,4,5,6,7,8,9,10];
      //  // sort method
      //       function even(num){
      //             if(num % 2===0){
      //                console.log(num,"even")
      //             }else{
      //                console.log("odd number",num)
      //             }
      //       }
      //       even(2)
  