//랜덤번호지정
//유저가 번호를 입력한다 그리고  go 누름
// 만약에 유저가 랜덤번호를 맞추면 맞췄습니다
// 래덤번호가 < 유저번호 down
//래덤번호가 < 유저번호 up
//reset 누르면 게임이 리셋된다
// 5번기회를 다 쓰면 게임이 끝난다
// 1~100 범위 밖 숫자 입력하면 알려준다, 기회를 깍지 않는다
// 이미 입력한 숫자이면 알려준다, 기회를 깍지 않는다

let compumterNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  compumterNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", compumterNum);
}
function play() {
  let userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과100사이 숫자를 입력해주세요";
    return;
  }
  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다";
    return;
  }
  chances--;
  chanceArea.textContent = `남은기회:${chances}번`;
  console.log("chances", chances);
  if (userValue < compumterNum) {
    resultArea.textContent = "Up!!";
  } else if (userValue > compumterNum) {
    resultArea.textContent = "Down!!";
  } else {
    resultArea.textContent = "You're Correct!!";
    gameOver = true;
  }
  history.push(userValue);
  console.log(history);
  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}
function reset() {
  userInput.value = "";
  pickRandomNum();
  resultArea.textContent = "결과값이 여기에 나옵니다";
}
pickRandomNum();
