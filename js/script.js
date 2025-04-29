const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu_bar');
const header = document.querySelector('.header');

function updateBodyTopPadding() {
  const headerHeight = header.offsetHeight; // Get the height of the header
  document.body.style.paddingTop = headerHeight + 'px'; // Set the body's top padding to the header's height
}

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show'); // Toggle the visibility of the menu
  header.classList.toggle('expanded'); // Toggle the header class for styling
  updateBodyTopPadding(); // Update the body's top padding when the menu is toggled
});
