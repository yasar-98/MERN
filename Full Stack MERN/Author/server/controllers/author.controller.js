const { author } = require('../models/author.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    author.create({
        name,
    })
        .then(author => response.json(author))
        .catch(err => response.json(err));
}
module.exports.getAuthor = (request, response) => {
    author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

module.exports.getAllAuthors = (request, response) => {
    author.find({})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}
module.exports.updateAuthor = (request, response) => {
    author.findOneAndUpdate({_id: request.params.id}, request.body, { new: true, runValidators: true })
        .then(updateAuthor => response.json(updateAuthor))
        .catch(err => response.json(err))
}
module.exports.deleteAuthor = (request, response) => {
    author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
