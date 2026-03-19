const model = require("../models/userModels");

exports.getHome = (req, res) => {
    res.render('index', { title: 'Home' });
};

exports.getSobre = (req, res) => {
    res.render('sobre', { title: 'Sobre' });
};

exports.getContato = (req, res) => {
    res.render('contato', { title: 'Contato' });
};

exports.getProdutos = (req, res) => {
    const produtos = model.getProdutos();
    res.render('produtos', { produtos });
};

exports.addProduto = (req, res) => {
    const { nome } = req.body;

    model.addProduto({ nome });

    res.redirect('/produtos');
};

exports.deleteProduto = (req, res) => {
    const { index } = req.params;

    model.deleteProduto(index);

    res.redirect('/produtos');
};