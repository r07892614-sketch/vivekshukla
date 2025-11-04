// 60-second timer with fade pulse animation
let timer = 60;
const countdownEl = document.getElementById("countdown");
const joinBtn = document.getElementById("joinButton");

setInterval(() => {
  timer--;
  if (timer <= 0) {
    timer = 60;
    joinBtn.classList.add("flash");
    setTimeout(() => joinBtn.classList.remove("flash"), 800);
  }
  countdownEl.textContent = timer;
}, 1000);
