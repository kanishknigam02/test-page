const mainText = document.getElementById("main-text");
const gifStage = document.getElementById("gif-stage");
const hamsterGif = document.getElementById("hamster-gif");
const teddyGif = document.getElementById("teddy-gif");
const hearts = document.getElementById("hearts");
const pageHearts = document.getElementById("page-hearts");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const buttonRow = document.getElementById("button-row");

const artStates = {
  neutral: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" role="img" aria-label="Animated cute hamster">
      <ellipse cx="110" cy="78" rx="32" ry="35" fill="#f4b7c1"/>
      <ellipse cx="210" cy="78" rx="32" ry="35" fill="#f4b7c1"/>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -8; 0 0" dur="1.8s" repeatCount="indefinite"/>
        <ellipse cx="160" cy="182" rx="94" ry="88" fill="#efd7bf"/>
        <ellipse cx="160" cy="158" rx="86" ry="74" fill="#f7e7d2"/>
        <ellipse cx="128" cy="120" rx="28" ry="30" fill="#d5a389"/>
        <ellipse cx="192" cy="120" rx="28" ry="30" fill="#d5a389"/>
        <circle cx="130" cy="160" r="8" fill="#2f2231"/>
        <circle cx="190" cy="160" r="8" fill="#2f2231"/>
        <ellipse cx="160" cy="184" rx="16" ry="13" fill="#ff8aa5"/>
        <path d="M145 202 Q160 215 175 202" fill="none" stroke="#7e4f4c" stroke-width="6" stroke-linecap="round"/>
        <ellipse cx="103" cy="187" rx="13" ry="9" fill="#f7b9bd" opacity="0.8"/>
        <ellipse cx="217" cy="187" rx="13" ry="9" fill="#f7b9bd" opacity="0.8"/>
      </g>
    </svg>`,
  sad: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" role="img" aria-label="Animated sad hamster">
      <ellipse cx="110" cy="78" rx="32" ry="35" fill="#f4b7c1"/>
      <ellipse cx="210" cy="78" rx="32" ry="35" fill="#f4b7c1"/>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 5; 0 0" dur="2s" repeatCount="indefinite"/>
        <ellipse cx="160" cy="182" rx="94" ry="88" fill="#efd7bf"/>
        <ellipse cx="160" cy="158" rx="86" ry="74" fill="#f7e7d2"/>
        <ellipse cx="128" cy="120" rx="28" ry="30" fill="#d5a389"/>
        <ellipse cx="192" cy="120" rx="28" ry="30" fill="#d5a389"/>
        <path d="M118 156 Q130 148 142 156" fill="none" stroke="#2f2231" stroke-width="6" stroke-linecap="round"/>
        <path d="M178 156 Q190 148 202 156" fill="none" stroke="#2f2231" stroke-width="6" stroke-linecap="round"/>
        <circle cx="130" cy="168" r="7" fill="#2f2231"/>
        <circle cx="190" cy="168" r="7" fill="#2f2231"/>
        <ellipse cx="160" cy="188" rx="15" ry="12" fill="#ff8aa5"/>
        <path d="M144 214 Q160 196 176 214" fill="none" stroke="#7e4f4c" stroke-width="6" stroke-linecap="round"/>
        <path d="M114 176 C108 190 108 206 116 222" fill="none" stroke="#79c6ff" stroke-width="7" stroke-linecap="round">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="1.2s" repeatCount="indefinite"/>
        </path>
      </g>
    </svg>`,
  happy: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" role="img" aria-label="Animated happy hamster">
      <ellipse cx="110" cy="78" rx="32" ry="35" fill="#f4b7c1"/>
      <ellipse cx="210" cy="78" rx="32" ry="35" fill="#f4b7c1"/>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -10; 0 0" dur="1.4s" repeatCount="indefinite"/>
        <ellipse cx="160" cy="182" rx="94" ry="88" fill="#efd7bf"/>
        <ellipse cx="160" cy="158" rx="86" ry="74" fill="#f7e7d2"/>
        <ellipse cx="128" cy="120" rx="28" ry="30" fill="#d5a389"/>
        <ellipse cx="192" cy="120" rx="28" ry="30" fill="#d5a389"/>
        <path d="M118 160 Q130 174 142 160" fill="none" stroke="#2f2231" stroke-width="6" stroke-linecap="round"/>
        <path d="M178 160 Q190 174 202 160" fill="none" stroke="#2f2231" stroke-width="6" stroke-linecap="round"/>
        <ellipse cx="160" cy="186" rx="16" ry="13" fill="#ff8aa5"/>
        <path d="M140 202 Q160 225 180 202" fill="none" stroke="#7e4f4c" stroke-width="6" stroke-linecap="round"/>
        <path d="M74 98 C84 84 100 84 109 98 C114 108 108 121 93 132 C78 121 70 108 74 98Z" fill="#ff5b93">
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -8; 0 0" dur="1.2s" repeatCount="indefinite"/>
        </path>
        <path d="M222 92 C232 78 248 78 257 92 C262 102 256 115 241 126 C226 115 218 102 222 92Z" fill="#ff6ea8">
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -10; 0 0" dur="1.5s" repeatCount="indefinite"/>
        </path>
      </g>
    </svg>`,
  teddy: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" role="img" aria-label="Animated teddy with love">
      <g>
        <animateTransform attributeName="transform" type="rotate" values="-4 120 150; 4 120 150; -4 120 150" dur="1.8s" repeatCount="indefinite"/>
        <circle cx="86" cy="78" r="24" fill="#9b6a52"/>
        <circle cx="154" cy="78" r="24" fill="#9b6a52"/>
        <circle cx="120" cy="106" r="58" fill="#b98569"/>
        <ellipse cx="120" cy="120" rx="34" ry="26" fill="#f1d4b8"/>
        <circle cx="100" cy="102" r="6" fill="#2b2026"/>
        <circle cx="140" cy="102" r="6" fill="#2b2026"/>
        <path d="M104 130 Q120 122 136 130" fill="none" stroke="#6f4343" stroke-width="6" stroke-linecap="round"/>
        <circle cx="120" cy="115" r="8" fill="#5d3b39"/>
        <ellipse cx="120" cy="184" rx="52" ry="42" fill="#b98569"/>
        <ellipse cx="78" cy="175" rx="16" ry="26" fill="#b98569"/>
        <ellipse cx="162" cy="175" rx="16" ry="26" fill="#b98569"/>
      </g>
      <path d="M170 44 C178 32 192 32 200 44 C205 52 200 63 186 74 C172 63 166 52 170 44Z" fill="#ff5b93">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -12; 0 0" dur="1.1s" repeatCount="indefinite"/>
      </path>
    </svg>`
};

