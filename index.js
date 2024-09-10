const addCardBtn = document.getElementById("add-card");
const cards = document.getElementById("cards");
let cardsArray = [];
const quotes = [
  "Inki Pinki Ponki",
  "Daddy Bought A Donkey",
  "Donkey Dies",
  "Daddy cries",
];

function addCard() {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `  <h3>Card ${Object.keys(cardsArray).length + 1}</h3>
                        <img src="https://picsum.photos/200/200">
                        <p>${
                          quotes[Math.floor(Math.random() * quotes.length)]
                        }</p>`;
  cards.appendChild(card);
  cardsArray.push(card);
  console.log(cardsArray.length, cardsArray);
}

function randomizeArray() {
  cardsArray.map((card) => {
    return Math.floor(Math.random() * cardsArray.indexOf(card));
  });
  console.log(cardsArray);
}

// addCard.addEventListener("click", () => {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   card.innerHTML = `  <h3>Card</h3>
//                         <img src="https://picsum.photos/200/300">
//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, atque.</p>`;
//   cards.appendChild(card);
// });
