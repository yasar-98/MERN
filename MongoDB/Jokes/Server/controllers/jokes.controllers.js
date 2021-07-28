const { Joke } = require('../models/jokes.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello"
    });
}
    // The method below is new
module.exports.createJoke = (request, response) => {
    const { userData } = request.body;
    Joke.create(userData)
        .then(joke => response.json(joke))
        .catch(err => response.json(err));
}
module.exports.getAllJokes = (request, response) => {
    Joke.find({})
        .then(jokes => response.json(jokes))
        .catch(err => response.json(err))
}
module.exports.getJoke = (request, response) => {
    Joke.findOne({_id:request.params.id})
        .then(jokes => response.json(jokes))
        .catch(err => response.json(err))
}

module.exports.removeJoke = (request, response) => {
Joke.remove({_id:request.params.id})
    .then(result => response.json({ result: result }))
    .catch(err => response.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateJoke = (request, response) => {
Joke.updateOne({_id:request.params.id}, {
    _id:request.params.id,
    $push: {pets: {name: 'asdaaa', type: 'hezqel' }}
})
.then(updateJoke => response.json({ joke: updateJoke }))
.catch(err => response.json({ message: 'Something went wrong', error: err }));
}
