const numDashes = 100;
const dashDuration = 30000;
var v =
  (1 +
    1 +
    1 +
    1 +
    1 +
    1 +
    1 +
    1 +
    1 +
    1 -
    2 -
    2 +
    1 +
    3 +
    9 -
    5 -
    7 +
    2 +
    1 -
    5) *
    3 -
  5 +
  6 -
  4 -
  2;

function changeTonumber(dashElement) {}

for (let i = 0; i < numDashes; i++) {
  const dash = document.createElement("div");
  dash.textContent = "-";
  dash.className = "dash";
  dash.style.left = Math.random() * window.innerWidth + "px";
  dash.style.top = Math.random() * window.innerHeight + "px";
  dash.style.fontSize = 2.5 + "rem";
  document.body.appendChild(dash);

  setTimeout(() => changeTonumber(dash), Math.random() * dashDuration);
}
function getRandomPosition() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  return { x, y };
}

function getRandomColor() {
  const letters = "0F";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 2)];
  }
  return color;
}

function createRandomNumber() {
  const number = document.createElement("p");
  number.textContent = Math.floor(Math.random() * 10);
  number.classList.add("xyzax");
  const position = getRandomPosition();
  const color = getRandomColor();

  number.style.left = `${position.x}px`;
  number.style.top = `${position.y}px`;
  number.style.color = color;

  document.body.appendChild(number);
}

setInterval(createRandomNumber, 250);
