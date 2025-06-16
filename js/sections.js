const habilidade = document.getElementById("hab");
const sectionHab = document.querySelector(".section-2");
habilidade.addEventListener("click", () => {
  scrollToElement(sectionHab);
});

const sobre = document.getElementById("sob");
const sectionSob = document.querySelector(".section-about");
sobre.addEventListener("click", () => {
  scrollToElement(sectionSob);
});

const proj = document.getElementById("pro");
const sectionPro = document.querySelector(".section-3");
proj.addEventListener("click", () => {
  scrollToElement(sectionPro);
});


function scrollToElement(el, offset = 0) {
  const elementTop = window.scrollY + el.getBoundingClientRect().top;
  const targetY = elementTop - (window.innerHeight / 2) + (el.offsetHeight / 2) + offset;

  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  });
}
