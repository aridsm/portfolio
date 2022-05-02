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
    selecaoBtnsProjetos.style.left=( 28 * index) - 2 + 'px';
    indexProjeto = index
}

function showProject(index) {
    tituloProjeto.innerText = projetos[index].titulo;
    descricaoProjeto.innerText = projetos[index].descricao;
    imgProjeto.setAttribute('src', `./img/${projetos[index].img}`);
    linkWebsite.setAttribute('href', projetos[index].website);
    linkRepositorio.setAttribute('href', projetos[index].repositorio);
    linguagensProjeto.innerHTML = '';
    projetos[index].linguagens.map(linguagem => {
        const novaLinguagem = document.createElement('li');
        novaLinguagem.innerText = linguagem;
        linguagensProjeto.appendChild(novaLinguagem);
    })
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