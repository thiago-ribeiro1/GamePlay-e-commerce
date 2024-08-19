// Função para adicionar produto ao carrinho
function addToCart(productId, productName, productPrice, productImage) {
   
    // Mensagem modal produto adicionado carrinho
    showModal(`Produto adicionado ao carrinho | ${productName}`);

    // Obter os produtos do carrinho do localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Criar objeto do produto
    let product = {
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage
    };

    // Adicionar o produto ao carrinho
    cart.push(product);

    // Salvar o carrinho de volta no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Atualizar o carrinho na interface
    updateCartUI();
}


