const mainText = document.getElementById("main-text");
const hamsterGif = document.getElementById("hamster-gif");
const teddyGif = document.getElementById("teddy-gif");
const hearts = document.getElementById("hearts");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const buttonRow = document.getElementById("button-row");

const gifStates = {
  neutral: "assets/hamster-neutral.svg",
  sad: "assets/hamster-sad.svg",
  happy: "assets/hamster-happy.svg"
};

const noTexts = [
  "No",
  "are you sure Pookie? 😰",
  "Pookie please 🥺",
  "I will be very sad! 😭",
  "Last Chance! 😓"
];

let noClickCount = 0;
let noScale = 0.75;
let yesLocked = false;

function refreshNoButton() {
  noBtn.textContent = noTexts[Math.min(noClickCount, noTexts.length - 1)];
  noBtn.style.setProperty("--btn-scale", `${noScale}`);
}

function showSadState() {
  hamsterGif.src = gifStates.sad;
  teddyGif.classList.add("hidden");
  hearts.classList.add("hidden");
  mainText.textContent = noTexts[Math.min(noClickCount, noTexts.length - 1)];
}

function showHappyState() {
  hamsterGif.src = gifStates.happy;
  teddyGif.classList.remove("hidden");
  hearts.classList.remove("hidden");
  mainText.textContent = "Yayyy! Knew it, Pookie! 💕";
}

function moveNoButtonRandomly() {
  if (!noBtn.classList.contains("evasive")) {
    return;
  }

  const rowRect = buttonRow.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();
  const maxLeft = Math.max(0, rowRect.width - btnRect.width);
  const maxTop = Math.max(0, rowRect.height - btnRect.height);
  const left = Math.random() * maxLeft;
  const top = Math.random() * maxTop;

  noBtn.style.left = `${left}px`;
  noBtn.style.top = `${top}px`;
}

function makeNoButtonEvasive() {
  noBtn.classList.add("evasive");
  noBtn.style.left = "250px";
  noBtn.style.top = "22px";
  moveNoButtonRandomly();
}

noBtn.addEventListener("click", () => {
  if (yesLocked) {
    return;
  }

  noClickCount += 1;
  noScale = Math.max(0.3, noScale * 0.8);
  refreshNoButton();
  showSadState();

  if (noClickCount >= 4) {
    makeNoButtonEvasive();
  }
});

noBtn.addEventListener("touchstart", (event) => {
  if (noClickCount >= 4 && !yesLocked) {
    // Move before mobile browsers can turn the touch into a click.
    event.preventDefault();
    moveNoButtonRandomly();
  }
}, { passive: false });

yesBtn.addEventListener("click", () => {
  yesLocked = true;
  showHappyState();
  noBtn.disabled = true;
  noBtn.style.opacity = "0.55";
  noBtn.style.cursor = "default";
  noBtn.style.setProperty("--btn-lift", "0px");
  noBtn.classList.remove("evasive");
  noBtn.style.left = "";
  noBtn.style.top = "";
});

buttonRow.addEventListener("mousemove", (event) => {
  if (noClickCount < 4 || yesLocked) {
    return;
  }

  const rect = noBtn.getBoundingClientRect();
  const dx = event.clientX - (rect.left + rect.width / 2);
  const dy = event.clientY - (rect.top + rect.height / 2);
  const distance = Math.hypot(dx, dy);

  if (distance < 120) {
    moveNoButtonRandomly();
  }
});

refreshNoButton();
