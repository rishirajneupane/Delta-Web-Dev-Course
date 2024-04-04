let todo = [];
let req = prompt("Enter your request ");
while (true) {
  if (req == "quit") {
    console.log("App Quited");
    break;
  } else if (req == "list") {
    console.log("-------------------------");
    for (i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("-------------------------");
  } else if (req == "add") {
    let task = prompt("Enter task to add");
    todo.push(task);
  } else if (req == "delete") {
    idx = prompt("enter index of task to delete");
    todo.splice(idx, 1);
    console.log("Task Deleted");
  } else {
    console.log("Please enter valid request");
  }
  req = prompt("Enter your request ");
}
