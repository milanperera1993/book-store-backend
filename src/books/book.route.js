const express = require("express");

const { createBook } = require("./book.controller");
const router = express.Router();

// post a book
router.post("/create-book", createBook);

// get books

module.exports = router;
