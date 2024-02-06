const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    releaseDate: Date,
    genres: [String],
    authors: [String],
    description: String,
    country: String,
    languages: [String],
    publisher: String,
    pages: Number,
},
{
    collection: 'books'
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;