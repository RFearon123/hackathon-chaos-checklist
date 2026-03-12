/*

Change the background colour of a webpage when you click a button.
BONUS: can you make the colour randomly change?

*/

let body = document.querySelector("body");
let button = document.querySelector("button");

function randomNumber() {
  return Math.floor(Math.random() * 255 + 1);
}

function changeColour() {
  let rgb1 = randomNumber();
  let rgb2 = randomNumber();
  let rgb3 = randomNumber();
  
  body.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
}

button.addEventListener("click", changeColour);
