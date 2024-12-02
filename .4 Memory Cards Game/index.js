const wrapper = document.getElementsByClassName("card-container")[0];
const startBtnContainer = document.getElementsByClassName(
  "start-btn-container"
)[0];
const startBtn = document.getElementById("start-btn");
const backgroundMusic = document.getElementById("background-music");
const flipEffect = document.getElementById("flip-effect");
const removeCardEffect = document.getElementById("remove-effect");
const finalCardSound = document.getElementById("final-effect");
const gameInfo = document.getElementsByClassName("game-info")[0];
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");
const scoreContainer = document.getElementById("score-container");
const gameResult = document.getElementsByClassName("game-result")[0];
const resetBtn = document.getElementById("reset-btn");
const leo = document.getElementById("leo");

let flippedCards = [];
let matchedCards = [];
let score = 0;
let timeLeft = 120;
let timerInterval;
let gameStarted = false;

async function getCardsJson() {
  let res = await fetch("cards.json");
  let data = await res.json();
  let images = [...data, ...data];
  let shuffledImages = shuffeldCards(images);

  return shuffledImages;
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerElement.textContent = `${minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      endGame(false);
    }
  }, 1000);
}

getCardsJson().then((value) => {
  value.forEach((el) => {
    let cards = document.createElement("div");
    cards.classList.add("cards");
    cards.id = `card-${el.id}`;
    cards.innerHTML = `
      <div class="card-front"><img src="${el.frontImage}"/></div>
      <div class="card-back"><img src="${el.backImage}"/></div>
    `;
    wrapper.appendChild(cards);
  });

  const flipped = document.getElementsByClassName("cards");

  for (let flipp of flipped) {
    flipp.addEventListener("click", () => {
      flipEffect.play();
      if (
        flippedCards.length < 2 &&
        !flipp.classList.contains("flipped") &&
        !matchedCards.includes(flipp)
      ) {
        flipp.classList.toggle("flipped");

        flippedCards.push(flipp);

        if (flippedCards.length === 2) {
          let card1 = flippedCards[0];
          let card2 = flippedCards[1];

          if (
            card1.querySelector(".card-back img").src ===
            card2.querySelector(".card-back img").src
          ) {
            score += 20;
            scoreElement.textContent = score;
            matchedCards.push(card1, card2);
            flippedCards = [];
            if (matchedCards.length === flipped.length) {
              clearInterval(timerInterval);
              endGame(true);
            }
            setTimeout(() => {
              if (matchedCards.length === flipped.length) {
                finalCardSound.play();
              } else {
                removeCardEffect.play();
              }

              card1.style.display = "none";
              card2.style.display = "none";
            }, 1000);
          } else {
            setTimeout(() => {
              card1.classList.remove("flipped");
              card2.classList.remove("flipped");
              flippedCards = [];
            }, 1000);
          }
        }
      }
    });
  }
});

function shuffeldCards(arr) {
  let shuffeldArray = [];
  let useIndexes = [];
  let i = 0;

  while (i < arr.length) {
    let randomCard = Math.floor(Math.random() * arr.length);
    if (!useIndexes.includes(randomCard)) {
      shuffeldArray.push(arr[randomCard]);
      useIndexes.push(randomCard);
      i++;
    }
  }

  return shuffeldArray;
}

startBtn.addEventListener("click", () => {
  if ((startBtnContainer.style.display = "flex")) {
    startBtnContainer.style.display = "none";
  }
  setTimeout(() => {
    backgroundMusic.play();
  }, 500);
  setTimeout(() => {
    if ((wrapper.style.display = "none")) {
      wrapper.style.display = "grid";
    }
  }, 1000);
  setTimeout(() => {
    if ((gameInfo.style.display = "none")) {
      gameInfo.style.display = "flex";
    }
  }, 1000);
  startTimer();
});

function endGame(won) {
  backgroundMusic.pause();
  removeCardEffect.pause();
  backgroundMusic.currentTime = 0;
  const resultMessage = won
    ? `You won: Your score is "${score}" points.`
    : `You failed: Your score is "${score}" points.`;

  gameResult.textContent = resultMessage;
  setTimeout(() => {
    scoreContainer.style.display = "none";
    gameResult.style.display = "flex";
    resetBtn.style.display = "flex";
    leo.style.display = "flex";
    wrapper.style.display = "none";
  }, 1000);
}

resetBtn.addEventListener("click", () => {
  location.reload();
  // score = 0;
  // scoreElement.textContent = score;
  // timeLeft = 60;
  // timerElement.textContent = timeLeft;
  // gameResult.style.display = "none";
  // wrapper.innerHTML = "";
  // matchedCards = [];
  // flippedCards = [];

  // startBtnContainer.style.display = "flex";
  // wrapper.style.display = "none";
  // clearInterval(timerInterval);
});
