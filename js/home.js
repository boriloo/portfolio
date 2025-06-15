const lastElement = document.querySelector(".footer");
const distance = lastElement.getBoundingClientRect().top + window.scrollY;
const realDistance = lastElement.offsetHeight + distance;
const fakeScroll = document.querySelector(".fake-scroll");
fakeScroll.style.height = `${realDistance + 100}px`;
const circle = document.querySelector(".cursor-ball");
const sectionRow = document.querySelector(".sections");
const topSection = document.querySelector(".top-section");
const scrollContainer = document.querySelector(".scroll-container");
let highGraph = true;
let scrollValue = 0;

let lastScroll = 0;

if (window.innerWidth < 770) {
  document.body.classList.remove('no-cursor')
}


const graphIcon = document.querySelector(".graph-icon");
const graphMode = document.querySelector(".graph-mode");
if (window.innerWidth < 500) {
  graphMode.style.paddingBottom = "75px";
}
graphIcon.addEventListener("click", () => {
  if (highGraph) {
    // ECONOMIA
    localStorage.setItem("graph", "low");
    circle.style.filter = `blur(0px)`;
    scrollContainer.style.filter = `blur(0px)`;
    graphIcon.classList.remove("bi-stars");
    graphIcon.classList.add("bi-star-fill");
  } else {
    // GRÁFICO
    localStorage.setItem("graph", "high");
    graphIcon.classList.add("bi-stars");
    graphIcon.classList.remove("bi-star-fill");
  }
  highGraph = !highGraph;
});

let localGraph = localStorage.getItem("graph");
if (localGraph) {
  switch (localGraph) {
    case "high":
      break;
    case "low":
      highGraph = false;
      circle.style.filter = `blur(0px)`;
      scrollContainer.style.filter = `blur(0px)`;
      graphIcon.classList.remove("bi-stars");
      graphIcon.classList.add("bi-star-fill");
      break;
  }
}

const aboutText = document.querySelector('.about-text');
// const aboutTextDistance = section4.getBoundingClientRect().top - section4.offsetHeight;
const aboutWords = document.querySelectorAll('.about-word');
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;


  if (currentScroll > lastScroll) {
    if (window.innerWidth < 500) {
      graphMode.style.paddingBottom = "";
    }
    sectionRow.style.opacity = "0";
    sectionRow.style.pointerEvents = "none";
    topSection.style.opacity = "0";
    topSection.style.pointerEvents = "none";
  } else {
    if (window.innerWidth < 500) {
      graphMode.style.paddingBottom = "75px";
    }
    sectionRow.style.opacity = "1";
    sectionRow.style.pointerEvents = "all";
    topSection.style.opacity = "1";
    topSection.style.pointerEvents = "all";
  }
  lastScroll = currentScroll;
});

// LIGHT / DARK MODE
let modo = localStorage.getItem("mode");
let darkMode = true;
if (modo) {
  switch (modo) {
    case "dark":
      break;
    case "light":
      darkMode = false;
      document.documentElement.classList.remove("dark");
      break;
  }
}
const modeIcon = document.querySelector(".mode-icon");
const darkBall = document.querySelector(".dark-ball");
const lightBall = document.querySelector(".light-ball");

function toggleModeAnimation(showBall, hideBall, iconAdd, iconRemove) {
  showBall.style.transform = "scale(50)";
  document.body.classList.add("locked");
  showBall.style.left = "0";
  showBall.style.bottom = "0";
  showBall.style.right = "auto";
  showBall.style.top = "auto";
  hideBall.style.right = "0";
  hideBall.style.top = "0";
  hideBall.style.left = "auto";
  hideBall.style.bottom = "auto";
  setTimeout(() => {
    showBall.style.transform = "scale(0)";
  }, 600);
  setTimeout(() => {
    document.documentElement.classList.toggle("dark");
    hideBall.style.transform = "scale(50)";
    modeIcon.classList.add(iconAdd);
    modeIcon.classList.remove(iconRemove);

    setTimeout(() => {
      document.body.classList.remove("locked");
      hideBall.style.opacity = "0";

      setTimeout(() => {
        hideBall.style.transform = "scale(0)";

        setTimeout(() => {
          hideBall.style.opacity = "1";
        }, 500);
      }, 300);
    }, 500);
  }, 500);
}

modeIcon.addEventListener("click", () => {
  if (darkMode) {
    localStorage.setItem("mode", "light");
    if (highGraph) {
      toggleModeAnimation(darkBall, lightBall, "bi-moon", "bi-sun");
    } else {
      document.documentElement.classList.toggle("dark");
    }

  } else {
    localStorage.setItem("mode", "dark");
    if (highGraph) {
      toggleModeAnimation(lightBall, darkBall, "bi-sun", "bi-moon");
    } else {
      document.documentElement.classList.toggle("dark");
    }
  }

  darkMode = !darkMode;
});

