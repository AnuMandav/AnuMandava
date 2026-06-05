// Get elements
const heroSection = document.getElementById('heroSection');
const mainContent = document.getElementById('mainContent');
const homeBtn = document.getElementById('homeBtn');
const downArrow = document.getElementById('downArrow');

let isHeroVisible = true;

// Function to hide hero, show content and HOME button
function hideHeroAndShowContent() {
  heroSection.classList.add('hide-hero');
  mainContent.classList.add('show-content');
  homeBtn.classList.add('show-home');
  isHeroVisible = false;
}

// Function to show hero, hide content and HOME button
function showHeroAndHideContent() {
  heroSection.classList.remove('hide-hero');
  mainContent.classList.remove('show-content');
  homeBtn.classList.remove('show-home');
  isHeroVisible = true;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Down arrow click
downArrow.addEventListener('click', () => {
  if (isHeroVisible) {
    hideHeroAndShowContent();
  }
});

// Scroll event: if hero visible and user scrolls down
window.addEventListener('scroll', () => {
  if (isHeroVisible && window.scrollY > 30) {
    hideHeroAndShowContent();
  }
});

// HOME button click
homeBtn.addEventListener('click', () => {
  if (!isHeroVisible) {
    showHeroAndHideContent();
  }
});
