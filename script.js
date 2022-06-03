const projetos = [
    {
        titulo: 'Sorveteria',
        img: 'sorveteria.gif',
        website: 'https://aridsm.github.io/sorveteria/',
        repositorio: 'https://github.com/aridsm/sorveteria',
        descricao: 'Projeto de landing page de uma sorveteria fictícia feita com Html, Sass e JS.',
        linguagens: ['HTML', 'Sass', 'JavaScript']
    },
    {
        titulo: 'TVSearch',
        img: 'tvsearch.gif',
        website: 'https://aridsm.github.io/tvsearch/',
        repositorio: 'https://github.com/aridsm/tvsearch',
        descricao: 'Projeto de um website com informações de filmes, séries e personalidades da TV feito com a API TMDB.',
        linguagens: ['React Js', 'CSS', 'JavaScript', 'HTML']
    },
    {
        titulo: 'Pomodoro App',
        img: 'pomodoro.png',
        website: 'https://aridsm.github.io/pomodoro-app',
        repositorio: 'https://github.com/aridsm/pomodoro-app',
        descricao: 'Projeto de um cronômetro aplicado a técnica pomodoro.',
        linguagens: ['HTML', 'CSS', 'JavaScript']
    },
    {
        titulo: 'Cafeteria',
        img: 'cafeteria.gif',
        website: 'https://aridsm.github.io/cafeteria/',
        repositorio: 'https://github.com/aridsm/cafeteria',
        descricao: 'Projeto de landing page de uma cafeteria fictícia feita com Html, Sass e JS.',
        linguagens: ['HTML', 'Sass', 'JavaScript']
    },
    {
        titulo: 'Clínica veterinária',
        img: 'vet.gif',
        website: 'https://aridsm.github.io/clinica-vet/',
        repositorio: 'https://github.com/aridsm/clinica-vet',
        descricao: 'Design de landing page de uma clínica veterinária fictícia. Com seções de especialidades, exames, formulário de mensagens, horário de funcionamento em tempo real etc.',
        linguagens: ['HTML', 'Sass', 'JavaScript']
    },
    {
        titulo: 'Canil',
        img: 'canil.gif',
        website: 'https://aridsm.github.io/https://aridsm.github.io/canil/',
        repositorio: 'https://github.com/aridsm/https://aridsm.github.io/canil/',
        descricao: 'Projeto de um canil fictício.',
        linguagens: ['HTML', 'Sass', 'JavaScript']
    },
]

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
    createListOfLanguages(index)
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
    secoesSobre = document.querySelectorAll('.container-infos > div')

function mostrarSecao(index) {
    secoesSobre.forEach(secao => secao.classList.remove('ativo'))
    secoesSobre[index].classList.add('ativo');

    btnsSobre.forEach(btn => btn.classList.remove('selecionado'))
    btnsSobre[index].classList.add('selecionado')
}

mostrarSecao(0)

btnsSobre.forEach((btn, index) => {
    btn.addEventListener('click', () => mostrarSecao(index))
})

/* Animar ao scroll */

const animaDown = document.querySelectorAll('.animaDown'),
    animaLeft = document.querySelectorAll('.animaLeft'),
    animaRight = document.querySelectorAll('.animaRight'),
    animaBothSide = document.querySelectorAll('.animaBothSide'),
    animaTop = document.querySelectorAll('.animaTop'),
    animaScale = document.querySelectorAll('.animaScale')

const animationElements = []
animationElements.push(
    animaLeft,
    animaRight,
    animaBothSide,
    animaDown,
    animaTop,
    animaScale
)

function percentToTop(item) {
    const DISTANCE_ELEMENT_TOP = item.getBoundingClientRect().top
    const WINDOW_HEIGHT = window.innerHeight
    return DISTANCE_ELEMENT_TOP * 100 / WINDOW_HEIGHT
}

function animaScroll() {
    animationElements.map(element =>
        element.forEach(item => {
            const PERCENT_TO_TOP = item.dataset.percent || 90

            if (percentToTop(item) < PERCENT_TO_TOP) {
                const DELAY = item.dataset.delay || 0
                setTimeout(() => {
                    item.classList.add('animated')
                }, DELAY);
            }
        })
    )
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