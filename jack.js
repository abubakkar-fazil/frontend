let playerData = {
  name: "Roy",
  chips: 190,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el"); //instead of getElementById to fetch text from doc.
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");
const startBtn = document.querySelector("#start-btn");
const newCard = document.querySelector("#new-card-button");
playerEl.textContent = playerData.name + ": $" + playerData.chips;

function getRandomCards() {
  randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard >= 11) {
    return 10;
  } else {
    return randomCard;
  }
}

// function startGame() {
//   isAlive = true;
//   let firstCard = getRandomCards();
//   let secondCard = getRandomCards();
//   cards = [firstCard, secondCard];
//   sum = firstCard + secondCard;
//   renderGame();
// }

startBtn.addEventListener("click", () => {
  isAlive = true;
  let firstCard = getRandomCards();
  let secondCard = getRandomCards();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
});

function renderGame() {
  cardEl.textContent = "Cards :";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum : " + sum;
  if (sum <= 20) {
    message = "do you want draw a card?";
  } else if (sum === 21) {
    message = "you've won the game";
    hasBlackJack = true;
  } else {
    message = "you are out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

newCard.addEventListener("click", () => {
  if (hasBlackJack === false && isAlive === true) {
    let card = getRandomCards();
    sum += card;
    cards.push(card);
  }
  renderGame();
});
