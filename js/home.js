const lastElement = document.querySelector(".footer");
const distance = lastElement.getBoundingClientRect().top + window.scrollY;
const realDistance = lastElement.offsetHeight + distance;
const fakeScroll = document.querySelector(".fake-scroll");
fakeScroll.style.height = `${realDistance + 95}px`;
const circle = document.querySelector(".cursor-ball");
const cursorText = document.querySelector(".cursor-text");
const sectionRow = document.querySelector(".sections");
const topSection = document.querySelector(".top-section");
const scrollContainer = document.querySelector(".scroll-container");
let highGraph = true;
let scrollValue = 0;

let lastScroll = 0;

if (window.innerWidth < 770) {
  document.body.classList.remove('no-cursor')
}

const popup = document.querySelector('.popup')
const popupText = document.querySelector('.popup-text')
function togglePopup(text) {
  popupText.innerHTML = text
  popup.classList.remove('pop-anim')
  setTimeout(() => {
    popup.classList.add('pop-anim')
  }, 10)
}

let resizeTimeout;
let lastWidth = window.innerWidth;

window.addEventListener('resize', function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    const currentWidth = window.innerWidth;

    if (currentWidth !== lastWidth) {
      window.location.reload();
    }

    lastWidth = currentWidth;
  }, 300);
});


const botaoLang = document.querySelector('.lang-mode');
const innerLang = document.querySelector('.inner-lang');

let currentLang = localStorage.getItem('preferredLang') || 'pt';

