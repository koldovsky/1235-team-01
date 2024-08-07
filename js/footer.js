const socialIcons = document.querySelector('.footer__social-icons').querySelectorAll('img');

function animateIcon(icon) {
  icon.style.opacity = 0.5;
  icon.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';

  icon.addEventListener('mouseover', () => {
    icon.style.opacity = 1;
    icon.style.transform = 'scale(1.1)';
  });

  icon.addEventListener('mouseout', () => {
    icon.style.opacity = 0.5;
    icon.style.transform = 'scale(1)';
  });
}

socialIcons.forEach(animateIcon);
