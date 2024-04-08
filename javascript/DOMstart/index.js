// let smallImg=document.getElementsByClassName("jktimage");
// for(let i=0;i<smallImg.length;i++){
//     smallImg[i].src="./user5.png"
//     console.dir(`value of image is changed${i}`);
// }

// console.log(
//     document.querySelector("div li"));

// console.log(document.querySelector(".starter"));

// //
// let para = document.querySelector("p");
// console.dir(para);

// let hometown=document.getElementsByClassName('jktimage')
//  for(i=0;i<hometown.length;i++){
//     hometown[i].src="./user5.png"
//     console.dir(`${i} source value is changed`)
//  }
//
// firstimg=document.querySelector('#first')
// console.dir(firstimg)
///
//
// let ptag =document.querySelectorAll('p')
//
//
// let forall = document.querySelectorAll(".starter li");
// for(all of forall)
// {all.style.color = "red";}

// for (i = 0; i < forall.length; i++) {}
//   {forall[i].style.color = "red";}

//
//

// let btn = document.querySelector("button");
// btn.onclick = function () {
//   console.log("Button was clicked!");
// };

//
//
//



//
//
//
// let button = document.querySelectorAll("button");

// for (btn of button) {
//   btn.onclick = boton;
//   btn.onclick = buton;
// //   btn.onmouseenter = onmaus;
// }
// function boton() {
//   console.log(" wow, button was clicked !");
 
// }

// function buton() {
//     console.log(" button was clicked 2!");
// }
// function onmaus() {
//   console.log("Mouse entered ! ");
// }
//
//
//
let button = document.querySelectorAll("button");
for (btn of button){
btn.addEventListener("click",sayHello)
btn.addEventListener("click",sayName)
}

function sayHello(){
    console.log("Hello");
};
function sayName(){
    console.log("Rishi");
}