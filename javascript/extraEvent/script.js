let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
let user = document.querySelector("#user");
user.addEventListener("change", function (evt) {
  evt.preventDefault();
  console.log(this.value);
  console.log("changed event");
});
let input = document.querySelector("input");
input.addEventListener("input", function (evt) {
  evt.preventDefault();
  console.log(this.value);
  console.log("input event");
});
