let gameSeq = [];
let userSeq = [];
let gameStarted = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "purple", "green"];
//*********************************** */
document.addEventListener("keypress", function () {
  if (gameStarted == false) {
    console.log("Game Started");
    gameStarted = true;
    levelUp();
  }
});
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level : ${level}`;
  // random
  let ranIdx = Math.floor(Math.random() * 3);
  let randColors = btns[ranIdx];
  let randBtn = document.querySelector(`.${randColors}`);
  gameSeq.push(randColors);
  console.log(gameSeq);

  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `GameOver! Your score was <b>${level}</b> <br>Press any key to start`;

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  gameStarted = false;
  userSeq = [];
  gameSeq = [];
  level = 0;
}
