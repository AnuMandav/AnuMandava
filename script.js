document.addEventListener('DOMContentLoaded', function() {
  
  const heroSection = document.getElementById('heroSection');
  const mainContent = document.getElementById('mainContent');
  const homeBtn = document.getElementById('homeBtn');
  const downArrow = document.getElementById('downArrow');

  if (!heroSection || !mainContent || !homeBtn || !downArrow) {
    console.error('Missing elements');
    return;
  }

  let isHeroVisible = true;
  let isAnimating = false;

  function hideHeroAndShowContent() {
    if (isAnimating) return;
    isAnimating = true;
    
    // Add hide animation class to hero
    heroSection.classList.add('hide-hero');
    
    // Wait for animation to complete (doubled timing: 800ms)
    setTimeout(() => {
      heroSection.style.display = 'none';
      heroSection.classList.remove('hide-hero');
      
      // Show main content with animation
      mainContent.classList.add('show-content');
      homeBtn.classList.add('show-home');
      
      isHeroVisible = false;
      isAnimating = false;
      
      // Scroll to top of content smoothly
      setTimeout(() => {
        mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }, 800);  // Doubled from 400 to 800
  }

  function showHeroAndHideContent() {
    if (isAnimating) return;
    isAnimating = true;
    
    // Hide main content and home button
    mainContent.classList.remove('show-content');
    homeBtn.classList.remove('show-home');
    
    // Show hero
    heroSection.style.display = 'block';
    
    // Trigger reflow for animation
    void heroSection.offsetWidth;
    
    isHeroVisible = true;
    isAnimating = false;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Down arrow click
  downArrow.addEventListener('click', () => {
    if (isHeroVisible && !isAnimating) {
      hideHeroAndShowContent();
    }
  });

  // Scroll event - lower threshold for easier trigger
  window.addEventListener('scroll', () => {
    if (isHeroVisible && !isAnimating && window.scrollY > 20) {
      hideHeroAndShowContent();
    }
  });

  // HOME button click
  homeBtn.addEventListener('click', () => {
    if (!isHeroVisible && !isAnimating) {
      showHeroAndHideContent();
    }
  });

  // Initialize
  mainContent.classList.remove('show-content');
  homeBtn.classList.remove('show-home');
  heroSection.style.display = 'block';
  
  console.log('Initialized with doubled animation timings');
});
