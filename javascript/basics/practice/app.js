// function multiGreet(func, n) {
//   for (i = 1; i <= n; i++) {
//     func();
//   }
// }

// let greet = function () {
//   console.log("Hello");
// };
// multiGreet(greet, 5);

//Higher order functions
// function oddEvenfactory(request) {
//   if (request == "even") {
//     return function (n) {
//       console.log(n % 2 == 0);
//     };
//   } else if (request == "odd") {
//     return function (n) {
//       console.log(n % 2 != 0);
//     };
//   } else {
//     console.log("Wrong request");
//   }
// }

// let request = "odd";

//this
// const student = {
//   name: "Rishi",
//   age: 24,
//   math: 77,
//   eng: 88,
//   science: 99,
//   avg() {
//     let average = (this.math + this.eng + this.science) / 3;
//     console.log(average);
//   },
// };
//

//
//trycatch
//
//

// console.log("hello");
// console.log("hello");
// try{
// console.log(a);
// }catch{
//   console.log("error occured in a");
// }
// console.log("hello1");
// console.log("hello1");

//
//
//
//arrow functions
// const cube=n=>n*n*n;

//
//
// const pow=(a,b)=>{
//   console.log(Math.pow(2,3));
// }
//settimeout
//

// let id=setInterval(() => {
//   console.log("Rishi");
// }, 4000);
// console.log(id);

// console.log("Hello");
// setTimeout(() => {
//   console.log("Rishi");
// }, 4000);
// console.log("I am");

//
//
//
//
// let student = {
//   name: "Rishi",
//   age: 24,
//   marks: 77,
//   getMarks: function () {
//     console.log(this);
//     return this.marks;
//   },
//   getName: () => {
//     console.log(this);
//     return this.name;
//   },
//   info1:function(){
//     setTimeout(()=>{
//       console.log(this);
//     },2000)
//   },
//   info2:function(){
//     setTimeout(function(){
//       console.log(this);
//     },2000)
//   }
// };
////
//
//
//
//

// const cube = n => n * n * n;
// console.log(cube(2));

//
//
//

// let id = setInterval(() => {
//   console.log("Hello World !");
// }, 2000);

// setTimeout(() => {
//   clearInterval(id);
//   console.log("Clear interval ran");
// }, 10000);

//
//
//
// for each
// arr=["Rishi","Raj","Neupane"]
// arr.forEach((e)=>{
//   console.log(e);
// })

//
//
//
// let arr=[{
// name:"Rishi1",
// marks:99
// },{
//   name:"Raj1",
//   marks:100
// },{
//   name:"Neupane1",
//   marks:95
// }]

// arr.forEach((e)=>{
//   console.log(e.marks);
// })

//
//
//map and reduce

// let arr=[{
//   name:"Rishi1",
//   marks:99
//   },{
//     name:"Raj1",
//     marks:100
//   },{
//     name:"Neupane1",
//     marks:95
//   }]

// arr.forEach((e)=>{
//   console.log(e.marks);
// })

//   let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let solution=arr.map((e)=>{
//   console.log(e*2);
// })
//
//

// let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let ans=num.filter((e)=>{
// return e%2!=0;
// })
//
//
//
// every and some

// [1, 3, 5, 7].every((e) => e % 2 != 0);

// [1, 3, 5, 7].some((e) => e % 2 != 0);
//
//
//reduce
// let num=[1,2,3,4,5,6,7,8,9,25,10,11,12,13,14,15];
// let final=num.reduce((res,el)=>{if (el>res){
//   return el;
// }else{
//   return  res;
// }

// })
// console.log(final);//
//
// let num=[1,2,3,4,5,10,20,30,35,40,45,50]
// let res=num.filter((e)=>{
//    return e%10==0;

// })
//
//
// //
// let num=[10,20,30,40,50]
// let res=num.every((e)=>{
//    return e%10==0;

// })

//
//
//
//
// let num = [4, 5, 10, 20, 30, 35, 40, 45, 50, 1,2, 3, 89];
// const getmin = function (num) {
//   let ans = num.reduce((res, el) => {
//     if (res < el) {
//       return res;
//     } else {
//       return el;
//     }
//   });
//   return ans;
// };

//
//
// spread ..
// let odd = [1,3,5,7,9];
// let even=[2,4,6,8,10]
// let newNum=[...odd,...even]
// // console.log(newNum);
//
//
//

let data = {
  name: "Rishi",
  age: 24,
};
let copyData = { ...data,id:12 };


let  namber=[1,2,3,4,5]
let nunam={...namber}


