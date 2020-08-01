import data from "./data.js";

const container = document.querySelector('.slide-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// if length = 1 hide buttons
if (data.length === 1) {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}
// if length is 2, add copies of slides
let people = [...data];
if (data.length === 2) {
  people = [...data, ...data];
}
// Set Slide
container.innerHTML = people.map((person, slideIndex) => {
  const { img, name, job, text } = person;
  let position = 'next';
  if (slideIndex === 0) {position = 'active'};
  if (slideIndex === people.length - 1) {position = 'prev'}
  return `
  <article class="slide ${position}">
          <img
            src="${img}"
            class="img"
            alt="${name}"
          />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">${text}</p>
          <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
          </div>
        </article>
  `
}).join('');

function nextSlide() {
  const active = document.querySelector('.active');
  const prev = document.querySelector('.prev');
  let next = active.nextElementSibling;
  
  if(!next) {
    next = container.firstElementChild;
  };

  active.classList.remove('active');
  prev.classList.remove('prev');
  next.classList.remove('next');

  active.classList.add('prev');
  prev.classList.add('next');
  next.classList.add('active');
}

function prevSlide() {
  const active = document.querySelector('.active');
  const prev = document.querySelector('.prev');
  let prevPrev = prev.previousElementSibling;

  if (!prevPrev) {
    prevPrev = container.lastElementChild;
  }
  
  active.classList.remove('active');
  prev.classList.remove('prev');
  prevPrev.classList.remove('next');

  active.classList.add('next');
  prev.classList.add('active')
  prevPrev.classList.add('prev');
}

nextBtn.addEventListener('click', nextSlide)

prevBtn.addEventListener('click', prevSlide)

