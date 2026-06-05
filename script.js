// Elements
const downArrow = document.getElementById('downArrow');
const heroSection = document.getElementById('heroSection');
const mainContent = document.getElementById('mainContent');
const homeBtn = document.getElementById('homeBtn');

let contentVisible = false; // Content starts hidden
let heroVisible = true; // Hero starts visible

// Function to hide hero and show content
function showContent() {
  heroSection.classList.add('hidden');
  mainContent.classList.add('visible');
  homeBtn.classList.add('visible');
  heroVisible = false;
  contentVisible = true;
}

// Function to show hero and hide content (HOME)
function showHero() {
  heroSection.classList.remove('hidden');
  mainContent.classList.remove('visible');
  homeBtn.classList.remove('visible');
  heroVisible = true;
  contentVisible = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Down arrow click
downArrow.addEventListener('click', () => {
  if (heroVisible) {
    showContent();
  }
});

// Scroll event: if user scrolls down while hero is visible, hide hero
window.addEventListener('scroll', () => {
  if (heroVisible && window.scrollY > 30) {
    showContent();
  }
});

// Home button click
homeBtn.addEventListener('click', () => {
  if (!heroVisible) {
    showHero();
  }
});

// Initial state: hero visible, content hidden
