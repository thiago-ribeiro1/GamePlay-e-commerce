// Selecionar o elemento onde os itens dos favoritos serão mostrados
let favoritesElement;

// Função para atualizar a interface da página favoritos
function updateWishList() {
    favoritesElement = document.querySelector('#wish-list');
    
    if (!favoritesElement) {
        console.error('Elemento #wish-list não encontrado.');
        return;
    }

    let wishList = JSON.parse(localStorage.getItem('favorite')) || [];
    favoritesElement.innerHTML = '';

    if (wishList.length === 0) {
        // Se não tiver nada nos favoritos, exibir mensagem
        favoritesElement.innerHTML = '<h4>Não existem produtos salvos nos Favoritos</h4>';
        return;
    }
 

    wishList.forEach(product => {

        // Estrutura de código html favoritos
        let productHTML = `
        <div class="col">
            <div class="card rounded-0 border">
                <a href="product-details.html">
                    <img src="../${product.image}" class="card-img-top" alt="Imagem Produto">
                </a>
                <div class="card-body">
                    <div class="product-info">
                        <a href="#">
                            <p class="product-category font-13 mb-1">${product.category}</p>
                        </a>
                        <a href="#">
                            <h6 class="product-name mb-2">${product.name}</h6>
                        </a>
                        <div class="d-flex align-items-center">
                            <div class="mb-1 product-price">
                                <span class="fs-5">R$${product.price.toFixed(2)}</span>
                            </div>
                            <div class="cursor-pointer ms-auto">
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-light-4"></i>
                                <i class="bx bxs-star text-light-4"></i>
                            </div>
                        </div>
                        <div class="product-action mt-2">
                            <div class="d-grid gap-2 mt-2">
                                <a href="javascript:void(0);" class="btn btn-outline-dark btn-ecomm"
                                    onclick="remover(${product.id});">
                                    <i class='bx bxs-heart'></i> Remover dos Favoritos
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        favoritesElement.innerHTML += productHTML;
    });
}

// Atualizar a interface ao carregar a página
window.addEventListener('DOMContentLoaded', (event) => {
    updateWishList();
});
