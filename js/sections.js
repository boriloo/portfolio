const habilidade = document.getElementById("hab");
const el = document.querySelector(".section-2");

habilidade.addEventListener("click", () => {
  scrollToElement(el);
});

function scrollToElement(el, offset = 0) {
  const y = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({
    top: y - y * 0.1,
    behavior: "smooth",
  });
}