const noTexts = [
  "No",
  "are you sure Pookie? \u{1F630}",
  "Pookie please \u{1F97A}",
  "I will be very sad! \u{1F62D}",
  "Last Chance! \u{1F613}"
];

const buttonTargets = {
  topRight: { x: 1, y: 0 },
  bottomLeft: { x: 0, y: 1 }
};

let noClickCount = 0;
let noScale = 0.75;
let yesLocked = false;
let evadeTarget = "topRight";

function renderArt() {
  hamsterGif.innerHTML = artStates.neutral;
  teddyGif.innerHTML = artStates.teddy;
}

function refreshNoButton() {
  noBtn.textContent = noTexts[Math.min(noClickCount, noTexts.length - 1)];
  noBtn.style.setProperty("--btn-scale", `${noScale}`);
}

function positionNoButton(targetName) {
  const target = buttonTargets[targetName];
  const rowRect = buttonRow.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();
  const maxLeft = Math.max(0, rowRect.width - btnRect.width);
  const maxTop = Math.max(0, rowRect.height - btnRect.height);
  const padding = 8;
  const left = target.x === 1 ? Math.max(padding, maxLeft - padding) : padding;
  const top = target.y === 1 ? Math.max(padding, maxTop - padding) : padding;

  noBtn.style.left = `${left}px`;
  noBtn.style.top = `${top}px`;
}

function showSadState() {
  hamsterGif.innerHTML = artStates.sad;
  teddyGif.classList.add("hidden");
  hearts.classList.add("hidden");
  pageHearts.classList.add("hidden");
  gifStage.classList.remove("celebrate");
  mainText.textContent = noTexts[Math.min(noClickCount, noTexts.length - 1)];
}

function showHappyState() {
  hamsterGif.innerHTML = artStates.happy;
  teddyGif.classList.remove("hidden");
  hearts.classList.remove("hidden");
  pageHearts.classList.remove("hidden");
  gifStage.classList.add("celebrate");
  mainText.textContent = "Yayyy! Knew it, Pookie! \u{1F495}";
}

function makeNoButtonEvasive() {
  noBtn.classList.add("evasive");
  evadeTarget = "topRight";
  positionNoButton(evadeTarget);
}

function evadeToOtherCorner() {
  if (!noBtn.classList.contains("evasive") || yesLocked) {
    return;
  }

  evadeTarget = evadeTarget === "topRight" ? "bottomLeft" : "topRight";
  positionNoButton(evadeTarget);
}

noBtn.addEventListener("click", () => {
  if (yesLocked) {
    return;
  }

  noClickCount += 1;
  noScale = Math.max(0.62, noScale * 0.92);
  refreshNoButton();
  showSadState();

  if (noClickCount >= 4) {
    makeNoButtonEvasive();
  }
});

noBtn.addEventListener("mouseenter", () => {
  if (noClickCount >= 4 && !yesLocked) {
    evadeToOtherCorner();
  }
});

noBtn.addEventListener("touchstart", (event) => {
  if (noClickCount >= 4 && !yesLocked) {
    event.preventDefault();
    evadeToOtherCorner();
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

window.addEventListener("resize", () => {
  if (noClickCount >= 4 && !yesLocked) {
    positionNoButton(evadeTarget);
  }
});

renderArt();
refreshNoButton();
