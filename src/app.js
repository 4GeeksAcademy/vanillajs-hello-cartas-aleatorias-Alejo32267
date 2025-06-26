import "./style.css";

window.onload = () => {
  const card = document.querySelector('.card');
  const numberElement = document.querySelector('#number')

  // Generar número y palo aleatorio
  const number = generateRandomNumber();
  const suit = generateRandomSuit();

  // Quitar clases anteriores y agregar el palo
  card.classList.remove("heart", "spade", "diamond", "club");
  card.classList.add(suit);

  numberElement.innerHTML = number;
};

let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let indexNumbers = Math.floor(Math.random() * numbers.length); 
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suits = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suits.length);
  return suits[indexSuit];
};



