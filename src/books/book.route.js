const express = require("express");

const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("./book.controller");
// auth middleware
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

// post a book
router.post("/create-book", verifyToken, createBook);
// get books
router.get("/", getAllBooks);
// get a book by id
router.get("/:id", getBookById);
// update book
router.put("/edit/:id", verifyToken, updateBook);
// delete book
router.delete("/:id", verifyToken, deleteBook);

module.exports = router;
