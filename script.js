const projetos = [
    {
        titulo: 'Sorveteria',
        img: 'sorveteria.gif',
        website: 'https://aridsm.github.io/sorveteria/',
        repositorio: 'https://github.com/aridsm/sorveteria',
        descricao: 'Projeto de landing page de uma sorveteria fictícia feita com Html, Sass e JS.',
        maisInfos: ['A partir de 300', 'Montserrat', 'Paleta de cores'],
        linguagens: ['HTML', 'Sass', 'JavaScript']
    },
    {
        titulo: 'TVSearch',
        img: 'tvsearch.gif',
        website: 'https://aridsm.github.io/tvsearch/',
        repositorio: 'https://github.com/aridsm/tvsearch',
        descricao: 'Projeto de um website com informações de filmes, séries e personalidades da TV feito com a API TMDB.',
        maisInfos: ['A partir de 300', 'Montserrat', 'Paleta de cores'],
        linguagens: ['React Js', 'CSS', 'JavaScript', 'HTML']
    },
    {
        titulo: 'Pomodoro App',
        img: 'pomodoro.png',
        website: 'https://aridsm.github.io/pomodoro-app',
        repositorio: 'https://github.com/aridsm/pomodoro-app',
        descricao: 'Projeto de um cronômetro aplicado a técnica pomodoro.',
        maisInfos: ['A partir de 300', 'Montserrat', 'Paleta de cores'],
        linguagens: ['HTML', 'Sass', 'JavaScript']
    },
    {
        titulo: 'Cafeteria',
        img: 'cafeteria.gif',
        website: 'https://aridsm.github.io/cafeteria/',
        repositorio: 'https://github.com/aridsm/cafeteria',
        descricao: 'Projeto de landing page de uma cafeteria fictícia feita com Html, Sass e JS.',
        maisInfos: ['A partir de 300', 'Montserrat', 'Paleta de cores'],
        linguagens: ['HTML', 'Sass', 'JavaScript']
    },
    {
        titulo: 'Clínica veterinária',
        img: 'vet.gif',
        website: 'https://aridsm.github.io/clinica-vet/',
        repositorio: 'https://github.com/aridsm/clinica-vet',
        descricao: 'Design de landing page de uma clínica veterinária fictícia. Com seções de especialidades, exames, formulário de mensagens, horário de funcionamento em tempo real etc.',
        maisInfos: ['A partir de 300', 'Montserrat', 'Paleta de cores'],
        linguagens: ['HTML', 'Sass', 'JavaScript']
    },
    {
        titulo: 'Tela de login',
        img: 'login.gif',
        website: 'https://aridsm.github.io/Tela-de-login/',
        repositorio: 'https://github.com/aridsm/Tela-de-login',
        descricao: 'Projeto feito para aplicação de validação com Regex em campos de usuário, email e senha.',
        maisInfos: ['A partir de 300', 'Montserrat', 'Paleta de cores'],
        linguagens: ['HTML', 'CSS', 'JavaScript']
    },
]

const tituloProjeto = document.querySelector('.projeto h3'),
linkWebsite = document.querySelector('.projeto .link-website'),
linkRepositorio = document.querySelector('.projeto .link-repositorio'),
descricaoProjeto = document.querySelector('.projeto .descricao-projeto'),
imgProjeto = document.querySelector('.projeto img'),
linguagensProjeto = document.querySelector('.projeto .linguagens ul'),
selecaoBtnsProjetos = document.querySelector('.selecao-btn'),
btnsPagProjetos = document.querySelectorAll('.pag-btn')

/*
-3px 0
28px 1
60px 2
*/
function choseProjectToShow(index) {
    showProject(index);
    btnsPagProjetos.forEach(btn => {
        btn.classList.remove('selecionado')
    })
    btnsPagProjetos[index].classList.add('selecionado');
    selecaoBtnsProjetos.style.left = (index * 31) - (index * 2) + 'px';
}

function showProject(index) {
    tituloProjeto.innerText = projetos[index].titulo;
    descricaoProjeto.innerText = projetos[index].descricao;
    imgProjeto.setAttribute('src', `./img/${projetos[index].img}`) 
    linkWebsite.setAttribute('href', projetos[index].website)
    linkRepositorio.setAttribute('href', projetos[index].repositorio)
    linguagensProjeto.innerHTML = ''
    projetos[index].linguagens.map(linguagem => {
        const novaLinguagem = document.createElement('li');
        novaLinguagem.innerText = linguagem;
        linguagensProjeto.appendChild(novaLinguagem);
    })

}

showProject(0)

btnsPagProjetos.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        choseProjectToShow(index)
    })
})

console.log(btnsPagProjetos)