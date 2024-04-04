let maxNum = prompt("Enter maximum number");
let randomNum = Math.floor(Math.random() * maxNum) + 1;
let guessNum = prompt(`Guess the number between 1 to ${maxNum}`);

while (true) {
  if (guessNum == "quit") {
    console.log("Bye!");
    break;
  }
  guessNum = parseInt(guessNum);
  if (guessNum == randomNum) {
    console.log( `Congratulation ! You guess right number. Right Number was ${randomNum}`);
    break;
  } else if (guessNum < randomNum) {
    guessNum = prompt("You guess too small number. Please try again ");
  } else {
    guessNum = prompt("You guess too large number. Please try again ");
  }
}
