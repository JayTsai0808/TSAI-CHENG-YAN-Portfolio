const hero = document.querySelector(".interactive-hero");

if (hero) {
  hero.addEventListener("mousemove", function (event) {
    const rect = hero.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    hero.style.setProperty("--mouse-x", `${x}px`);
    hero.style.setProperty("--mouse-y", `${y}px`);
  });

  hero.addEventListener("mouseleave", function () {
    hero.style.setProperty("--mouse-x", "50%");
    hero.style.setProperty("--mouse-y", "50%");
  });
}