// Lista de jogos com seus respectivos IDs de seção
const jogos = [
    { nome: "EA FC 24", id: "playstation5" },
    { nome: "Need For Speed Unbound", id: "playstation5" },
    { nome: "Hogwarts Legacy", id: "playstation5" },
    { nome: "Call of Duty: Modern Warfare III", id: "playstation5" },
    { nome: "Assassin's Creed Mirage", id: "playstation5" },
    { nome: "Spider Man 2", id: "playstation5" },
    { nome: "Red Dead Redemption 2", id: "playstation4" },
    { nome: "Ghost Recon Wildlands", id: "playstation4" },
    { nome: "Dishonored 2", id: "playstation4" },
    { nome: "Bloodborne", id: "playstation4" },
    { nome: "Shadow of the Colossus", id: "playstation4" },
    { nome: "Detroit: Become Human", id: "playstation4" },
    { nome: "League of Legends", id: "pc" },
    { nome: "Call of Duty: Warzone 2", id: "pc" },
    { nome: "Valorant", id: "pc" },
    { nome: "Red Dead Redemption 2", id: "pc" },
    { nome: "Minecraft", id: "pc" },
    { nome: "Among Us", id: "pc" }
];

// Função para mostrar resultados da pesquisa
function mostrarResultados() {
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();
    const results = document.getElementById('search-results');
    results.innerHTML = '';

    if (filter) {
        const filteredGames = jogos.filter(game => game.nome.toLowerCase().includes(filter));

        if (filteredGames.length) {
            filteredGames.forEach(game => {
                const item = document.createElement('a');
                item.classList.add('list-group-item');
                item.textContent = game.nome;
                item.href = `../index.html#${game.id}`; // Redireciona para index.html com fragmento

                results.appendChild(item);
            });
            results.style.display = 'block';
        } else {
            results.style.display = 'none';
        }
    } else {
        results.style.display = 'none';
    }
}


// Função para redirecionar para o index.html com base no nome do jogo
function redirecionarId() {
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();

    // Filtra os jogos que correspondem ao texto da busca
    const filteredGames = jogos.filter(game => game.nome.toLowerCase().includes(filter));

    if (filteredGames.length) {
        const firstGame = filteredGames[0]; // Captura o primeiro jogo correspondente

        // Redireciona para index.html com um fragmento de URL
        window.location.href = `../index.html#${firstGame.id}`;
    }
}

// Evento para capturar a entrada do usuário no campo de busca
document.getElementById('search-input').addEventListener('input', mostrarResultados);

// Evento para capturar o clique do botão de busca
document.getElementById('search-button').addEventListener('click', function(event) {
    event.preventDefault();
    redirecionarId();
});

// Evento para ocultar os resultados da busca ao clicar fora do campo de busca
document.addEventListener('click', function(event) {
    const searchForm = document.querySelector('.search-form');
    if (!searchForm.contains(event.target)) {
        document.getElementById('search-results').style.display = 'none';
    }
});
