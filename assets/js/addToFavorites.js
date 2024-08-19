// Função para adicionar produto aos favoritos
function adicionarFavoritos(productId, productCategory, productName, productPrice, productImage) {

    // Mensagem modal produto adicionado favoritos
    showModal(`Produto adicionado aos favoritos | ${productName}`);

    // Obter os produtos dos favoritos com localStorage
    let wishList = JSON.parse(localStorage.getItem('favorite')) || [];
 
    
    // Criar objeto do produto
    let product = {
        id: productId,
        category: productCategory,
        name: productName,
        price: productPrice,
        image: productImage
    };

    // Adicionar o produto nos favoritos
    wishList.push(product);

    // Salvar no localStorage
    localStorage.setItem('favorite', JSON.stringify(wishList));

    // Atualizar os favoritos na interface
    updateWishList();
    
    
}