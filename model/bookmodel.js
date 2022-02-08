const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: String,
  price: Number,
});

const bookModel = mongoose.model("books", bookSchema);

module.exports = bookModel;
