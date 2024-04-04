let favMovie = "avatar";
let guess = prompt("Guess my favourite movie");

while (guess != favMovie && guess != "quit") {
  guess = prompt("Wrong! try again.");
}
if (guess == favMovie) {
  console.log("You win ");
} else {
  console.log("Bye!");
}
