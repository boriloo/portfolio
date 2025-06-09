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