let countdownValue = 60;
const countdownElement = document.getElementById("countdown");
const imageContainer = document.getElementById("image-container");

function updateCountdown() {
  countdownElement.textContent = countdownValue;

  if (countdownValue === 0) {
    countdownElement.style.display = "none";
    imageContainer.style.display = "block";
    document.body.style.backgroundColor = "#333";
    clearInterval(timerInterval);
  }
}

updateCountdown();

const timerInterval = setInterval(updateCountdown, 1000);

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
  number.classList.add("number");
  const position = getRandomPosition();
  const color = "black";

  number.style.left = `${position.x}px`;
  number.style.top = `${position.y}px`;
  number.style.color = color;

  document.body.appendChild(number);
}

// Create random numbers every second
setInterval(createRandomNumber, 300);
