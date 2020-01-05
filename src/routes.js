const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// path
const products = '/products';

// rotas
routes.get(products, ProductController.list);
routes.get(`${products}/:id`, ProductController.detail);
routes.post(products, ProductController.create);
routes.put(`${products}/:id`, ProductController.update);
routes.delete(`${products}/:id`, ProductController.delete);

module.exports = routes;