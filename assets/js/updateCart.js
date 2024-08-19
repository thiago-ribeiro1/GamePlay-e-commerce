// Selecionar o elemento onde os itens do carrinho serão mostrados
let cartDropdown = document.querySelector('#cart-list');

// Função para atualizar a interface do carrinho
function updateCartUI() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartDropdown.innerHTML = '';

    if (cart.length === 0) {
        // Se o carrinho estiver vazio, exibir mensagem
        cartDropdown.innerHTML = '<p>Seu carrinho está vazio</p>';
        return;
    }
 
    let tituloCarrinho = `<h6><b>Carrinho<b><h6>`;

        cartDropdown.innerHTML += tituloCarrinho; // adiciona o título <h6>Carrinho<h6>
 
    cart.forEach(product => {

        // Estrutura de código html carrinho
        let productHTML = `
            <a class="dropdown-item" href="javascript:void(0);">
                <div class="d-flex align-items-center">
                    <div class="flex-grow-1">
                        <h6 class="cart-product-title">${product.name}</h6>
                        <p class="cart-product-price">R$${product.price.toFixed(2)}</p>
                    </div>
                    <div class="position-relative">
                        <div class="cart-product-cancel position-absolute" onclick="removeFromCart(${product.id})"><i class='bx bx-x'></i></div>
                    </div>
                </div>
                <div class="cart-product">
                    <img src="${product.image}" alt="product image">
                </div>
            </a>
        `;
        cartDropdown.innerHTML += productHTML;
    });

    // Adicionar botão de checkout no final
    let checkoutHTML = `
        <div class="d-grid p-3 border-top">
            <a href="checkout.html" class="btn btn-dark btn-ecomm">Continuar</a>
        </div>
    `;

    cartDropdown.innerHTML += checkoutHTML;
}

// Atualizar a interface ao carregar a página
updateCartUI();
