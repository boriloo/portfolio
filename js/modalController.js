const modalContent = document.querySelector('.modal-content')
const modalImg = document.querySelector('.modal-img')
const modalLink = document.querySelector('.modal-link')
function configureModal(data) {
    switch (data) {
        case 'nb':
            modalImg.src = './assets/images/NB_display.png'
            modalLink.href = 'https://boriloo.github.io/NovaBalanca-Contabilidade/';
            modalContent.innerHTML =
                `<h1>Site Institucional – NovaBalança Contabilidade</h1>
                    <div class="row">
                        <div class="row">
                            <p>HTML</p>
                            <p>SCSS</p>
                            <p>JAVASCRIPT</p>
                            <p>UI/UX</p>
                        </div>
                    </div>
                    <p>
                        Desenvolvimento de site institucional para um escritório de contabilidade com foco em abertura de empresas. 
                        </p>
                     <p>
                        O projeto apresenta uma linguagem acessível, moderna e voltada ao público empreendedor, destacando diferenciais 
                        como abertura gratuita de CNPJ em até 24h, atendimento humanizado e digitalização dos processos contábeis. 
                    </p>
                    <p>
                        Inclui 
                        carrosséis interativos, depoimentos de clientes, etapas do processo de abertura e call-to-actions estratégicos para 
                        conversão.
                    </p>`
            break;
        case 'lol':
            modalImg.src = './assets/images/LOL_display.png'
            modalLink.href = 'https://boriloo.github.io/Runeterra-Regions/';
            modalContent.innerHTML =
                `<h1>League of Legends - Regiões de Runeterra</h1>
                    <div class="row">
                        <div class="row">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JAVASCRIPT</p>
                        </div>
                    </div>
                    <p>Conceito de design de interface (UI/UX) para uma plataforma dedicada à exploração do mundo de
                        League
                        of Legends.</p>
                    <p>O projeto foi desenhado para aprofundar a conexão emocional dos jogadores com o universo
                        do jogo, oferecendo uma experiência de navegação intuitiva e visualmente rica.</p>
                    <p>O foco foi criar uma
                        hierarquia visual clara, com tipografia forte e um layout sombrio que realça as incríveis
                        ilustrações de cada região.
                    </p>`
            break;

        default:
            modalContent.innerHTML = '<p>Projeto não encontrado.</p>';
    }
}