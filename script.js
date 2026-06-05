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

// Down arrow click
downArrow.addEventListener('click', () => {
  if (contentVisible) {
    hideContent();
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }
});

// Home button click
homeBtn.addEventListener('click', () => {
  if (!contentVisible) {
    showContent();
  }
});

// Scroll: hide content when scrolling down
window.addEventListener('scroll', () => {
  if (contentVisible && window.scrollY > 50) {
    hideContent();
  }
});

// Ensure correct initial state
showContent();
