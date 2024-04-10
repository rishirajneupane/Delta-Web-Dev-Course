let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  if (inp.value.trim() !== "") { // Check if input is not empty
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
  } else {
    alert("Please enter a task."); // Alert the user if input is empty
  }
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});
