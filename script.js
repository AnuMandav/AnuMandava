// Elements
const downArrow = document.getElementById('downArrow');
const mainContent = document.getElementById('mainContent');
const homeBtn = document.getElementById('homeBtn');

let hasScrolledOrClicked = false;

// Function to hide content and switch to HOME button
function hideContent() {
  mainContent.classList.add('hidden');
  downArrow.style.display = 'none';
  homeBtn.classList.add('visible');
  hasScrolledOrClicked = true;
}

// Function to show content and switch to down arrow
function showContent() {
  mainContent.classList.remove('hidden');
  downArrow.style.display = 'inline-block';
  homeBtn.classList.remove('visible');
  hasScrolledOrClicked = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Down arrow click
downArrow.addEventListener('click', () => {
  if (!hasScrolledOrClicked) {
    hideContent();
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }
});

// Home button click
homeBtn.addEventListener('click', () => {
  showContent();
});

// Scroll event
window.addEventListener('scroll', () => {
  if (hasScrolledOrClicked) return;
  if (window.scrollY > 50) {
    hideContent();
  }
});
