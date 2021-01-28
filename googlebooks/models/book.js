///Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

///Schema
const bookSchema = new Schema({
    _id: { type: String },
    title: { type: String },
    authors: { type: Array },
    description: { type: String },
    image: { type: String },
    link: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

///xsport
module.exports = Book;