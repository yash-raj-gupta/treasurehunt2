let slideIndex = 0;

showSlides();

function showSlides() {
  let i;
  const slides = document.querySelectorAll(".slideshow-image");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
}


function showImage(n) {
  let i;
  const slides = document.querySelectorAll(".slideshow-image");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function getRandomPosition() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  return { x, y };
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Create and move random numbers
function createRandomNumber() {
  const number = document.createElement("p");
  number.textContent = Math.floor(Math.random() * 100);
  number.classList.add("number");
  const position = getRandomPosition();
  const color = getRandomColor();

  number.style.left = `${position.x}px`;
  number.style.top = `${position.y}px`;
  number.style.color = color;

  document.body.appendChild(number);
}

// Create random numbers every second
setInterval(createRandomNumber, 200);
