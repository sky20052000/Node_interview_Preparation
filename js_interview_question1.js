console.log("JS_Interview_Question1.js");

 let arr111 = [1, 20, 100, 40, 45, 5, 55, 200];
// return first largest and second largest number from this array 
const sortedArry  = arr111.sort((a,b)=>b-a);
 console.log(sortedArry[0],sortedArry[1],"sortArray")

 //Question 2. 
// shorts the array accoding marks 
const arr1= [{marks: 30, subject: "hindi"},{marks: 80, subject: "english"}, {marks: 50, subject: "math"}, {marks: 60, subject: "science"} ];
const sortMarks  = arr1.sort((a,b)=> a.marks - b.marks);
console.log(sortMarks,"sortMarks")

////////// Question 3..
// reverse array which index start with m =2
// let arr11 =[1,2,3,4,5,6];
//  let startIndex =2
//  const  reverseArry = arr11.slice(startIndex).reverse()
//  console.log(reverseArry,"reverse")
//  // now join the reverse array 
//   arr11.splice(startIndex,reverseArry.length,...reverseArry);
//  console.log(arr11,"joinTheArray")

//////Question4. reverse the string 


 function reverseStr(str){
          let reversString ='';
          for(let i=str.length-1;i>=0;i--){
               console.log(i,"ii")
               reversString +=str[i]
          }
          console.log(reversString,"reverseString")

 }
 reverseStr("Shashikant")

 let reverseString = "Shashikant Yadav";
 const result = reverseString.split('').reverse().join('');
 console.log(result,"result")

