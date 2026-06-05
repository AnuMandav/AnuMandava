// Get elements
const heroSection = document.getElementById('heroSection');
const mainContent = document.getElementById('mainContent');
const homeBtn = document.getElementById('homeBtn');
const downArrow = document.getElementById('downArrow');

let isHeroVisible = true;

// Function to hide hero, show content and HOME button
function hideHeroAndShowContent() {
  heroSection.style.display = 'none';
  mainContent.style.display = 'block';
  homeBtn.style.display = 'inline-block';
  isHeroVisible = false;
}

// Function to show hero, hide content and HOME button
function showHeroAndHideContent() {
  heroSection.style.display = 'block';
  mainContent.style.display = 'none';
  homeBtn.style.display = 'none';
  isHeroVisible = true;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Down arrow click
if (downArrow) {
  downArrow.addEventListener('click', () => {
    if (isHeroVisible) {
      hideHeroAndShowContent();
    }
  });
}

// Scroll event: if hero visible and user scrolls down
window.addEventListener('scroll', () => {
  if (isHeroVisible && window.scrollY > 30) {
    hideHeroAndShowContent();
  }
});

// HOME button click
if (homeBtn) {
  homeBtn.addEventListener('click', () => {
    if (!isHeroVisible) {
      showHeroAndHideContent();
    }
  });
}

// Ensure main content starts hidden
mainContent.style.display = 'none';
homeBtn.style.display = 'none';
heroSection.style.display = 'block';
