///////////   // let arr111 = [1, 20, 100, 40, 45, 5, 55, 200];
// return first largest and second largest number from this array 
// let arr = [1, 20, 100, 40, 45, 5, 55, 200];
// // sort array in decending order 
//     arr.sort((a,b)=>b-a);
//       let fisrtMax = arr[0];
//       let seondMax  = arr[1];
//       console.log(fisrtMax,seondMax,"nn")


// for minimum sort array in acending order 
//    arr.sort((a,b)=>a-b);
//    let firstMinimum = arr[0]
//    let secondMinimum = arr[1]
//    console.log(firstMinimum,secondMinimum,"min")
//Question 2. //const arr1= [{marks: 30, subject: "hindi"},{marks: 80, subject: "english"}, {marks: 50, subject: "math"}, {marks: 60, subject: "science"} ];
// shorts the array accoding marks 
// let arr1= [{marks: 30, subject: "hindi"},{marks: 80, subject: "english"}, {marks: 50, subject: "math"}, {marks: 60, subject: "math"} ];
//     //  arr1.sort((a,b)=>a.marks-b.marks);
//      // we want those values which subject equal math
//        const result =  arr1.filter((e)=>e.subject === "math")
//      console.log(result)

// Question .3 
// reverse array which index start with m =2
// let arr11 =[1,2,3,4,5,6];
//   let startIndex = 2;
//      const reverseSlice =  arr11.slice(startIndex).reverse();
//     //  console.log(reverseSlice,"mm")
//      arr11.splice(startIndex, reverseSlice.length, ...reverseSlice);
//      console.log(arr11,"mm")
// with for loop 
//        let reverseArr = []
//   for(let i=arr11.length-1;i>=0;i--){
//           reverseArr.push(arr11[i])
//   }
//   console.log(reverseArr,"nn")

// Question 4. filter even number and print that in array
    //   const result = arr11.filter((e)=>e%2!==0)
    //   console.log(result,"nn")


    //  function reverseArr(str){
    //             let reverseArr = [];
    //               for(let i = str.length-1;i>=0;i--){
    //                         console.log(str[i])
    //               }
                 
    //  }
    // reverseArr([1,23,45,67,89])

    // Question 6. 
    //    let aarry = [1,2,4,5,6] // n-1 
    //    //aarry.splice(2,0,3)
    // //    aarry.splice(4)  ==? does not include that index 
    //       const result =  aarry.slice(2) // start with n
    //    console.log(result,"n")

    // Question 7. 
         // find largest string   ...........
        //   let string = "hello hello11 wwwwwwwwwww";
            //  function findLargestString(string){
            //  let splitString = string.split(' ');
            //        let largestString = ''
            //         for(let i=0;i<splitString.length;i++){
            //                     // console.log(splitString[i])
            //                     if(splitString[i]>largestString){
            //                         largestString = splitString[i]
            //                     }
            //         }
            //         return largestString
                  
            //  }

            // console.log(findLargestString("hello hello11 wwwwwwwwwww"))

            // function reverseStr(str){
            //            let revere = ''
            //            for(let i =str.length-1; i>=0;i--){
            //                      revere +=str[i]
            //            }
            //            return revere
            // }

            // console.log(reverseStr('Shashikant'));


//// Question .7

// Write a program that prints the numbers from 1 to 100. 
  //  But for multiples of three, print "Fizz" instead of the number, 
  //   for the multiples of five, print "Buzz." For numbers that are 
  //   multiples of both three and five, print "FizzBuzz."

//     function printNum(num){
//              for(let i=1;i<=num;i++){
//                    if(i%3 ===0 && i% 5===0){
//                     console.log("FizzBuzz")
//                    }else if(i%3 ===0){
//                     console.log("Fizz")
//                    }else if(i%5 ===0){
//                     console.log("Buzz")
//                    }else{
//                     console.log(i)
//                    }
//              }
//     }
//    printNum(100)



// Question .8
// find the occurance of number for this  //const arr11 = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

// let Number = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// let occuranceCount = {}
//    for(let num of Number){
//           if(occuranceCount[num]){
//               occuranceCount[num]++
//           }else{
//                occuranceCount[num]=1
//           }
//    }
//    console.log(occuranceCount,"nn")

