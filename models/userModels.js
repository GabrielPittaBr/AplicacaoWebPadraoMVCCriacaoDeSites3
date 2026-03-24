class Produto {
    constructor(id, nome, detalhes, preco) {
        this.id = id;
        this.nome = nome;
        this.detalhes = detalhes || '';
        this.preco = preco || 0;
    }
}

let produtos = [];
let idAtual = 1;

function getProdutos() {
    return produtos;
}

function getProdutoById(id) {
    return produtos.find(p => p.id == id);
}

function addProduto(nome, detalhes, preco) {
    const novoProduto = new Produto(idAtual++, nome, detalhes, preco);
    produtos.push(novoProduto);
}

function deleteProduto(id) {
    produtos = produtos.filter(p => p.id != id);
}

function updateProduto(id, nome, detalhes, preco) {
    const produto = produtos.find(p => p.id == id);

    if (produto) {
        produto.nome = nome;
        produto.detalhes = detalhes;
        produto.preco = preco;
    }
}

module.exports = {
    getProdutos,
    getProdutoById,
    addProduto,
    deleteProduto,
    updateProduto
};