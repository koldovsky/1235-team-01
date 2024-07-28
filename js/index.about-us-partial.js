const clock = document.querySelector(".about-us__clock");
const animatedText = document.querySelector(".about-us__header");

function updateClock() {
  clock.innerText = new Date().toLocaleTimeString("uk");
}
setInterval(updateClock, 1000);

gsap.to(animatedText, {
  scale: 1.1,
  duration: 1.5,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});

document.addEventListener("DOMContentLoaded", () => {
  const statsItems = document.querySelectorAll(".stats__item");
  statsItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 200); // Затримка між анімаціями кожного елемента
  });
});
