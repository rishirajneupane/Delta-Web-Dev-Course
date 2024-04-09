// let btn = document.querySelector("button");
// btn.addEventListener("click", function (event) {
//   console.log(event);
//   console.log("Button Clicked ");
// });

// btn.addEventListener("dblclick",function(evt){
//   console.log(evt);
//   console.log("Double clicked");
// });

//
//
//
// input=document.querySelector("input")
// input.addEventListener("keydown",function(evt){
//   console.log("code:",evt.code);
//   console.log("key:",evt.key);
//   console.log("key was pressed");
// })
//
//
input = document.querySelector("input");
input.addEventListener("keydown", function (event) {
  console.log(event.code);
  if (event.code == "KeyU") {
    console.log("ArrowUp Pressed");
  } else if (event.code == "KeyD") {
    console.log("ArrowDown Pressed");
  } else if (event.code == "KeyL") {
    console.log("ArrowLeft Pressed");
  } else if (event.code == "KeyR") {
    console.log("ArrowRight Pressed");
  }
});
