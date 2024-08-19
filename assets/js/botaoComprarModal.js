// Função para exibir mensagem após compra realizada

function botaoComprarModal(productId, productName, productCategory) {


    // Criar objeto do produto
    let product = {
        id: productId,
        name: productName,
        category: productCategory
        
    };

    // Exibir a mensagem no modal usando as propriedades do objeto product
    showModal(`Você comprou ${product.name} | ${product.category}`)

}