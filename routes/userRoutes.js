const express = require("express");
const router = express.Router();
const controller = require('../controllers/userController');

// páginas
router.get('/index', controller.getHome);
router.get('/', controller.getHome);
router.get('/sobre', controller.getSobre);
router.get('/contato', controller.getContato);

// produtos
router.get('/produtos', controller.getProdutos);
router.post('/produtos', controller.addProduto);
router.get('/delete/:index', controller.deleteProduto);

// pagina especifica para cada produto
router.get('/produtos/:id', controller.getProdutoDetalhe);

//pra editar o produto
router.get('/produtos/edit/:id', controller.getEditProduto);
router.post('/produtos/edit/:id', controller.postEditProduto);

module.exports = router;