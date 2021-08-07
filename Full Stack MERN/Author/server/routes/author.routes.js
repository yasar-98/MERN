const authorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api', authorController.index);
    app.get('/api/authors', authorController.getAllAuthors);
    app.get('/api/authors/:id', authorController.getAuthor);
    app.post('/api/authors/new', authorController.createAuthor);
    app.put('/api/:id/edit', authorController.updateAuthor);
    app.delete('/api/:id/delete', authorController.deleteAuthor);
}
