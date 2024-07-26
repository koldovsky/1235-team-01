const slides = [
    '<li class="collections-carousel__slide"><img src="img/catalogs/collections.lamp1.png" width="218" height="300" alt="Aurora Lamp" class="collections-carousel__image"/><p class="collections-carousel__name unit-heading">Aurora Lamp</p><p class="collections-carousel__collection">CLASSIC COLLECTION</p><p class="collections-carousel__year">2023</p></li>',
    '<li class="collections-carousel__slide"><img src="img/catalogs/collections.lamp2.png" width="218" height="300" alt="Luminous Haven" class="collections-carousel__image"/><p class="collections-carousel__name unit-heading">Luminous Haven</p><p class="collections-carousel__collection">WOODEN LIFE COLLECTION</p><p class="collections-carousel__year">2024</p></li>',
    '<li class="collections-carousel__slide"><img src="img/catalogs/collections.lamp3.png" width="218" height="300" alt="Wooden Blocks" class="collections-carousel__image"/><p class="collections-carousel__name unit-heading">Wooden Blocks</p><p class="collections-carousel__collection">WOODEN LIFE COLLECTION</p><p class="collections-carousel__year">2024</p></li>',
    '<li class="collections-carousel__slide"><img src="img/catalogs/collections.lamp4.png" width="218" height="300" alt="Cake in the Ocean" class="collections-carousel__image"/><p class="collections-carousel__name unit-heading">Cake in the Ocean</p><p class="collections-carousel__collection">CEILING FIXTURES</p><p class="collections-carousel__year">2022</p></li>',
    '<li class="collections-carousel__slide"><img src="img/catalogs/collections.lamp5.png" width="218" height="300" alt="Arretia Lamp" class="collections-carousel__image"/><p class="collections-carousel__name unit-heading">Arretia Lamp</p><p class="collections-carousel__collection">BEDSIDE LAMPS</p><p class="collections-carousel__year">2022</p></li>'
];

let currentIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.collections-carousel__track');
    slideContainer.innerHTML = slides[currentIdx];
    if (window.matchMedia('(min-width: 770px)').matches) {
        const secondSlideIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 1000px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
            const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
            slideContainer.innerHTML += slides[fourthSlideIdx];
        }
    }
}

function nextSlide() {
    currentIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
    renderSlide();
}

function prevSlide() {
    currentIdx = currentIdx - 1 < 0 ? slides.length - 1 : currentIdx - 1;
    renderSlide();
}

// Uncomment the line below if you want to automatically move to the next slide every 3 seconds
// setInterval(nextSlide, 3000);

renderSlide();

const btnNext = document.querySelector('.collections-carousel__arrow-right');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.collections-carousel__arrow-left');
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);
