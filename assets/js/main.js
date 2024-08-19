// Funcionalidade 7 menu responsivo hamburguer
(function($){
    "use strict";
    
    // Inicializa o plugin MeanMenu para criar um menu responsivo
    // Transforma o menu de navegação em um menu "hamburguer" em telas menores que 991px
    // Mean Menu 
    $('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Funcionalidade 8 barra de navegação aparece quando a posição de rolagem da janela ultrapassa 130 pixels a partir do topo (0px)

    // Header Sticky  
    // Torna a barra de navegação fixa
    // Quando a posição da página ultrapassa 130 pixels a partir do topo, 
    // a classe "is-sticky" é adicionada à barra de navegação

    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 130){  // Utilização de Operadores >
            $('.header-sticky').addClass("is-sticky");
        }
        else{
            $('.header-sticky').removeClass("is-sticky");
        }
    });
    var c, currentScrollTop = 0,
    navbar = $('.header-sticky');
    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();
        currentScrollTop = a;
        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });

    //Funcionalidade 9 Se o scroll estiver maior que 300 pixels, aparece o botão de voltar ao topo da página

    // Voltar ao início
    $(function(){ 
        $(window).on('scroll', function(){
            // Obtém a posição atual do scroll da janela
            var scrolled = $(window).scrollTop(); // salva a posição atual do scroll em uma variável
            
            // Se o scroll estiver maior que 300 pixels
            if (scrolled > 300)
                // Adiciona a classe 'active' ao elemento com a classe '.go-top'
                $('.go-top').addClass('active');
            // Se o scroll estiver menor que 300 pixels
            if (scrolled < 300)
                // Remove a classe 'active' do elemento com a classe '.go-top'
                $('.go-top').removeClass('active');
        });  
    
        // Click 
        $('.go-top').on('click', function() {
            // Quando o elemento com a classe '.go-top' é clicado,
            // anima o scroll da página para o topo (scroll 0 da página) em 100 milissegundos
            $("html, body").animate({ scrollTop: "0" },  100);
        });
    });
 
}(jQuery));

    // Função com Array lista de jogos barra de busca

    // Lista de jogos com seus respectivos IDs de seção
    const jogos = [
        { nome: "EA FC 24", id: "playstation5" }, // nome do jogo e id da seção onde tá localizado no html
        { nome: "Need For Speed Unbound", id: "playstation5" },
        { nome: "Hogwarts Legacy", id: "playstation5" },
        { nome: "Call of Duty: Modern Warfare III", id: "playstation5" },
        { nome: "Assassin's Creed Mirage", id: "playstation5" },
        { nome: "Spider Man 2", id: "playstation5" },
        { nome: "Red Dead Redemption 2", id: "playstation4" },
        { nome: "Fallout", id: "playstation4" },
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
    // Funcionalidade 10

    // Função para mostrar resultados da pesquisa
    function mostrarResultados() {
        
        const input = document.getElementById('search-input'); // Captura o valor digitado no campo de busca
        
        // Funções com Strings toLowerCase()
        const filter = input.value.toLowerCase(); // Transforma o texto de busca em letras minúsculas
        const results = document.getElementById('search-results'); // Captura o elemento que exibirá os resultados da busca
        results.innerHTML = ''; // Limpa os resultados anteriores
 
        // Se houver texto na busca
        if (filter) {
            // Filtra os jogos que correspondem ao texto da busca
            // Funções com Strings toLowerCase()
            const filteredGames = jogos.filter(game => game.nome.toLowerCase().includes(filter));
            
            // Se houver jogos correspondentes
            if (filteredGames.length) {
                // Cria um item de lista para cada jogo correspondente
                filteredGames.forEach(game => {
                    const item = document.createElement('a');
                    item.classList.add('list-group-item');
                    item.textContent = game.nome;
                    item.href = `#${game.id}`;

                    // Adição de Eventos 
                    // Adiciona um evento de clique para redirecionar até a seção do jogo pesquisado
                    item.addEventListener('click', function(event) {
                        event.preventDefault();
                        document.getElementById(game.id).scrollIntoView({ behavior: 'smooth' });
                    });
                    // Adiciona o item de lista ao container de resultados
                    results.appendChild(item);
                });
                // Exibe os resultados
                results.style.display = 'block';
            } else {
                // Esconde os resultados se nenhum jogo corresponder
                results.style.display = 'none';
            }
        } else {
            // Esconde os resultados se a busca estiver vazia
            results.style.display = 'none';
        } 
    }

    // Funcionalidade 11

    function redirecionarId() { // Função para redirecionar para o primeiro jogo encontrada
        
        const input = document.getElementById('search-input'); // Captura o valor do campo de busca   
        const filter = input.value.toLowerCase(); // Transforma o texto de busca em minúsculas

        // Filtra os jogos que correspondem ao texto da busca
        const filteredGames = jogos.filter(game => game.nome.toLowerCase().includes(filter));

        // Se houver jogos correspondentes
        if (filteredGames.length) {
            
            const firstGame = filteredGames[0]; // Captura o primeiro jogo correspondente

            // Redireciona até a seção do primeiro jogo encontrado através do id
            document.getElementById(firstGame.id).scrollIntoView({ behavior: 'smooth' });
        }
    } 
    // Adição de Eventos
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
 
    // Login Box

    function toggleLoginBox(event) {
        event.preventDefault();
        const loginBox = document.getElementById('login-box');
        const overlay = document.createElement('div');
        overlay.id = 'login-overlay';
        document.body.appendChild(overlay);
    
        loginBox.style.display = 'block';
        overlay.style.display = 'block';
    
        overlay.onclick = function() {
            loginBox.style.display = 'none';
            overlay.remove();
        };
    }

    // Sign Up Box

    function toggleSignUpBox(event) {
        event.preventDefault();
        closeLoginBox(); // Fecha o box de login, se estiver aberto
    
        const signUpBox = document.getElementById('signup-box');
        const overlay = document.createElement('div');
        overlay.id = 'login-overlay';
        document.body.appendChild(overlay);
    
        signUpBox.style.display = 'block';
        overlay.style.display = 'block';
    
        overlay.onclick = function() {
            signUpBox.style.display = 'none';
            overlay.remove();
        };
    }
    
    function closeSignUpBox() {
        const signUpBox = document.getElementById('signup-box');
        const overlay = document.getElementById('login-overlay');
        
        signUpBox.style.display = 'none';
        overlay.remove();
    } 
 
    // Função para abrir o login-box
function toggleLoginBox(event) {
    event.preventDefault();
    closeSignUpBox(); // Fecha o box de cadastro, se estiver aberto

    const loginBox = document.getElementById('login-box');
    const overlay = createOverlay();

    loginBox.style.display = 'block';
    overlay.style.display = 'block';

    overlay.onclick = function() {
        closeLoginBox();
    };
}

// Função para abrir o signup-box
function toggleSignUpBox(event) {
    event.preventDefault();
    closeLoginBox(); // Fecha o box de login, se estiver aberto

    const signUpBox = document.getElementById('signup-box');
    const overlay = createOverlay();

    signUpBox.style.display = 'block';
    overlay.style.display = 'block';

    overlay.onclick = function() {
        closeSignUpBox();
    };
}

// Função para fechar o login-box
function closeLoginBox() {
    const loginBox = document.getElementById('login-box');
    const overlay = document.getElementById('login-overlay');

    if (loginBox) loginBox.style.display = 'none';
    if (overlay) overlay.remove();
}

// Função para fechar o signup-box
function closeSignUpBox() {
    const signUpBox = document.getElementById('signup-box');
    const overlay = document.getElementById('login-overlay');

    if (signUpBox) signUpBox.style.display = 'none';
    if (overlay) overlay.remove();
}

// Função para criar o overlay
function createOverlay() {
    let overlay = document.getElementById('login-overlay');

    if (!overlay) { 
        overlay = document.createElement('div');
        overlay.id = 'login-overlay';
        document.body.appendChild(overlay);
    }

    return overlay;
}
 
//  Modal Bootstrap

// Função para exibir o modal
function showModal(message) {
    // Atualizar o conteúdo da mensagem do modal
    document.getElementById('modal-message').innerText = message;

    // Mostrar o modal usando o Bootstrap
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();

    // // Adicionar ouvintes de eventos para os botões "Fechar" e "x"
    // document.querySelector('.btn-close').addEventListener('click', hideModal);
    // document.querySelector('.btn-secondary').addEventListener('click', hideModal);

    
    
}