////////  Quetion 9. //        for( let num of occuranceArry){

// / let str='sdf34sdsdfs546vb78bvn879';  find sum of the number from this string
    
// function findSumOfString(str){
//           let number = str.match(/\d+/g); 
//           let sum = 0
//           for(let i = 0;i<number.length;i++){
//                sum += Number(number[i])
//           }
//           return sum 
// }
// console.log(findSumOfString("sdf34sdsdfs546vb78bvn879"));

  // Question -.10  print only number from this string
//    function printNumber(str){
//               let number = str.match(/\d+/g)
               
//                  for(let i = 0; i<number.length;i++){
//                    console.log( Number(number[i]))
//                  }

//    }
//  printNumber("dsffffff14333333332thbgfhgfh65y656y5");


////////  Question 11. 
 // print only alphabets  only from this string 

//  function printNumber(str){
//                 let String = str.match(/[a-zA-Z]+/g)
//                 // let String = str.split('')
                 
//                    const joinString = String.join(' ')
//                    console.log(joinString,'')
  
//      }
//    printNumber("dsffffff14333333332thbgfhgfh65y656y5");


////  Qestion 11. ..
//add to string 

// let str1 = "Hello"
// let str2 = "World"
//   console.log(`${str1} ${str2}`);

/// Question .12 
// reverse string with for loop 
  // function reverseStr(str){
  //         let revere_str =''
  //            for(let i= str.length-1;i>=0;i--){
  //                  revere_str +=str[i]
  //            }
  //            return revere_str
  // }
  // console.log(reverseStr("Shashikant"))

  /// reverse string without for loop 
//   let inputString = "Shashikant";
// let reversedString = inputString.split('').reverse().join('');
// console.log(reversedString,"bb")

// function findLongString(str){
//   let longestString = '';
//       let string = str.split(' ');
//         for(let i = 0; i<string.length;i++){
//                       //console.log(string[i],"b")
//                    if(string[i].length >longestString.length ){
//                        longestString = string[i]
//                    }
//        }
//         return longestString

// }


// console.log(findLongString("Shashi Shashikant Yadav"))


// const occuranceArry =  [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
//    let occuranceCount = {};
//                for(let num of occuranceArry){
//                 if(! occuranceCount[num]){
//                   occuranceCount[num]= 1
//               }else{
//                 Number(occuranceCount[num]++)
//               }
//                }

//                console.log(occuranceCount,"nnn")
       
// let a = 5;
// let c = 10;
//   [a, c] = [c, a]
//   console.log(a, c);



///////   
// write a program to print marks using for loop
   // objet.key

//  let marks = {
//   shashikant:87,
//   aruna:83,
//   neha:76,
//   anjali:78
//  }
//  console.log("jee")

  //  for(let i=0; i<Object.keys(marks).length;i++){
  //   console.log(`This marks of ${Object.keys(marks)[i]} : ${marks[Object.keys(marks)[i]]}`);
  //  }

    //////////////// to deal with object we use for  in method 
  //  for(let key in marks){
  //   console.log(`This marks of ${key} : ${marks[key]}`)
  //  }

  // let   a = 4;
  //   let i ;
  //    while(i !=a){
  //      i = prompt("Enter the correct number")
  //    }
  //     console.log("You entered the correct number")

 //

 // write a program  123wedfghwsdfg3456dfghrt
//  function findNumber(str){
//   let number = str.match(/\d+/g);
//      let sum =0;
//      for(let i = 0;i<number.length;i++){
//          sum +=Number(number[i])
//      }
//      return sum
// }

// console.log(findNumber("123wedfghwsdfg3456dfghrt"))

 // write a program  123wedfghwsdfg3456dfghrt sperate only number
//  function findNumber(str){
//   let number = str.match(/\d+/g);
//          console.log(number)
// }

// findNumber("123wedfghwsdfg3456dfghrt")


//write a program  123wedfghwsdfg3456dfghrt
//  function findString(str){
//          let string = str.match(/[a-zA-z]+/g);
//           console.log(string,"Nn")
// }

// findString(" 123wedfghwsdfg3456dfghrt")


//  map filter and reduce 
 
let arr = [1,2,3,5,6,8,89,99];
 const result  = arr.reduce((a,b)=>a+b)
   console.log(result,"bb")