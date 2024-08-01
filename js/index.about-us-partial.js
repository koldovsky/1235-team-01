gsap.registerPlugin(ScrollTrigger);
const clock = document.querySelector(".about-us__clock");
const animatedText = document.querySelector(".about-us__header");

function updateClock() {
  clock.innerText = new Date().toLocaleTimeString("uk");
}
setInterval(updateClock, 1000);

gsap.to(animatedText, {
  scale: 1.1,
  duration: 1,
  ease: "power1.inOut",
  repeat: 3,
  yoyo: true,
  scrollTrigger: {
    trigger: animatedText,
    start: "top 80%", 
    end: "bottom 20%",
    toggleActions: "restart none none none",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const statsItems = document.querySelectorAll(".stats__item");
  statsItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 200);
  });
});
