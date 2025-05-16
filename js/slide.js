const slides = document.querySelectorAll('.slide_show_item');
const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');

let currentIndex = 0;
let slideInterval;
const slideDuration = 3000; // 3 seconds

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  currentIndex = index;
}

function nextSlide() {
  showSlide((currentIndex + 1) % slides.length);
}

function prevSlide() {
  showSlide((currentIndex - 1 + slides.length) % slides.length);
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, slideDuration);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Start with first slide and auto slide
showSlide(currentIndex);
startAutoSlide();

// Button event listeners
nextBtn.addEventListener('click', () => {
  nextSlide();
  stopAutoSlide();
  startAutoSlide(); // restart timer after manual change
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  stopAutoSlide();
  startAutoSlide(); // restart timer after manual change
});
