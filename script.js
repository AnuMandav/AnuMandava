// Elements
const downArrow = document.getElementById('downArrow');
const mainContent = document.getElementById('mainContent');
const homeBtn = document.getElementById('homeBtn');

let contentVisible = true;

function hideContent() {
  mainContent.classList.add('hidden');
  downArrow.style.display = 'none';
  homeBtn.style.display = 'inline-block';
  contentVisible = false;
}

function showContent() {
  mainContent.classList.remove('hidden');
  downArrow.style.display = 'inline-block';
  homeBtn.style.display = 'none';
  contentVisible = true;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Down arrow click ONLY — this hides content
downArrow.addEventListener('click', () => {
  if (contentVisible) {
    hideContent();
  }
});

// Home button click — brings content back
homeBtn.addEventListener('click', () => {
  if (!contentVisible) {
    showContent();
  }
});

// NO auto-hide on scroll — removed that functionality
// You can now scroll freely and read everything

// Ensure correct initial state
showContent();