let langTextCounter = 0;
let langText = "";
let langDesc = "";
const langs = document.querySelectorAll(".lang");
const langTextColumn = document.querySelector(".lang-text-column");
const bigLangText = document.querySelector(".big-lang-text");
const langDescription = document.querySelector(".lang-description");
// const langGradient = document.querySelector(".lang-gradient");
langs.forEach((lang) => {
  lang.addEventListener("click", () => {
    langTextCounter = 60;
    langText = lang.innerHTML;
    switch (lang.innerHTML) {
      case "HTML":
        langDesc = 'Estrutura base de qualquer página web. Define o conteúdo e a hierarquia dos elementos.';
        break;
      case "CSS":
        langDesc = 'Linguagem de estilo usada para dar aparência, cores, espaçamentos e posicionamento aos elementos HTML.';
        break;
      case "JAVASCRIPT":
        langDesc = 'Linguagem de programação responsável por adicionar interatividade e dinamismo aos sites.';
        break;
      case "REACT":
        langDesc = 'Biblioteca JavaScript focada em construir interfaces de usuário com alta performance e componentes reutilizáveis.';
        break;
      case "TYPESCRIPT":
        langDesc = 'Superset do JavaScript que adiciona tipagem estática, ajudando a prevenir erros e melhorar o desenvolvimento em larga escala.';
        break;
      case "GIT":
        langDesc = 'Sistema de controle de versão que permite rastrear mudanças no código e trabalhar de forma colaborativa em projetos.';
        break;
      case "TAILWIND/SCSS":
        langDesc = 'Tailwind: Framework de CSS utilitário com classes pré-definidas. <br/> SCSS: Pré-processador CSS com recursos como variáveis e funções.';
        break;
      case "REACT NATIVE":
        langDesc = 'Framework baseado em React para criar aplicativos mobile nativos usando JavaScript.';
        break;
      case "NEXT.JS":
        langDesc = 'Framework React que facilita a criação de aplicações web rápidas, com renderização no servidor e geração de sites estáticos.';
        break;
      case "NODE.JS":
        langDesc = 'Ambiente de execução JavaScript no lado do servidor. Ideal para criar APIs e backends escaláveis.';
        break;
      case "EXPRESS":
        langDesc = 'Framework minimalista para Node.js, usado para criar servidores web e APIs de forma simples e rápida.';
        break;
      case "ELEMENTOR":
        langDesc = 'Construtor de sites visual para WordPress. Permite criar páginas de forma intuitiva sem escrever código.';
        break;
      case "UI/UX":
        langDesc = 'Princípios de design focados na experiência do usuário (UX) e na criação de interfaces agradáveis e funcionais (UI).';
        break;
      case "FIGMA":
        langDesc = 'Ferramenta online de design de interface e prototipagem, muito usada para criar layouts e fluxos de navegação.';
        break;
      default:
        langDesc = 'Escolha uma tecnologia';
        break;
    }
  });
});

// WHOLE PAGE LERP EFFECT
const topText = document.querySelector(".top-text");

let mouseX = 0;
let mouseY = 0;
let offsetX = 0;
let offsetY = 0;
let velocityX = 0;
let velocityY = 0;
let lastX = 0;
let lastY = 0;
const inertia = 0.3;
const drag = 0.9;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (!highGraph) return;
  velocityX = mouseX - lastX;
  velocityY = mouseY - lastY;
  lastX = mouseX;
  lastY = mouseY;
});

let current = 0;
const ease = 0.08;
const projects = document.querySelectorAll('.projeto');



function animate(e) {
  offsetX += velocityX;
  offsetY += velocityY;
  offsetX *= drag;
  offsetY *= drag;
  const finalX = mouseX + offsetX * inertia;
  const finalY = mouseY + offsetY * inertia;

  const target = window.scrollY;
  const diff = target - current;
  if (Math.abs(diff) < 0.8) {
    current = target;
  } else {
    current += diff * ease;
  }

  // WORDS APPEARING
  if (current > (window.innerWidth > 770 ? 700 : 0) &&
    current < (window.innerWidth > 770 ? 2250 : 1650)) {
    circle.style.opacity = '0'
    aboutText.style.opacity = '1'
    aboutWords.forEach((aboutWord, index) => {
      if (current > 700 + 40 * index) {
        aboutWord.style.opacity = `${Math.min((current - 700 - 40 * index) * 0.004, 1)}`;
        aboutWord.style.transform = `translateY(${Math.max((1 - Math.min((current - 700 - 40 * index) * 0.004, 1)) * 40, 0)}px)`;
        aboutWord.style.filter = `blur(${Math.max((1 - Math.min((current - 700 - 40 * index) * 0.004, 1)) * 4, 0)}px)`;
      } else {
        aboutWord.style.opacity = '0'
        aboutWord.style.transform = `translateY(40px)`;
      }
    })
  } else if (current > (window.innerWidth > 770 ? 2250 : 1650)) {
    circle.style.opacity = '1'
    aboutText.style.opacity = '0'
  } else {
    aboutWords.forEach((aboutWord) => {
      circle.style.opacity = '1'
      aboutWord.style.opacity = '0'
    })
  }

  scrollContainer.style.marginTop = `${highGraph ? -current : -target}px`;
  if (highGraph)
    scrollContainer.style.filter = `blur(${Math.abs(diff) * 0.02}px)`;
  if (window.innerWidth > 770) {
    topText.style.transform = `perspective(25vi) rotateY(${25 - (highGraph ? current : target) * 0.03
      }deg)`;
  } else {
    topText.style.transform = `perspective(0) rotateY(0deg)`;
  }
  circle.style.left = `${highGraph ? finalX : mouseX}px`;
  circle.style.top = `${highGraph ? finalY : mouseY}px`;
  if (highGraph)
    circle.style.filter = `blur(${Math.abs(finalX - mouseX) * 0.08}px)`;
  projects.forEach((project) => {
    const rect = project.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 200;

    if (isVisible) {
      project.style.transform = 'scale(1)';
      project.style.opacity = '1';
    } else {
      project.style.transform = 'scale(0.5)';
      project.style.opacity = '0';
    }
  })
  if (langTextCounter > 0) {
    langTextCounter -= 1;
    // langGradient.style.opacity = "0";
    langTextColumn.style.opacity = "0";
    if (langTextCounter < 30) {
      bigLangText.innerHTML = langText;
      langDescription.innerHTML = langDesc;
    }
  } else {
    // langGradient.style.opacity = "1";
    langTextColumn.style.opacity = "1";
  }

  requestAnimationFrame(animate);
}

animate();
