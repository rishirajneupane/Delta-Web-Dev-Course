let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let user = form.elements[0]; // can use this or form 
  let pass = this.elements[1];
  //   let user = document.querySelector("#user");
  //   let pass = document.querySelector("#pass");
  console.log("username : ", user.value);
  console.log("Password : ", pass.value);
  alert(
    `Hi ${user.value}, your password is set to ${pass.value} successfully !`
  );
});
