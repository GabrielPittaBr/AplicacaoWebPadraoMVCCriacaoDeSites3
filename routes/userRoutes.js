const express = require("express");
const router = express.Router();
const controller = require('../controllers/userController');

// páginas
router.get('/index', controller.getHome);
router.get('/sobre', controller.getSobre);
router.get('/contato', controller.getContato);

// produtos
router.get('/produtos', controller.getProdutos);
router.post('/produtos', controller.addProduto);
router.get('/delete/:index', controller.deleteProduto);

module.exports = router;