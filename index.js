const addCardBtn = document.getElementById("add-card");
const cards = document.getElementById("cards");

let cardsArray = [];
async function getQuotes() {
  try {
    const response = await fetch("api.quotable.io/quotes/random?maxLength=50");
    const data = await response.json();
    console.log(typeof data);
    const quotes = data[0].content;
    console.log(quotes);
  } catch (error) {
    console.log(error);
  }
}

getQuotes();

function addCard() {
  const card = document.createElement("div");
  card.classList.add("card");
  const randomImageUrl = `https://picsum.photos/200/200?random=${Math.floor(
    Math.random() * 1000
  )}`;
  card.innerHTML = `  <h3>Card ${Object.keys(cardsArray).length + 1}</h3>
                        <img src=${randomImageUrl}>
                        <p>${getQuotes()}</p>`;
  cards.appendChild(card);
  cardsArray.push(card);
}

function randomizeArray() {
  // Shuffle the array using Fisher-Yates (Durstenfeld) shuffle algorithm
  for (let i = cardsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
  }

  cards.innerHTML = "";

  cardsArray.forEach((card) => {
    cards.appendChild(card);
  });
}

// function randomizeArray() {
//   cardsArray.map((card) => {
//     return Math.floor(Math.random() * cardsArray.indexOf(card));
//   });
// }

// addCard.addEventListener("click", () => {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   card.innerHTML = `  <h3>Card</h3>
//                         <img src="https://picsum.photos/200/300">
//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, atque.</p>`;
//   cards.appendChild(card);
// });