const translations = {
  pt: {
    'page.title': 'Portfolio',
    'footer.copyright': '© murilo martins',
    'hero.word1': 'Sou',
    'hero.word2': 'o',
    'hero.word3': 'Dev',
    'hero.word4': 'que',
    'hero.word5': 'pode',
    'hero.word6': 'levar',
    'hero.word7': 'seu',
    'hero.word8': 'projeto',
    'hero.word9': 'de',
    'hero.word10': 'LEGAL',
    'hero.word11': 'para',
    'hero.word12': 'incrível.',
    'popup.greeting': 'Olá!',
    'popup.effectsDisabled': 'Efeitos desativados',
    'popup.effectsEnabled': 'Efeitos ativados',
    'modal.visit': 'Visitar',
    'header.downloadCV': 'Baixar CV',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Projetos',
    'cursor.error': 'Eu não deveria estar aparecendo...',
    'intro.greeting': 'Prazer, sou Murilo Martins',
    'intro.description': 'Sou um desenvolvedor full-stack especializado em React/Next.js e Node.js, com experiência em desenvolvimento de aplicações de nível comercial, com a melhor experiência possível.',
    'skills.title': 'Tecnologias',
    'skills.mastery': 'CONTROLE',
    'skills.subtitle': 'Qualquer tecnologia que precisar.',
    'skills.html': 'Estrutura base de qualquer página web. Define o conteúdo e a hierarquia dos elementos.',
    'skills.css': 'Linguagem de estilo usada para dar aparência, cores, espaçamentos e posicionamento aos elementos HTML.',
    'skills.js': 'Linguagem de programação responsável por adicionar interatividade e dinamismo aos sites.',
    'skills.react': 'Biblioteca JavaScript focada em construir interfaces de usuário com alta performance e componentes reutilizáveis.',
    'skills.ts': 'Superset do JavaScript que adiciona tipagem estática, ajudando a prevenir erros e melhorar o desenvolvimento em larga escala.',
    'skills.git': 'Sistema de controle de versão que permite rastrear mudanças no código e trabalhar de forma colaborativa em projetos.',
    'skills.tailwind': 'Tailwind: Framework de CSS utilitário com classes pré-definidas. <br/> SCSS: Pré-processador CSS com recursos como variáveis e funções.',
    'skills.rn': 'Framework baseado em React para criar aplicativos mobile nativos usando JavaScript.',
    'skills.next': 'Framework React que facilita a criação de aplicações web rápidas, com renderização no servidor e geração de sites estáticos.',
    'skills.node': 'Ambiente de execução JavaScript no lado do servidor. Ideal para criar APIs e backends escaláveis.',
    'skills.express': 'Framework minimalista para Node.js, usado para criar servidores web e APIs de forma simples e rápida.',
    'skills.elementor': 'Construtor de sites visual para WordPress. Permite criar páginas de forma intuitiva sem escrever código.',
    'skills.uiux': 'Princípios de design focados na experiência do usuário (UX) e na criação de interfaces agradáveis e funcionais (UI).',
    'skills.figma': 'Ferramenta online de design de interface e prototipagem, muito usada para criar layouts e fluxos de navegação.',
    'skills.default': 'Escolha uma tecnologia',
    'projects.title': 'Projetos',
    'projects.nb.title': 'NovaBalança - Contabilidade',
    'projects.lol.title': 'LoL - Regiões de Runeterra',
    'contact.title': 'Contato',
    'mouse.click': 'Clique!',
    'mouse.details': 'Ver detalhes',
    'popup.emailCopied': 'Email copiado para área de transferência',
    'modal.nb.title': 'Site Institucional – NovaBalança Contabilidade',
    'modal.nb.p1': 'Desenvolvimento de site institucional para um escritório de contabilidade com foco em abertura de empresas.',
    'modal.nb.p2': 'O projeto apresenta uma linguagem acessível, moderna e voltada ao público empreendedor, destacando diferenciais como abertura gratuita de CNPJ em até 24h, atendimento humanizado e digitalização dos processos contábeis.',
    'modal.nb.p3': 'Inclui carrosséis interativos, depoimentos de clientes, etapas do processo de abertura e call-to-actions estratégicos para conversão.',
    'modal.lol.title': 'League of Legends - Regiões de Runeterra',
    'modal.lol.p1': 'Conceito de design de interface (UI/UX) para uma plataforma dedicada à exploração do mundo de League of Legends.',
    'modal.lol.p2': 'O projeto foi desenhado para aprofundar a conexão emocional dos jogadores com o universo do jogo, oferecendo uma experiência de navegação intuitiva e visualmente rica.',
    'modal.lol.p3': 'O foco foi criar uma hierarquia visual clara, com tipografia forte e um layout sombrio que realça as incríveis ilustrações de cada região.',
    'modal.notFound': 'Projeto não encontrado.',
  },
  en: {
    'page.title': 'Portfolio',
    'footer.copyright': '© murilo martins',
    'hero.word1': 'I\'m',
    'hero.word2': 'the',
    'hero.word3': 'Dev',
    'hero.word4': 'who',
    'hero.word5': 'can',
    'hero.word6': 'take',
    'hero.word7': 'your',
    'hero.word8': 'project',
    'hero.word9': 'from',
    'hero.word10': 'GOOD',
    'hero.word11': 'to',
    'hero.word12': 'amazing.',
    'popup.greeting': 'Hello!',
    'popup.effectsDisabled': 'Effects disabled',
    'popup.effectsEnabled': 'Effects enabled',
    'modal.visit': 'Visit',
    'header.downloadCV': 'Download CV',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'cursor.error': 'I shouldn\'t be showing up...',
    'intro.greeting': 'Nice to meet you, I\'m Murilo Martins',
    'intro.description': 'I\'m a full-stack developer specialized in React/Next.js and Node.js, with experience in developing commercial-level applications with the best possible experience.',
    'skills.title': 'Technologies',
    'skills.mastery': 'CONTROL',
    'skills.subtitle': 'Any technology you need.',
    'skills.html': 'The base structure of any web page. Defines the content and hierarchy of elements.',
    'skills.css': 'Styling language used to give appearance, colors, spacing and positioning to HTML elements.',
    'skills.js': 'Programming language responsible for adding interactivity and dynamism to websites.',
    'skills.react': 'JavaScript library focused on building user interfaces with high performance and reusable components.',
    'skills.ts': 'JavaScript superset that adds static typing, helping to prevent errors and improve large-scale development.',
    'skills.git': 'Version control system that allows tracking code changes and working collaboratively on projects.',
    'skills.tailwind': 'Tailwind: Utility-first CSS framework with predefined classes. <br/> SCSS: CSS preprocessor with features like variables and functions.',
    'skills.rn': 'React-based framework for creating native mobile applications using JavaScript.',
    'skills.next': 'React framework that makes it easy to create fast web applications, with server rendering and static site generation.',
    'skills.node': 'JavaScript runtime environment on the server side. Ideal for creating scalable APIs and backends.',
    'skills.express': 'Minimalist framework for Node.js, used to create web servers and APIs simply and quickly.',
    'skills.elementor': 'Visual website builder for WordPress. Allows you to create pages intuitively without writing code.',
    'skills.uiux': 'Design principles focused on user experience (UX) and creating pleasant and functional interfaces (UI).',
    'skills.figma': 'Online interface design and prototyping tool, widely used to create layouts and navigation flows.',
    'skills.default': 'Choose a technology',
    'projects.title': 'Projects',
    'projects.nb.title': 'NovaBalança - Accounting',
    'projects.lol.title': 'LoL - Regions of Runeterra',
    'contact.title': 'Contact',
    'mouse.click': 'Click!',
    'mouse.details': 'View details',
    'popup.emailCopied': 'Email copied to clipboard',
    'modal.nb.title': 'Institutional Website – NovaBalança Accounting',
    'modal.nb.p1': 'Development of an institutional website for an accounting firm focused on business registration.',
    'modal.nb.p2': 'The project features accessible, modern language aimed at entrepreneurs, highlighting advantages such as free CNPJ registration within 24 hours, personalized service, and digitalization of accounting processes.',
    'modal.nb.p3': 'Includes interactive carousels, client testimonials, registration process steps, and strategic call-to-actions for conversion.',
    'modal.lol.title': 'League of Legends - Regions of Runeterra',
    'modal.lol.p1': 'UI/UX interface design concept for a platform dedicated to exploring the world of League of Legends.',
    'modal.lol.p2': 'The project was designed to deepen players\' emotional connection with the game universe, offering an intuitive and visually rich browsing experience.',
    'modal.lol.p3': 'The focus was to create a clear visual hierarchy, with strong typography and a dark layout that highlights the amazing illustrations of each region.',
    'modal.notFound': 'Project not found.',
  }
};


