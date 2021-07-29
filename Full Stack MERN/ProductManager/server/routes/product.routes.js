const productController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', productController.index);
    app.get('/api/products', productController.getAllProducts);
    app.get('/api/products/:id', productController.getProduct);
    app.post('/api/createProduct', productController.createproduct);
}