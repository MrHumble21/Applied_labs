const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links-container");
const navLinks = document.querySelector("#mob-list");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  //   burger.classList.toggle("active");
  navLinks.classList.toggle("mobile-list");
  console.log(navLinks.classList);
});

const track = document.querySelector(".carousel-track");
const items = Array.from(document.querySelectorAll(".carousel-item"));
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

const itemWidth = items[0].getBoundingClientRect().width;
const itemsPerView = 4;
let currentIndex = 0;

const setTrackWidth = () => {
  const trackWidth = (itemWidth * items.length) / itemsPerView;
  track.style.width = `${trackWidth}px`;
};

setTrackWidth();

window.addEventListener("resize", setTrackWidth);

const setIndex = (index) => {
  currentIndex = index;
  const trackPosition = -currentIndex * itemWidth * itemsPerView;
  track.style.transform = `translateX(${trackPosition}px)`;
};

prevButton.addEventListener("click", () => {
  const newIndex = Math.max(currentIndex - 1, 0);
  setIndex(newIndex);
});

nextButton.addEventListener("click", () => {
  const newIndex = Math.min(currentIndex + 1, items.length / itemsPerView - 1);
  setIndex(newIndex);
});
