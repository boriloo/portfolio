const modalContent = document.querySelector('.modal-content')
const modalImg = document.querySelector('.modal-img')
const modalLink = document.querySelector('.modal-link')

function configureModal(data) {
    switch (data) {
        case 'nb':
            modalImg.src = './assets/images/NB_display.png'
            modalLink.href = 'https://boriloo.github.io/NovaBalanca-Contabilidade/';
            modalContent.innerHTML =
                `<h1>${getTranslation('modal.nb.title')}</h1>
                    <div class="row">
                        <div class="row">
                            <p>HTML</p>
                            <p>SCSS</p>
                            <p>JAVASCRIPT</p>
                            <p>UI/UX</p>
                        </div>
                    </div>
                    <p>${getTranslation('modal.nb.p1')}</p>
                    <p>${getTranslation('modal.nb.p2')}</p>
                    <p>${getTranslation('modal.nb.p3')}</p>`
            break;
        case 'lol':
            modalImg.src = './assets/images/LOL_display.png'
            modalLink.href = 'https://boriloo.github.io/Runeterra-Regions/';
            modalContent.innerHTML =
                `<h1>${getTranslation('modal.lol.title')}</h1>
                    <div class="row">
                        <div class="row">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JAVASCRIPT</p>
                        </div>
                    </div>
                    <p>${getTranslation('modal.lol.p1')}</p>
                    <p>${getTranslation('modal.lol.p2')}</p>
                    <p>${getTranslation('modal.lol.p3')}</p>`
            break;

        default:
            modalContent.innerHTML = `<p>${getTranslation('modal.notFound')}</p>`;
    }
}