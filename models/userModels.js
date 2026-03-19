class Produto {
    constructor(index, nome, preco) {
        this.index = index;
        this.nome = nome;
        this.preco = preco;
    }
}

const produtos = [];

function getProdutos() {
    return produtos;
}

function addProduto(produto) {
    produtos.push(produto);
}

function deleteProduto(index) {
    produtos.splice(index, 1);
}

module.exports = {
    getProdutos,
    addProduto,
    deleteProduto
};