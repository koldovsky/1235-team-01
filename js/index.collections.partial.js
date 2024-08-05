const images = document.querySelectorAll('.collections__image');

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.5)';
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});
const headers = document.querySelectorAll('.list__header');

headers.forEach(header => {
  const originalText = header.textContent;
  const dataText = header.dataset.text;

  header.addEventListener('click', () => {
    header.textContent = dataText.toUpperCase();
    setTimeout(() => {
      header.textContent = originalText;
    }, 200);
  });
});


  