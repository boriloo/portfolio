function MouseLeaveCircle() {
    circle.style.transform = 'translate(-50%, -50%) scale(0)'
    document.body.classList.remove('no-cursor')
}

function MouseEnterCircle() {
    circle.style.transform = 'translate(-50%, -50%) scale(1)'
    document.body.classList.add('no-cursor')
}

const langRow = document.querySelector('.lang-row');
langRow.addEventListener('mouseleave', MouseEnterCircle)
langRow.addEventListener('mouseenter', MouseLeaveCircle)
const cvText = document.querySelector('.cv-text');
cvText.addEventListener('mouseleave', MouseEnterCircle)
cvText.addEventListener('mouseenter', MouseLeaveCircle)
sectionRow.addEventListener('mouseleave', MouseEnterCircle)
sectionRow.addEventListener('mouseenter', MouseLeaveCircle)
const projects = document.querySelectorAll('.projeto');
projects.forEach((project) => {
    project.addEventListener('mouseleave', MouseEnterCircle)
    project.addEventListener('mouseenter', MouseLeaveCircle)
    project.addEventListener('click', () => { ProjectClick(project) });
})


const modalView = document.querySelector('.modal-view')
function ProjectClick(project) {
    const pro = project.getAttribute('data-pro');
    configureModal(pro);
    modalView.classList.remove('modal-closed')
}

const closeModalIcon = document.querySelector('.close-modal-icon')
closeModalIcon.addEventListener('click', () => {
    modalView.classList.add('modal-closed')
})

cvText.addEventListener('click', downloadCV);

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/pdf/cv.pdf';
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}