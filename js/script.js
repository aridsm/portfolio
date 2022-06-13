import projetos from './projetos.js';
import certificados from './certificados.js'
console.log(certificados)
/* Projetos */
const
    tituloProjeto = document.querySelector('.projeto h3'),
    linkWebsite = document.querySelector('.projeto .link-website'),
    linkRepositorio = document.querySelector('.projeto .link-repositorio'),
    descricaoProjeto = document.querySelector('.projeto .descricao-projeto'),
    imgProjeto = document.querySelector('.projeto img'),
    linguagensProjeto = document.querySelector('.projeto .linguagens ul'),
    selecaoBtnsProjetos = document.querySelector('.selecao-btn'),
    btnsPagProjetos = document.querySelectorAll('.pag-btn'),
    btnProjetoProximo = document.querySelector('.btns-nav .posterior'),
    btnProjetoAnterior = document.querySelector('.btns-nav .anterior')
let indexProjeto = 0

function choseProjectToShow(index) {
    showProject(index);
    btnsPagProjetos.forEach(btn => {
        btn.classList.remove('selecionado')
    })
    btnsPagProjetos[index].classList.add('selecionado');
    selecaoBtnsProjetos.style.left = (28 * index) - 2 + 'px';
    indexProjeto = index
}

function createAttribute(attr, index, element, param, directory = '') {
    element.setAttribute(attr, `${directory}${projetos[index][param]}`)
}

function createListOfLanguages(index) {
    projetos[index].linguagens.map(linguagem => {
        const novaLinguagem = document.createElement('li');
        novaLinguagem.innerText = linguagem;
        linguagensProjeto.appendChild(novaLinguagem);
    })
}

function showProject(index) {

    tituloProjeto.innerText = projetos[index].titulo;
    descricaoProjeto.innerText = projetos[index].descricao;
    createAttribute('src', index, imgProjeto, 'img', './img/')
    createAttribute('href', index, linkWebsite, 'website')
    createAttribute('href', index, linkRepositorio, 'repositorio')
    linguagensProjeto.innerHTML = '';
    createListOfLanguages(index);
    imgProjeto.parentElement.href = projetos[index].website
    console.log(imgProjeto.parentElement.href)
}

showProject(indexProjeto)

btnProjetoProximo.addEventListener('click', () => {
    ++indexProjeto;
    if (indexProjeto > projetos.length - 1) indexProjeto = 0;
    choseProjectToShow(indexProjeto)
})
btnProjetoAnterior.addEventListener('click', () => {
    --indexProjeto;
    if (indexProjeto < 0) indexProjeto = projetos.length - 1;
    choseProjectToShow(indexProjeto)
})
btnsPagProjetos.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        choseProjectToShow(index)
    })
})

/* Sobre */

const
    btnsSobre = document.querySelectorAll('.btns-sobre button'),
    secoesSobre = document.querySelectorAll('.container-infos > div'),
    txtSecaoAberta = document.querySelector('.secao_aberta')

function changeActiveElement(els, nameOfClass, index) {
    els.forEach(el => el.classList.remove(nameOfClass))
    els[index].classList.add(nameOfClass);
}

function mostrarSecao(index) {
    changeActiveElement(secoesSobre, 'ativo', index)
    changeActiveElement(btnsSobre, 'selecionado', index)
    txtSecaoAberta.textContent = secoesSobre[index].dataset.title
}

mostrarSecao(0)

btnsSobre.forEach((btn, index) => {
    btn.addEventListener('click', () => mostrarSecao(index))
})

/* Animar ao scroll */

const anima = document.querySelectorAll('.anima')

function percentToTop(item) {
    const DISTANCE_ELEMENT_TOP = item.getBoundingClientRect().top
    const WINDOW_HEIGHT = window.innerHeight
    return DISTANCE_ELEMENT_TOP * 100 / WINDOW_HEIGHT
}

function animaScroll() {
    anima.forEach(item => {
        const PERCENT_TO_TOP = item.dataset.percent || 90

        if (percentToTop(item) < PERCENT_TO_TOP) {
            const DELAY = item.dataset.delay || 0
            setTimeout(() => {
                item.classList.add('animated')
            }, DELAY);
        }
    })

}
animaScroll()
window.addEventListener('scroll', animaScroll)

//Texto efeito

const elementText = document.querySelectorAll('.animaText')

function animaText() {
    elementText.forEach(element => {

        const text = Array.from(element.dataset.text)
        for (let index = 0; index < text.length; index++) {
            setTimeout(() => {
                const newLetter = document.createElement('span')
                newLetter.textContent = text[index]
                element.appendChild(newLetter)
            }, index * 100);
        }
    })

}
animaText()