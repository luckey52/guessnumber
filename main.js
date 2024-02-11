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

playButton.addEventListener("click", play);

function pickRandomNum() {
  compumterNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", compumterNum);
}
function play() {
  let userValue = userInput.value;
  if (userValue < compumterNum) {
    resultArea.textContent = "Up!!";
  } else if (userValue > compumterNum) {
    resultArea.textContent = "Down!!";
  } else {
    resultArea.textContent = "You're Correct!!";
  }
}
pickRandomNum();
