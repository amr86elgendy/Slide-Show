/** @format */

const mySlider = document.querySelector(".slide"),
  myImgs = document.querySelectorAll(".slide img"),
  prenBtn = document.getElementById("prev"),
  nextBtn = document.getElementById("next"),
  dots = document.querySelectorAll(".dot");

let counter = 1;
const size = mySlider.clientWidth;

mySlider.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener("click", next);
prenBtn.addEventListener("click", prev);
mySlider.addEventListener("transitionend", returnSlide);
activeClass();
// setInterval(next, 5000)

function next() {
  if (counter >= myImgs.length - 1) return;
  mySlider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  mySlider.style.transform = `translateX(${-size * counter}px)`;
  activeClass();
}

function prev() {
  if (counter <= 0) return;
  mySlider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  mySlider.style.transform = `translateX(${-size * counter}px)`;
  activeClass();
}

function returnSlide() {
  if (myImgs[counter].id === "lastClone") {
    mySlider.style.transition = "none";
    counter = myImgs.length - 2;
    mySlider.style.transform = `translateX(${-size * counter}px)`;
  }
  if (myImgs[counter].id === "firstClone") {
    mySlider.style.transition = "none";
    counter = 1 || myImgs.length - counter;
    mySlider.style.transform = `translateX(${-size * counter}px)`;
  }
  activeClass();
}

function bullets(counter) {
  mySlider.style.transition = "transform 0.4s ease-in-out";
  mySlider.style.transform = `translateX(${-size * counter}px)`;
}

function activeClass() {
  dots.forEach((dot, index) => {
    if (counter == index + 1) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}
