const navWithDropDown = document.querySelector(".nav-link");
const dropDowns = document.querySelector(".drop-down");
const slider = document.querySelector(".slider");
const slideImages = document.querySelectorAll(".slide-page");
const slideWidth = getComputedStyle(slideImages[1]).width;
const slideMarginLeft = getComputedStyle(document.querySelector(".container"))
  .marginLeft;
const sliderButtons = document.querySelectorAll(".slider-button");

let currentSlideIndex = 0;
let slideTimer = null;

navWithDropDown.addEventListener("mouseenter", () => {
  dropDowns.classList.toggle("hidden");
});

navWithDropDown.addEventListener("mouseleave", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const pointedTag = document.elementFromPoint(x, y);
  if (pointedTag === document.querySelector(".top-left-menus")) {
    dropDowns.classList.toggle("hidden");
  }
});

dropDowns.addEventListener("mouseleave", () => {
  dropDowns.classList.toggle("hidden");
});

function setSlideIndex(index) {
  if (index === -1) {
    currentSlideIndex = slideImages.length - 1;
  } else if (index === slideImages.length) {
    currentSlideIndex = 0;
  }
}

function increaseSlideIndex() {
  if (currentSlideIndex === slideImages.length - 1) {
    currentSlideIndex = 0;
  } else {
    ++currentSlideIndex;
  }
}

function decreaseSlideIndex() {
  if (currentSlideIndex === 0) {
    currentSlideIndex = slideImages.length - 1;
  } else {
    --currentSlideIndex;
  }
}

function setSliderInterval() {
  if (slideTimer) {
    clearInterval(slideTimer);
  }
  slideTimer = setInterval(() => {
    increaseSlideIndex();
    getSlide();
  }, 2000);
}

function getSlide() {
  const xOffset =
    (parseInt(slideWidth) + parseInt(slideMarginLeft) + 1) * currentSlideIndex;
  slider.style.transform = `translate(-${xOffset}px)`;
}

function initSliderButton() {
  sliderButtons[0].addEventListener("click", () => {
    decreaseSlideIndex();
    getSlide();
    setSliderInterval();
  });
  sliderButtons[1].addEventListener("click", () => {
    increaseSlideIndex();
    getSlide();
    setSliderInterval();
  });
}

function initSlider() {
  for (let i = 0; i < slideImages.length; ++i) {
    if (i === 0) {
      continue;
    }

    const containerMarginLeft = getComputedStyle(
      document.querySelector(".container")
    ).marginLeft;

    slideImages[i].style.marginLeft = containerMarginLeft;
  }

  getSlide();
  setSliderInterval();
}

initSlider();
initSliderButton();
