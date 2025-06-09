lottie.loadAnimation({
    container: document.querySelector('.waves-svg'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/assets/svg/wave.json'
});

lottie.loadAnimation({
    container: document.querySelector('.loading-svg'), // contêiner HTML
    renderer: 'svg', // pode ser 'canvas' ou 'html' também
    loop: true,
    autoplay: true,
    path: '/assets/svg/loading.json' // caminho para seu arquivo JSON
});
