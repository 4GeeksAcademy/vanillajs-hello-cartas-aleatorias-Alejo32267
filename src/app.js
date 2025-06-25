
import "./style.css";


window.onload = () => {
  document.querySelector('.card').classList.add('generateRandomSuit');
  
  setTimeout(() => {
    document.querySelector('.card').classList.remove('heart');
    document.querySelector('.card').classList.add('spade');
  }, 1000); // 1 segundo
};

let generateRandomNumber = () => {
  let numb = Math.floor(Math.random() * 13); // Cambiado a 13 para incluir el "K"
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  return numbers[numb]; // Retorna el número aleatorio
};

let generateRandomSuit = () => {
  let suits = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suits.length); // Cambiado a suits.length
  return suits[indexSuit]; // Retorna el palo aleatorio
};

// Ejemplo de uso
console.log(generateRandomNumber()); // Muestra un número aleatorio
console.log(generateRandomSuit()); // Muestra un palo aleatorio
