const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
routes.get("/products", ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
//rota de atualização
routes.put('/products/:id', ProductController.update);
routes.delete('products/:id', ProductController.destroy);
module.exports = routes;