function getTranslation(key) {
  return translations[currentLang][key] || key;
}

function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.title = translations[lang]['page.title'];
  document.documentElement.lang = lang;
  localStorage.setItem('preferredLang', lang);


  if (lang === 'en') {
    innerLang.classList.add('active');
  } else {
    innerLang.classList.remove('active');
  }
  // window.location.reload();
}

botaoLang.addEventListener('click', () => {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  changeLanguage(currentLang);
});


changeLanguage(currentLang);



const graphIcon = document.querySelector(".graph-icon");
const graphMode = document.querySelector(".graph-mode");
if (window.innerWidth < 500) {
  graphMode.style.paddingBottom = "75px";
}
graphIcon.addEventListener("click", () => {
  if (highGraph) {
    // ECONOMIA
    togglePopup(getTranslation('popup.effectsDisabled'))
    localStorage.setItem("graph", "low");
    circle.style.filter = `blur(0px)`;
    scrollContainer.style.filter = `blur(0px)`;
    graphIcon.classList.remove("bi-stars");
    graphIcon.classList.add("bi-star-fill");
  } else {
    // GRÁFICO
    togglePopup(getTranslation('popup.effectsEnabled'))
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

// Função para obter descrição de skill no idioma atual
function getSkillDescription(skillName) {
  const skillKey = {
    'HTML': 'skills.html',
    'CSS': 'skills.css',
    'JAVASCRIPT': 'skills.js',
    'REACT': 'skills.react',
    'TYPESCRIPT': 'skills.ts',
    'GIT': 'skills.git',
    'TAILWIND/SCSS': 'skills.tailwind',
    'REACT NATIVE': 'skills.rn',
    'NEXT.JS': 'skills.next',
    'NODE.JS': 'skills.node',
    'EXPRESS': 'skills.express',
    'ELEMENTOR': 'skills.elementor',
    'UI/UX': 'skills.uiux',
    'FIGMA': 'skills.figma'
  };

  return translations[currentLang][skillKey[skillName]] || translations[currentLang]['skills.default'];
}

langs.forEach((lang) => {
  lang.addEventListener("click", () => {
    langTextCounter = 60;
    langText = lang.innerHTML;
    langs.forEach((lang) => {
      lang.classList.remove('selected')
    })
    lang.classList.add('selected')
    langDesc = getSkillDescription(lang.innerHTML);
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

const sectionOne = document.querySelector('.section-1')
const sectionAbout = document.querySelector('.section-about')
const sectionTwo = document.querySelector('.section-2')

const tillAboutSection = sectionAbout.getBoundingClientRect().top + sectionAbout.offsetHeight - 400
const tillSectionTwo = sectionTwo.getBoundingClientRect().top - (window.innerWidth > 500 ? 850 : 850)

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

  let windowHeight = window.innerHeight;
  let stepDelay = windowHeight * 0.05;

  // WORDS APPEARING
  if ((highGraph ? current : target) > (tillAboutSection - (stepDelay * 2)) &&
    (highGraph ? current : target) < tillSectionTwo + stepDelay) {

    aboutText.style.opacity = '1'

    aboutWords.forEach((aboutWord, index) => {
      aboutWord.style.opacity = `${((highGraph ? current : target) - (tillAboutSection - (stepDelay * 2)) - (stepDelay * index)) * 0.004}`;
      aboutWord.style.transform = `translateY(${Math.max((1 - Math.min(((highGraph ? current : target) - tillAboutSection - stepDelay * index) * 0.004, 1)) * stepDelay, 0)}px)`;
      aboutWord.style.filter = `blur(${`${9 - (((highGraph ? current : target) - (tillAboutSection - (stepDelay * 2)) - (stepDelay * index)) * 0.02)}`}px)`;
    })
  } else if ((highGraph ? current : target) > tillSectionTwo + stepDelay) {
    aboutWords.forEach((aboutWord) => {
      aboutWord.style.filter = `blur(0px)`;
    })
    aboutText.style.transform = `translateY(${(highGraph ? -current : -target) + tillSectionTwo + stepDelay - aboutText.offsetHeight / 2}px) translateX(-50%)`;
  } else {
    aboutWords.forEach((aboutWord) => {
      aboutWord.style.opacity = '0'
    })
  }

  scrollContainer.style.marginTop = `${highGraph ? -current : -target}px`;
  if (highGraph)
    scrollContainer.style.filter = `blur(${Math.abs(diff) * 0.02}px)`;

  circle.style.left = `${highGraph ? finalX : mouseX}px`;
  circle.style.top = `${highGraph ? finalY : mouseY}px`;
  cursorText.style.left = `${highGraph ? finalX : mouseX}px`;
  cursorText.style.top = `${highGraph ? finalY : mouseY}px`;
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
    langTextColumn.style.opacity = "0";
    if (langTextCounter < 30) {
      bigLangText.innerHTML = langText;
      langDescription.innerHTML = langDesc;
    }
  } else {
    langTextColumn.style.opacity = "1";
  }

  requestAnimationFrame(animate);
}

animate();