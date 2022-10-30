const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const mainSlide = document.querySelector(".main-slide");
const slideCount = mainSlide.querySelectorAll("div").length;

let slideIndex = 0;

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(event) {
  if (event === "up") {
    slideIndex++;
    if (slideIndex === slideCount) {
      slideIndex = 0;
    }
  } else if (event === "down") {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slideCount - 1;
    }
  }
  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${slideIndex * height}px)`;
  sidebar.style.transform = `translateY(${slideIndex * height}px)`;
}
