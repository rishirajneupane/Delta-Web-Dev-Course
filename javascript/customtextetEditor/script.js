let input = document.querySelector("input");
let h1 = document.querySelector("h1");
input.addEventListener("input", function (evt) {
//   evt.preventDefault();
  console.log(input.value);
  h1.innerText = input.value;
});
