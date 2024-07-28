function init() {
    /*
    import('...js');
    */
    import('./catalogs.carousel.js');
    import('./index.about-us-partial.js');
    import('./global.header-nav.js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});