let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let div = document.querySelector("div");
let button = document.querySelector("button");

let changeColor = function () {
  console.log(this.innerText);
  this.style.backgroundColor = "red";
};

h1.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
div.addEventListener("click", changeColor);
button.addEventListener("click", changeColor);
