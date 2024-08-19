function remover(productId) {
    // Obter o item do localStorage
    let wishList = JSON.parse(localStorage.getItem('favorite')) || [];

    // Filtrar para remover o item com o ID correspondente
    wishList = wishList.filter(product => product.id !== productId);

    // Atualizar no localStorage
    localStorage.setItem('favorite', JSON.stringify(wishList));

    // Atualizar a interface dos favoritos
    updateWishList();
}
