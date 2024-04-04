let favMovie = "avatar";
let guess = prompt("Guess my favourite movie");

while (guess != favMovie) {
  if (guess == "quit") {
    console.log("Bye!");
    break;
  }

  guess = prompt("Wrong! try again.");
}

if (guess == favMovie) {
  console.log("You win ");
}
