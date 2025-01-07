const express = require("express");

const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require("./book.controller");
const router = express.Router();

// post a book
router.post("/create-book", createBook);
// get books
router.get("/", getAllBooks);
// get a book by id
router.get("/:id", getBookById);
// update book
router.put("/edit/:id", updateBook)
// delete book
router.delete("/:id", deleteBook)

module.exports = router;
