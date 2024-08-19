function removeFromCart(productId) {
    // Obter o carrinho do localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Filtrar o carrinho para remover o item com o ID correspondente
    cart = cart.filter(product => product.id !== productId);

    // Atualizar o carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Atualizar a interface do carrinho
    updateCartUI();
}
 