window.addEventListener('load', () => {
  // Create a sequence of animations
  const timeline = gsap.timeline();
  
  // Animate the header logo
  timeline.from('.logo-container', {
    y: -20,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });
  
  // Animate the main content
  timeline.from('h1', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.5');
  
  timeline.from('.tagline', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.7');
  
  timeline.from('.video-container', {
    y: 40,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  }, '-=0.5');
  
  timeline.from('.watch-full-btn', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.7');
  
  // Add hover effect for the button
  const button = document.querySelector('.watch-full-btn');
  
  button.addEventListener('mouseenter', () => {
    gsap.to(button, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
  
  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});