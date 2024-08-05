  document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll('.animated-element');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 
    });
  
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  });
  