const Book = require("./book.model");

const createBook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(201)
      .send({ message: "Book created successfully!", book: newBook });
  } catch (error) {
    console.error("Error creating a book", error);
    res.status(500).send({ message: "Failed to create a book" });
  }
};

module.exports = {
  createBook,
};
