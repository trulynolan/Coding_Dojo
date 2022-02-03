const Author = require("../models/author.model");

module.exports.allAuthors = (request, response) => {
    Author.find()
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}

module.exports.createAuthor = (request, response) => {
    const { firstName, lastName } = request.body;
    Author.create({
        firstName,
        lastName
    })
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err))
}

module.exports.getAuthor = (request, response) => {
    Author.findOne({ _id: request.params.id })
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
    Author.updateOne({ _id: request.params.id }, request.body, { runValidators: true })
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}