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
        titulo: 'Aquário',
        img: 'aquario.gif',
        website: 'https://aridsm.github.io/aquario/',
        repositorio: 'https://github.com/aridsm/aquario',
        descricao: 'Projeto de landing page de uma aquario fictício feita com Html, Sass e JS.',
        maisInfos: ['A partir de 300', 'Montserrat', 'Paleta de cores'],
        linguagens: ['HTML', 'Sass', 'JavaScript']
    },
    {
        titulo: 'Pomodoro App',
        img: 'pomodoro.png',
        website: 'https://github.com/aridsm/pomodoro-app',
        repositorio: 'https://github.com/aridsm/pomodoro-app',
        descricao: 'Projeto de um cronômetro aplicado a técnica pomodoro',
        maisInfos: ['A partir de 300', 'Montserrat', 'Paleta de cores'],
        linguagens: ['HTML', 'Sass', 'JavaScript']
    },
    {
        titulo: 'Cafeteria',
        img: 'sorveteria.gif',
        website: 'https://aridsm.github.io/sorveteria/',
        repositorio: 'https://github.com/aridsm/sorveteria',
        descricao: 'Projeto de landing page de uma sorveteria fictícia feita com Html, Sass e JS.',
        maisInfos: ['A partir de 300', 'Montserrat', 'Paleta de cores'],
        linguagens: ['HTML', 'Sass', 'JavaScript']
    },
    {
        titulo: 'Cliníca veterinária',
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


const btnsPagProjetos = document.querySelectorAll('.pag-btn')

function choseProjectToShow(index) {
    console.log(index)
}

btnsPagProjetos.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        choseProjectToShow(index)
    })
})

console.log(btnsPagProjetos)