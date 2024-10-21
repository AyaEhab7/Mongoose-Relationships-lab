const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    publicationDate: { type: Number },
    genre: { type: String },
});
module.exports = mongoose.model('Book', bookSchema);

